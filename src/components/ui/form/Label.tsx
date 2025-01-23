import { cn } from '@/libs'
import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
  error?: boolean
  htmlFor?: string
}

export const Label = ({ htmlFor, className, error, disabled, ...props }: LabelProps) => {
  return (
    <label
      className={cn(
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
        error && 'text-negative',
        disabled && 'cursor-not-allowed opacity-70'
      )}
      htmlFor={htmlFor}
      {...props}
    />
  )
}