import VM from "@violentmonkey/dom";
import { formatName } from "./util";
import { IconButton } from "./components";
import { BranchIcon } from "./icons";

VM.observe(document.body, () => {
  // ---
  // upgrade warning remover
  // ---
  const upgradeWarningContainer: Element = document.querySelector(
    "div[class='_1e0c1txw _2lx21bp4 _1bah1h6o _4cvr1y6m _1yt41e2i _zulpu2gc _otyrpxbi']",
  );
  if (upgradeWarningContainer) {
    console.log("removing upgradeWarningContainer", upgradeWarningContainer);
    upgradeWarningContainer.remove();
  }

  // ---
  // extend development details section
  // ---
  const detailsSectionsHeaders: NodeListOf<Element> = document.querySelectorAll(
    "h2[class='_1wyb1jqr _zg8l1kw7 _vwz41clk _k48pni7l _19pkpxbi _vchhusvi _syaz1fxt']",
  );

  if (detailsSectionsHeaders) {
    detailsSectionsHeaders.forEach((sectionHeader) => {
      console.log("sectionHeader", sectionHeader.textContent);

      // if (sectionHeader.textContent === "Development") {
      //   const sectionContainer = sectionHeader.closest(
      //     "div[class='_1e0c1txw _1n261g80 _otyrpxbi _1nmz1hna']",
      //   );
      //   sectionContainer.remove();
      // }
    });
  }

  const detailsSectionContainer: Element = document.querySelector(
    "div[class='_ca0qftgi _u5f31crf _n3tdftgi _19bv1crf _vchhusvi _146cjjyb _1rhgjjyb _texlutpp _kkknidpf'] > div",
  );
  const sectionContainer: Element =
    detailsSectionContainer.querySelector("div");
  if (detailsSectionContainer) {
    console.log("detailsSectionContainer", detailsSectionContainer);
    console.log("sectionContainer", sectionContainer);

    detailsSectionContainer.insertBefore(
      VM.m(<Development.DetailsSection branchName="abc" />),
      sectionContainer,
    );
  }

  // ---
  // branch name button
  // ---
  const attachButtonContainer: Element = document
    .querySelector("button[aria-label='Attach']")
    ?.closest("div[role='presentation']");
  const actionsContainer = attachButtonContainer?.parentNode;

  if (actionsContainer) {
    const taskId: Element = document.querySelector(
      "a[data-testid='issue.views.issue-base.foundation.breadcrumbs.current-issue.item'] > span",
    );
    const taskName: Element = document.querySelector(
      "h1[data-testid='issue.views.issue-base.foundation.summary.heading']",
    );

    const branchName: string = formatName(taskId.innerHTML, taskName.innerHTML);
    actionsContainer.insertBefore(
      VM.m(<IconButton Icon={BranchIcon} name={branchName} />),
      attachButtonContainer.nextSibling,
    );
    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
// disconnect();
