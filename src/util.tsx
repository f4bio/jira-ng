import VM from "@violentmonkey/ui";
import slugify from "slugify";
import { CogIcon, CopyIcon } from "./icons";
import { IconButton } from "./components";

export function formatName(id: string, name: string) {
  const _id: string = id.replace(" ", "-");
  const _name: string = slugify(name, {
    lower: true,
    strict: true,
  });
  return `${_id}/${_name}`;
}

function Dropdown({ branchName }) {
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
    <div class="atlaskit-portal" style="z-index: 511;">
      <div
        id="create-branch-dropdown"
        data-placement="bottom-end"
        tabindex="0"
        class="css-laac8r"
        style="position: fixed; inset: 0px auto auto 0px; transform: translate(443px, 569px);"
      >
        <div
          data-testid="development-summary-branch.ui.create-branch-dropdown.branch-dropdown-width-container"
          class="_1bsbrdnh"
        >
          <div style="">
            <div
              class="css-lyfip9"
              data-testid="development-summary-branch.ui.create-branch-dropdown.menu-group"
            >
              <div
                data-testid="development-summary-branch.ui.create-branch-dropdown.git-command-section"
                role="group"
                data-section="true"
                class="css-9fk1e"
              >
                <div class="_1yt4ie5z _1e0c1txw _1bah1yb4 _4cvr1h6o">
                  <div
                    data-testid="development-summary-branch.ui.create-branch-dropdown.git-command-title"
                    class="_ect41wi2 _1p1dangw _k48p1fw0 _1wyb1skh _18s81bpf _syaz1n3s"
                  >
                    Git create &amp; checkout a new branch
                  </div>
                  <div
                    data-testid="development-summary-branch.ui.create-branch-dropdown.tooltip--container"
                    role="presentation"
                  >
                    <button
                      data-testid="development-summary-branch.ui.create-branch-dropdown.config-button"
                      class="_ca0q1l7b _u5f31l7b _n3td1l7b _19bv1l7b _19itglyw _2rko1y44 _bfhk18uv _80omtlke _irr3yucn _o7kskn6i _v5641v24 _vwz4idpf"
                    >
                      <span
                        role="img"
                        aria-label="Update branch name format"
                        class="css-1wits42"
                        style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
                      >
                        <CogIcon />
                      </span>
                    </button>
                  </div>
                </div>
                <div class="_1yt4176f">
                  <div class="is2i2p-0 bwVwYv">
                    <div class="is2i2p-1 cbJhSp">
                      <div
                        data-ds--text-field--container="true"
                        data-testid="platform-copy-text-field.textfield---container"
                        class="css-1o07z2d"
                      >
                        <input
                          data-ds--text-field--input="true"
                          data-testid="platform-copy-text-field.textfield--"
                          readonly=""
                          class="css-mfjdp3"
                          value="git checkout -b SCRUM-1-my-test-story"
                        />
                      </div>
                    </div>
                    <span role="presentation">
                      <button
                        aria-busy="false"
                        class="css-1r3sre2"
                        data-testid="platform-copy-text-field.styled-button-"
                        tabindex="0"
                        type="button"
                        onclick={handleClick}
                      >
                        <span class="css-bwxjrz">
                          <span
                            role="img"
                            aria-label="Copy icon"
                            class="css-snhnyn"
                            style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
                          >
                            <CopyIcon />
                          </span>
                        </span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default {
  formatName: formatName,
  Button: IconButton,
  Dropdown: Dropdown,
};
