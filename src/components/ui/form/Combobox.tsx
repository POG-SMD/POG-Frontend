import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components";
import {} from "@/components";
import { cn } from "@/libs";
import { Icon } from "@iconify/react/dist/iconify.js";
import * as React from "react";
import { OptionsList } from "./Select";
import { truncateString } from "@/utils/stringHelpers";

interface ComboBoxProps {
  options: OptionsList[];
  value: string | string[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  errorMessage?: string;
  name?: string;
  multipleValues?: boolean;
  popoverClassName?: string;
  icon?: string;
  align?: "center" | "end" | "start";
  portal?: boolean;
}

export const Combobox = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  className,
  name,
  error,
  errorMessage,
  multipleValues,
  popoverClassName,
  align,
  icon = "mi:select",
}: ComboBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState(options);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue === value ? "" : selectedValue);
    setOpen(false);
    setSearch("");
  };

  React.useEffect(() => {
    setFilteredOptions(
      options.filter(
        (option) =>
          option.label &&
          option.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  return (
    <div className={className}>
      <Popover
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setSearch("");
          }
        }}
        modal
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between relative border-textGray truncate text-textColor hover:bg-transparent font-normal",
              className,
              {
                "border-negative text-negative hover:text-negative":
                  error || errorMessage,
              }
            )}
            disabled={disabled}
            onClick={() => setOpen(!open)}
            name={name}
          >
            <span className="max-w-[95%] truncate">
              {truncateString(
                multipleValues
                  ? placeholder
                  : value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder,
                22
              )}
            </span>
            <Icon
              className={cn(
                "opacity-65 group-focus:opacity-100 group-focus:text-primary text-xl",
                {
                  "group-focus:text-negative": error,
                }
              )}
              icon={icon}
            />
          </Button>
        </PopoverTrigger>
        
          <PopoverContent
            align={align}
            className={cn(
              "absolute bottom-full mb-2 w-full min-w-[300px] p-0",
              popoverClassName
            )}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Command shouldFilter={false}>
              <CommandInput
                placeholder="Search..."
                value={search}
                onValueChange={(val) => setSearch(val)}
                autoFocus
                onMouseDown={(e) => e.stopPropagation()}
                name={name}
              />
              <CommandList>
                {filteredOptions.length === 0 ? (
                  <CommandEmpty>Sem registro.</CommandEmpty>
                ) : (
                  <CommandGroup className="text-textColor">
                    {filteredOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={() => handleSelect(option.value)}
                      >
                        <Icon
                          icon='lucide:check'
                          className={cn(
                            "mr-2 h-4 w-4",
                            (multipleValues && value.includes(option.value)) ||
                              value === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
      </Popover>
    </div>
  );
};
