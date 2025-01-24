import { FieldProps } from '@/types/form'
import { Input } from '../Input'
import { FieldRoot } from './FieldRoot'

export const DateField = ({ name, onChange, label, value, className, id, disabled, errorMessage, ...props }: FieldProps) => {
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
      <Input
        onChange={onChange}
        error={isInvalid}
        value={value}
        id={id ?? name}
        disabled={disabled}
        type='date'
        className='relative placeholder:text-sm'
        pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
        {...props}
      />
    </FieldRoot>
  )
}