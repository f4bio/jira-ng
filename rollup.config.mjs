import path from "path";
import plaid from "@gera2ld/plaid";
import userscript from "rollup-plugin-userscript";
import svg from "rollup-plugin-svg";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
// import svgr from "@svgr/rollup";
import pkg from "./package.json" assert { type: "json" };

plaid.getRollupPlugins;

const { getRollupPlugins } = plaid;
const DIST = "dist";
const FILENAME = "index";
const isProd = process.env.BUILD === "production";

const bundleOptions = {
  extend: true,
  esModule: false,
};
const rollupConfig = [
  {
    input: "src/index.ts",
    plugins: [
      ...getRollupPlugins({
        esm: true,
        minimize: false,
        postcss: {
          inject: false,
          minimize: isProd ? true : false,
        },
        extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
        replaceValues: {
          preventAssignment: true,
        }
      }),
      resolve(),
      image(),
      // svg(),
      // svgr({ icon: true }),
      userscript(path.resolve("src/meta.js"), (meta) =>
        meta
          .replace("process.env.VERSION", pkg.version)
          .replace("process.env.AUTHOR", pkg.author),
      ),
    ],
    external: ["@violentmonkey/ui", "@violentmonkey/dom"],
    output: {
      format: "iife",
      file: `${DIST}/${FILENAME}.user.js`,
      globals: {
        "@violentmonkey/dom": "VM",
        "@violentmonkey/ui": "VM",
      },
      ...bundleOptions,
    },
  },
];

rollupConfig.forEach((item) => {
  item.output = {
    indent: false,
    // If set to false, circular dependencies and live bindings for external imports won"t work
    externalLiveBindings: false,
    ...item.output,
  };
});

export default rollupConfig;
