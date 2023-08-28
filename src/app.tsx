import VM from "@violentmonkey/dom";
import { copyToClipboard, formatName } from "./util";
import { IconButton } from "./components";
import { BranchIcon } from "./icons";

VM.observe(document.body, () => {
  const taskId = () => {
    const taskId: Element = document.querySelector(
      "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
    );
    return taskId?.innerHTML;
  };
  const taskName = () => {
    const taskName: Element = document.querySelector(
      "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
    );
    return taskName?.innerHTML;
  };

  /**
   * upgrade warning remover
   */
  const upgradeWarningContainer: Element = document.querySelector(
    "div[class='_1e0c1txw _2lx21bp4 _1bah1h6o _4cvr1y6m _1yt41e2i _zulpu2gc _otyrpxbi']",
  );
  if (upgradeWarningContainer) {
    console.log("removing upgradeWarningContainer", upgradeWarningContainer);
    upgradeWarningContainer.remove();
  }

  /**
   * extend development details section
   */
  const issueField: Element = document.querySelector(
    "div[data-component-selector='jira-issue-field-heading-field-wrapper']",
  );
  const issueFieldContainer: Element = document.querySelector(
    "div[data-testid='issue-view-layout-templates-views.ui.context.visible-hidden.ui.context-group.details-group']",
  );
  if (issueField && issueFieldContainer) {
    // console.log("issueFieldContainer", issueFieldContainer);
    // console.log("issueField", issueField);
    // const branchName: string = formatName(taskId(), taskName());
    // issueFieldContainer.insertBefore(
    //   VM.m(
    //     <IssueField
    //       name={branchName}
    //       Icon={undefined}
    //       handleClick={undefined}
    //     />,
    //   ),
    //   issueField.nextSibling,
    // );
  }

  /**
   * branch name button
   */
  const attachButtonContainer: Element = document
    .querySelector("button[aria-label='Attach']")
    ?.closest("div[role='presentation']");
  const actionsContainer = attachButtonContainer?.parentNode;

  if (actionsContainer) {
    const branchName: string = formatName(taskId(), taskName());
    actionsContainer.insertBefore(
      VM.m(
        <IconButton
          handleClick={copyToClipboard(branchName)}
          Icon={BranchIcon}
          name={branchName}
          title="Copy branch name to clipboard"
        />,
      ),
      attachButtonContainer.nextSibling,
    );
    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
