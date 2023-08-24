import { ConsoleIcon, PinIcon } from "./icons";
import { CreateBranchButton } from "./components/create-branch-button";
import { CreateCommitButton } from "./components";

function DetailsSection({ branchName }) {
  return (
    <div
      data-component-selector="jira-issue-field-heading-field-wrapper"
      class="_1e0c1txw _1n261g80 _otyrpxbi _1nmz1hna"
    >
      <div class="_14nx1u4f _s1t41u4f _13pa1440 _nopz1440 _1fr61440 _uqy11440 _kqswh2mm _16jlkb7n _vchhusvi _u5f3idpf _1ul968cl _1bsbhwvj _ca0qftgi _vwz4kb7n _p12f7l9q _1e0c1txw">
        <h2
          data-component-selector="jira-issue-field-heading-field-heading-title"
          class="_1wyb1jqr _zg8l1kw7 _vwz41clk _k48pni7l _19pkpxbi _vchhusvi _syaz1fxt"
        >
          Development #2
        </h2>
        <div
          data-component-selector="jira-issue-field-pin-field-pin-button"
          data-test-id="issue-field-pin.field-pin"
          data-testid="issue-field-pin.field-pin"
          class="_80omtlke _18u01b66 _1o9zidpf"
        >
          <div role="presentation">
            <button
              data-component-selector="jira-issue-field-pin-with-button-wrapper"
              aria-pressed="false"
              aria-label="Development Pin to top. Only you can see pinned fields."
              class="_11q7glyw _1du2glyw _19lcglyw _27a8mijp _f032hwed css-8vysra"
              data-testid="issue-field-pin.button"
              tabindex="0"
              type="button"
            >
              <span class="css-18kgcs9">
                <div
                  data-component-selector="jira-issue-field-pin-unpinned-icon-wrapper"
                  class="_syazadx1 _30l3hwed issue-details-pin-icon-wrapper"
                >
                  <span
                    aria-hidden="true"
                    class="css-snhnyn"
                    style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
                  >
                    <PinIcon />
                  </span>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="_16jlkb7n _1bsb1nrf _vchhusvi _17m211fb _196m16np"
        style="--_1bsxogg: 0 0 0 6px; --_z7gtgw: var(--c-, );"
      >
        <div
          class="_1reo15vq _18m915vq _19pk1h22 _2hwx1h22 _otyr1h22 _18u01h22 _1yt4pxbi"
          style=""
        >
          <div
            class="sc-7p9my5-12 jujrGl"
            data-testid="development-summary-branch.ui.summary-item"
          >
            <div class="sc-7p9my5-7 ftkQEp">
              <div>
                <div
                  class="sc-7p9my5-2 jWnPGy"
                  data-testid="development-summary-common.ui.summary-item.link-formatted-container"
                >
                  <CreateBranchButton branchName="abc" />
                </div>
              </div>
              <div class="sc-7p9my5-4 efHKqo">
                <div class="_2rko1l7b _18u0v77o">
                  <div role="presentation">
                    <button
                      aria-controls="create-branch-dropdown"
                      aria-expanded="false"
                      aria-haspopup="true"
                      class="css-udno6l"
                      data-testid="development-summary-branch.ui.create-branch-command-button.create-branch-command-button"
                      tabindex="0"
                      type="button"
                    >
                      <span class="css-bwxjrz">
                        <span
                          role="img"
                          aria-label="Create and checkout new branch"
                          class="css-1wits42"
                          style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
                        >
                          <ConsoleIcon />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-7p9my5-12 jujrGl"
            data-testid="development-summary-commit.ui.summary-item"
          >
            <div class="sc-7p9my5-7 hZslNB">
              <div>
                <div
                  class="sc-7p9my5-2 kdKfdX"
                  data-testid="development-summary-common.ui.summary-item.link-formatted-container"
                >
                  <CreateCommitButton branchName="abc" />
                </div>
              </div>
              <div class="sc-7p9my5-4 efHKqo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default {
  DetailsSection: DetailsSection,
};
