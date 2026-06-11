import { Input } from "./input";
export function DatePicker(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input type="date" {...props} />;
}
