import VM from "@violentmonkey/ui";
import { BranchIcon } from "../icons";

export function BranchNameButton({ branchName }) {
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
                <BranchIcon />
              </span>
            </span>
          </span>
          <span class="css-178ag6o">Branch Name</span>
        </button>
      </span>
    </div>
  );
}
