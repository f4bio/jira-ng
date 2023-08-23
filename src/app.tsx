import VM from "@violentmonkey/dom";
import slugify from "slugify";
import BranchIcon from "./icons/branch";

function formatBranchName(id: string, name: string) {
  const _id = id.replace(/-/g, "");
  const _name = slugify(name);
  return `${_id}-${_name}`;
}

function BranchNameButton({ branchName }) {
  function handleClick() {
    alert("branch name: " + branchName);
  }

  return (
    <div role="presentation">
      <button
        class="css-1d0sz8l"
        tabindex="0"
        type="button"
        onClick={handleClick}
      >
        <span class="css-bwxjrz">
          <span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _18u0myb0 _2hwx12gs">
            <span class="css-1afrefi">
              <BranchIcon />
            </span>
          </span>
        </span>
        <span class="css-178ag6o">Branch Name</span>
      </button>
    </div>
  );
}

VM.observe(document.body, () => {
  // Find the target node
  const attachButtonContainer = document
    .querySelector("button[aria-label='Attach']")
    .closest("div[role='presentation']");
  const actionsContainer = attachButtonContainer?.parentNode;

  const taskId = document.querySelector(
    "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
  );
  const taskName = document.querySelector(
    "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
  );

  if (actionsContainer && taskId && taskName) {
    const branchName = formatBranchName(taskId.innerHTML, taskName.innerHTML);
    console.log("branchName:", branchName);

    actionsContainer.insertBefore(
      VM.m(<BranchNameButton branchName={branchName} />),
      attachButtonContainer.nextSibling
    );

    // const button = document.createElement("button");
    // button.innerHTML = "Get Branch Name";
    // button.onclick = () => {
    //   alert("branch name: " + branchName);
    //
    //   GM_setClipboard(branchName, "text/plain");
    // };
    // console.log("button", button);

    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
