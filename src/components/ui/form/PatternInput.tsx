import { InputProps } from '@/types/form'
import { PatternFormat, PatternFormatProps } from 'react-number-format'
import { Input } from './Input'

type PatternInputProps = PatternFormatProps & InputProps & { handleChange?: (value: string) => void }

export const PatternInput = ({ handleChange = () => {}, mask = '_', format = '', ...props }: PatternInputProps) => {
  return (
    <PatternFormat
      {...props}
      format={format}
      mask={mask}
      onValueChange={({ value }) => {
        handleChange(value)
      }}
      customInput={Input}
    />
  )
}