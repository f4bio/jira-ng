export function IconButton({ Icon, name, title, handleClick }) {
  return (
    <div role="presentation">
      <button
        aria-label="BranchName"
        aria-busy="false"
        class="css-1xewsy6"
        tabindex="0"
        type="button"
        onClick={handleClick(name)}
        title={title}
      >
        <span class="css-bwxjrz">
          <span class="_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _18u0myb0 _2hwx12gs">
            <span
              aria-hidden="true"
              class="css-1afrefi"
              style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"
            >
              <Icon />
            </span>
          </span>
        </span>
        <span class="css-178ag6o">{name}</span>
      </button>
    </div>
  );
}
