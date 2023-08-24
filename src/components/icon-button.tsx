import VM from "@violentmonkey/ui";

export function IconButton({ Icon, name }) {
  function handleClick(): void {
    // alert("branch name: " + branchName);
    console.log("branch name: " + name);

    VM.showToast(<div>copied branch-name `{name}` to your clipboard!</div>, {
      theme: "dark",
      duration: 5000,
    });
    GM_setClipboard(name, "text/plain");
  }

  return (
    <button
      class="css-1xewsy6"
      tabindex="0"
      type="button"
      onClick={handleClick}
    >
      <span class="css-bwxjrz">
        <span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _18u0myb0 _2hwx12gs">
          <span
            class="css-1afrefi"
            style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
          >
            <Icon />
          </span>
        </span>
      </span>
      <span class="css-178ag6o">Branch Name</span>
    </button>
  );
}
