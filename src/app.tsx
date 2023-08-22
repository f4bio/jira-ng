import slugify from "slugify";
import IconBranchSvg from "./icons/branch.svg";
import IconBranchPng from "./icons/branch.png";

function formatBranchName(id: string, name: string) {
  const _id = id.replace(/-/g, "");
  const _name = slugify(name);
  return `${_id}-${_name}`;
}

function BranchNameButton() {
  return (
    <div role="presentation">
      <button class="css-1d0sz8l" tabindex="0" type="button">
        <span class="css-bwxjrz">
          <span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _18u0myb0 _2hwx12gs">
            <span class="css-1afrefi">Branch Icon</span>
            <img src={IconBranchPng} alt="Whatever" />
            <IconBranchSvg />
          </span>
        </span>
        <span class="css-178ag6o">Branch Name</span>
      </button>
    </div>
  );
}

VM.hm(<BranchNameButton />);

VM.observe(document.body, () => {
  // Find the target node
  const actionPanel = document.querySelector("._otyr1b66._1yt4swc3._1e0c116y");
  const taskId = document.querySelector(
    "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
  );
  const taskName = document.querySelector(
    "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
  );

  if (actionPanel && taskId && taskName) {
    const branchName = formatBranchName(taskId.innerHTML, taskName.innerHTML);
    console.log("branchName:", branchName);

    // Let's create a movable panel using @violentmonkey/ui
    // const panel = ui.getPanel({
    //   content: <BranchNameButton />,
    //   theme: "dark",
    //   style: [globalCss, stylesheet].join("\n"),
    // });
    // panel.wrapper.style.top = "100px";
    // panel.setMovable(true);
    // panel.show();

    const panel = VM.getPanel({
      content: <BranchNameButton />,
      theme: "light",
    });
    console.log("panel", panel);
    actionPanel.append(panel.wrapper);

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
