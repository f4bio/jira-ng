import VM from "@violentmonkey/ui";
import slugify from "slugify";

export function formatName(id: string, name: string) {
  const _id: string = id.replace(" ", "-");
  const _name: string = slugify(name, {
    lower: true,
    strict: true,
  });
  return `${_id}/${_name}`;
}

export function handleClick({ name }): void {
  VM.showToast(<div>clicked on `{name}`</div>, {
    theme: "dark",
    duration: 5000,
  });
  GM_setClipboard(name, "text/plain");
}
