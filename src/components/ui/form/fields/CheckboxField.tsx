import { cn } from "@/libs";
import { Checkbox } from "../Checkbox";
import { Label } from "../Label";
import { CheckedState } from "@radix-ui/react-checkbox";

export function CheckboxField({
  label,
  paragraph,
  checked,
  id,
  onCheckedChange,
  disabled
}: {
  onCheckedChange?: (checked: CheckedState) => void;
  label?: string;
  checked?: boolean;
  paragraph?: string;
  id?: string;
  disabled?: boolean
}) {
  return (
    <div className={cn("flex space-x-2 text-textGray items-center", {'opacity-50': disabled})}>
      <Checkbox disabled={disabled} onCheckedChange={onCheckedChange} checked={checked} id={id} />
      <div className="flex gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        <p className="text-sm text-muted-foreground">{paragraph}</p>
      </div>
    </div>
  );
}
