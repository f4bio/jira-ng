import VM from "@violentmonkey/dom";
import Branch from "./branch";

VM.observe(document.body, () => {
  // Find the target node
  const attachButtonContainer: Element = document
    .querySelector("button[aria-label='Attach']")
    .closest("div[role='presentation']");
  const actionsContainer = attachButtonContainer?.parentNode;

  const taskId: Element = document.querySelector(
    "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
  );
  const taskName: Element = document.querySelector(
    "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
  );

  if (actionsContainer && taskId && taskName) {
    const branchName: string = Branch.formatName(
      taskId.innerHTML,
      taskName.innerHTML,
    );
    actionsContainer.insertBefore(
      VM.m(<Branch.Button branchName={branchName} />),
      attachButtonContainer.nextSibling,
    );
    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
