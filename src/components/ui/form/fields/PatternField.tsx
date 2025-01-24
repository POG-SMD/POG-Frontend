import { FieldProps } from '@/types/form'
import { PatternFormatProps } from 'react-number-format'
import { PatternInput } from '../PatternInput'
import { FieldRoot } from './FieldRoot'

type PatternWrapProp = PatternFormatProps & FieldProps

interface PatternFieldProps extends Omit<PatternWrapProp, 'onChange'> {
  onChange: (value: string) => void
  format: string
}

export const PatternField = ({
  name,
  onChange,
  label,
  value,
  className,
  id,
  disabled,
  errorMessage,
  placeholder,
  format,
  mask,
  ...props
}: PatternFieldProps) => {
  const isInvalid = !!errorMessage

  return (
    <FieldRoot
      className={className}
      error={isInvalid}
      id={id}
      name={name}
      disabled={disabled}
      label={label}
      errorMessage={errorMessage}
    >
      <PatternInput
        handleChange={onChange}
        error={isInvalid}
        value={value}
        id={id ?? name}
        disabled={disabled}
        placeholder={placeholder ?? ''}
        format={format}
        mask={mask}
        {...props}
      />
    </FieldRoot>
  )
}