import { cn } from '@/libs'
import { InputProps } from '@/types'
import { useState } from 'react'
import { SelectContent, SelectItem, Select as SelectRoot, SelectTrigger, SelectValue } from './SelectCore'

export type OptionsList = { label?: string; value: string }

export type OptionsListUF = { name?: string; id: string; uf?: string }

interface SelectProps extends Omit<InputProps, 'onChange' | 'value' | 'defaultValue' | 'dir'> {
  options: OptionsList[]
  placeholder: string
  className?: string
  value?: string | number
  onChange: (value: string) => void
  name?: string
  id?: string
  icon?: string
}

export const Select = ({
  options,
  disabled,
  placeholder,
  className,
  value,
  onChange,
  error,
  id,
  name,
  icon,
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <SelectRoot
      open={disabled ? false : open}
      onOpenChange={() => setOpen(!open)}
      value={value ? String(value) : undefined}
      onValueChange={v => onChange(v)}
      {...props}
    >
      <SelectTrigger
        icon={icon}
        id={id ?? name}
        className={cn({ 'opacity-50 cursor-not-allowed': disabled }, className)}
        error={error}
      >
        <SelectValue className='z-[200]' placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.length === 0 ? (
          <div className='py-6 text-center text-sm'>Sem registro</div>
        ) : (
          <>
            {options.map((option, index) => (
              <SelectItem key={index} value={option.value}>
                <p className='text-start text-primary'>{option.label}</p>
              </SelectItem>
            ))}
          </>
        )}
      </SelectContent>
    </SelectRoot>
  )
}