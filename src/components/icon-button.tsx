export function IconButton({ Icon, name, handleClick }) {
  return (
    <button tabindex="0" type="button" onClick={handleClick}>
      <span>
        <Icon />
      </span>
      <span>{name}</span>
    </button>
  );
}
