import { FieldProps } from '@/types/form'
import { TextArea, TextAreaProps } from '../TextArea'
import { FieldRoot } from './FieldRoot'

export const TextareaField = ({
  name,
  onChange,
  noMargins,
  label,
  value,
  icon,
  className,
  id,
  disabled,
  errorMessage,
  labelClassName,
  inputClassName,
  rows = 5,
  ...props
}: Omit<FieldProps, 'onChange'> & TextAreaProps) => {
  const isInvalid = !!errorMessage

  return (
    <FieldRoot
      className={className}
      noMargins={noMargins}
      error={isInvalid}
      id={id}
      name={name}
      disabled={disabled}
      label={label}
      labelClassName={labelClassName}
      errorMessage={errorMessage}
    >
      <TextArea
        onChange={onChange}
        error={isInvalid}
        icon={icon}
        value={value}
        id={id ?? name}
        disabled={disabled}
        rows={rows}
        inputClassName={inputClassName}
        type='text'
        {...props}
      />
    </FieldRoot>
  )
}