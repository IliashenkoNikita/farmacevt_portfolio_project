import { Input } from "./input";

export function FileUpload({ label }: { label: string }) {
  return <Input type="file" aria-label={label} />;
}
