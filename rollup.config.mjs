import path from "path";
import plaid from "@gera2ld/plaid";
import userscript from "rollup-plugin-userscript";
import pkg from "./package.json" assert { type: "json" };

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
        minimize: isProd,
        postcss: {
          inject: false,
          minimize: isProd
        },
        extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
        replaceValues: {
          preventAssignment: true,
        }
      }),
      userscript(path.resolve("src/meta.js"), (meta) =>
        meta
          .replace("process.env.VERSION", pkg.version)
          .replace("process.env.AUTHOR", pkg.author)
          .replace("process.env.DESCRIPTION", pkg.description),
      ),
    ],
    external: ["@violentmonkey/ui", "@violentmonkey/dom", "slugify"],
    output: {
      format: "iife",
      file: `${DIST}/${FILENAME}.user.js`,
      globals: {
        "@violentmonkey/dom": "VM",
        "@violentmonkey/ui": "VM",
        "slugify": "slugify"
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
