import VM from "@violentmonkey/dom";
import { ChevronDownIcon, CommitIcon } from "../icons";
import { CreateCommitDropdown } from "./create-commit-dropdown";

export function CreateCommitButton({ branchName }) {
  function handleCreateCommitClick(): void {
    const attachButtonContainer: Element = document.querySelector(
      "span[class='css-bwxjrz']",
    );

    attachButtonContainer.appendChild(
      VM.m(<CreateCommitDropdown branchName={branchName} />),
    );
  }

  return (
    <button
      target="_blank"
      aria-controls="create-commit-dropdown"
      aria-expanded="false"
      aria-haspopup="true"
      class="sc-7p9my5-0 fqkqag css-18uuelw"
      data-testid="development-summary-common.ui.summary-item.link-formatted-button"
      href=""
      tabindex="0"
      type="button"
      onclick={handleCreateCommitClick}
    >
      <span class="css-bwxjrz">
        <span aria-hidden="true" class="_s7n4nkob">
          <span
            aria-hidden="true"
            class="css-1afrefi"
            style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
          >
            <CommitIcon />
          </span>
        </span>
      </span>
      <span class="css-178ag6o">
        <div class="_y3gn1e5h">Create commit</div>
      </span>
      <span class="css-bwxjrz">
        <span
          role="img"
          aria-label="Open create commit dropdown"
          class="css-1afrefi"
          style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
        >
          <ChevronDownIcon />
        </span>
      </span>
    </button>
  );
}
