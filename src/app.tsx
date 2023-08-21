import { getPanel } from "@violentmonkey/ui";
import { Sluggin } from "sluggin";

function formatBranchName(id: string, name: string) {
  const _id = id.replace(/[-]/g, "");
  const _name = Sluggin(name);
  return `${_id}-${_name}`;
}

VM.observe(document.body, () => {
  // Find the target node
  const actionPanel = document.querySelector("._otyr1b66._1yt4swc3._1e0c116y");
  const taskId = document.querySelector(
    "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
  ).innerHTML;
  const taskName = document.querySelector(
    "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
  ).innerHTML;

  if (actionPanel && taskId && taskName) {
    const branchName = formatBranchName(taskId, taskName);

    console.log("branchName:", branchName);

    const button = document.createElement("button");
    button.innerHTML = "Get Branch Name";
    button.onclick = () => {
      alert("branch name: " + branchName);
    };
    actionPanel.append(button);

    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
