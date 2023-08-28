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

export function copyToClipboard(content: string): void {
  VM.showToast(<div>copied to clipboard</div>, {
    theme: "dark",
    duration: 2000,
  });
  GM_setClipboard(content, "text/plain");
}
