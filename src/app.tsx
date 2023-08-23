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
    console.log("branchName:", branchName);

    actionsContainer.insertBefore(
      VM.m(<Branch.Button branchName={branchName} />),
      attachButtonContainer.nextSibling,
    );

    // const button = document.createElement("button");
    // button.innerHTML = "Get Branch Name";
    // button.onclick = () => {
    //   alert("branch name: " + branchName);
    //
    GM_setClipboard(branchName, "text/plain");
    // };
    // console.log("button", button);

    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
