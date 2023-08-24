import VM from "@violentmonkey/ui";
import { CopyIcon } from "../icons";

export function CreateCommitDropdown({ branchName }) {
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
    <div
      id="create-commit-dropdown"
      data-placement="bottom-end"
      data-testid="development-summary-commit.ui.create-commit-dropdown.popup"
      tabindex="0"
      class="css-laac8r"
      style="position: fixed; inset: 0px auto auto 0px; transform: translate(720px, 481px);"
    >
      <div class="_p12frdnh">
        <div class="css-lyfip9">
          <div
            aria-label="Link commits to Jira issues"
            role="group"
            data-section="true"
            class="css-9fk1e"
          >
            <div
              data-ds--menu--heading-item="true"
              aria-hidden="true"
              class="css-xhdqsk"
            >
              Link commits to Jira issues
            </div>
            <div class="_1yt4176f">
              Include issue keys in your commit messages to link them to your
              Jira issues.{" "}
              <a
                target="_blank"
                class="css-137quks"
                data-testid="development-summary-commit.ui.create-commit-dropdown.button-learn-more"
                href="https://support.atlassian.com/jira-software-cloud/docs/reference-issues-in-your-development-work/"
                tabindex="0"
              >
                <span class="css-1gd7hga">Learn more</span>
              </a>
              <div class="css-uv0shy">
                <label
                  id="copy-issue-key-uid23-label"
                  for="copy-issue-key-uid23"
                  class="css-1ckttv1"
                >
                  Copy issue key
                </label>
                <div class="is2i2p-0 bwVwYv">
                  <div class="is2i2p-1 cbJhSp">
                    <div
                      data-ds--text-field--container="true"
                      data-testid="platform-copy-text-field.textfield--copy-issue-key-container"
                      class="css-1o07z2d"
                    >
                      <input
                        id="copy-issue-key"
                        aria-labelledby="copy-issue-key-uid23-label"
                        data-ds--text-field--input="true"
                        data-testid="platform-copy-text-field.textfield--copy-issue-key"
                        readonly=""
                        class="css-mfjdp3"
                        value="MSP-5"
                      />
                    </div>
                  </div>
                  <span role="presentation">
                    <button
                      aria-busy="false"
                      class="css-1r3sre2"
                      data-testid="platform-copy-text-field.styled-button-copy-issue-key"
                      tabindex="0"
                      type="button"
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
              <div class="css-uv0shy">
                <label
                  id="copy-git-commit-uid24-label"
                  for="copy-git-commit-uid24"
                  class="css-1ckttv1"
                >
                  Copy sample Git commit
                </label>
                <div class="is2i2p-0 bwVwYv">
                  <div class="is2i2p-1 cbJhSp">
                    <div
                      data-ds--text-field--container="true"
                      data-testid="platform-copy-text-field.textfield--copy-git-commit-container"
                      class="css-1o07z2d"
                    >
                      <input
                        id="copy-git-commit"
                        aria-labelledby="copy-git-commit-uid24-label"
                        data-ds--text-field--input="true"
                        data-testid="platform-copy-text-field.textfield--copy-git-commit"
                        readonly=""
                        class="css-mfjdp3"
                        value='git commit -m "MSP-5 <message>"'
                      />
                    </div>
                  </div>
                  <span role="presentation">
                    <button
                      aria-busy="false"
                      class="css-1r3sre2"
                      data-testid="platform-copy-text-field.styled-button-copy-git-commit"
                      tabindex="0"
                      type="button"
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
  );
}
