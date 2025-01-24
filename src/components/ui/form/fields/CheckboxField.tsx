import { Checkbox } from "../Checkbox";
import { Label } from "../Label";

export function CheckboxField({
  label,
  paragraph,
  checked,
  id,
  onCheckedChange,
}: {
  onCheckedChange?: () => void;
  label?: string;
  checked?: boolean;
  paragraph?: string;
  id?: string;
}) {
  return (
    <div className="flex space-x-2 text-textGray items-center">
      <Checkbox onCheckedChange={onCheckedChange} checked={checked} id={id} />
      <div className="flex gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        <p className="text-sm text-muted-foreground">{paragraph}</p>
      </div>
    </div>
  );
}
