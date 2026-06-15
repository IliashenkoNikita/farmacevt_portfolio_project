import { Input } from "./input";

export function FileUpload({ label = "Upload file" }: { label?: string }) {
  return <Input type="file" aria-label={label} />;
}
