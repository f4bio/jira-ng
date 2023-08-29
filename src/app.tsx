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

  /* remove upgrade warning */
  const upgradeWarningContainer: Element = document.querySelector(
    "div[class='_1e0c1txw _2lx21bp4 _1bah1h6o _4cvr1y6m _1yt41e2i _zulpu2gc _otyrpxbi']",
  );
  if (upgradeWarningContainer) {
    upgradeWarningContainer.remove();
  }

  /* add branch name button */
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
