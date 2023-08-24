import VM from "@violentmonkey/ui";
import { BranchIcon, OpenExternalIcon } from "../icons";

export function CreateBranchButton({ branchName }) {
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
    <a
      target="_blank"
      aria-controls=""
      aria-expanded="false"
      aria-haspopup="false"
      class="sc-7p9my5-0 fqkqag css-18uuelw"
      data-testid="development-summary-common.ui.summary-item.link-formatted-button"
      href="https://bitbucket.org/branch/create?issueKey=SCRUM-6&amp;issueType=Subtask&amp;issueSummary=Tesrt2"
      tabindex="0"
      type="button"
    >
      <span class="css-bwxjrz">
        <span aria-hidden="true" class="_s7n4nkob">
          <span
            aria-hidden="true"
            class="css-1afrefi"
            style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
          >
            <BranchIcon />
          </span>
        </span>
      </span>
      <span class="css-178ag6o">
        <div class="_y3gn1e5h">Create branch</div>
      </span>
      <span class="css-bwxjrz">
        <div class="sc-7p9my5-1 hEIFJZ">
          <span
            role="img"
            aria-label="Link to external website in new tab"
            class="css-1wits42"
            style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
          >
            <OpenExternalIcon />
          </span>
        </div>
      </span>
    </a>
  );
}
