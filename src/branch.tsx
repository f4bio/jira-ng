import VM from "@violentmonkey/ui";
import slugify from "slugify";
import { SVGProperties } from "./types/svg";

function formatName(id: string, name: string) {
  const _id: string = id.replace(/-/g, "");
  const _name: string = slugify(name, {
    lower: true,
    strict: true,
  });
  return `${_id}-${_name}`;
}

function Icon(props: SVGProperties) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="presentation"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 14c-3.36 0-4.46 1.35-4.82 2.24C9.25 16.7 10 17.76 10 19a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-1.31.83-2.42 2-2.83V7.83A2.99 2.99 0 0 1 4 5a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 1.31-.83 2.42-2 2.83v5.29c.88-.65 2.16-1.12 4-1.12c2.67 0 3.56-1.34 3.85-2.23A3.006 3.006 0 0 1 14 7a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 1.34-.88 2.5-2.09 2.86C17.65 11.29 16.68 14 13 14m-6 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"
      ></path>
    </svg>
  );
}

function Button({ branchName }) {
  function handleClick(): void {
    // alert("branch name: " + branchName);
    console.log("branch name: " + branchName);

    VM.showToast(
      <div>copied branch-name `{branchName}` to your clipboard!</div>,
      {
        theme: "dark",
        duration: 5000,
      },
    );
    GM_setClipboard(branchName, "text/plain");
  }

  return (
    <div role="presentation">
      <span class="_2hwxu2gc">
        <button
          class="css-1xewsy6"
          tabindex="0"
          type="button"
          onClick={handleClick}
        >
          <span class="css-bwxjrz">
            <span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _18u0myb0 _2hwx12gs">
              <span
                class="css-1afrefi"
                style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
              >
                <Icon />
              </span>
            </span>
          </span>
          <span class="css-178ag6o">Branch Name</span>
        </button>
      </span>
    </div>
  );
}

export default {
  formatName: formatName,
  Button: Button,
  Icon: Icon,
};
