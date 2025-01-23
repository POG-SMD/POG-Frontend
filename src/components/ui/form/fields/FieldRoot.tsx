
import { FieldProps } from '@/types'
import { ErrorMessage } from '../ErrorMessage'
import { Label } from '../Label'
import { cn } from '@/libs'

export const FieldRoot = ({ className, error, id, name, disabled, label, children, errorMessage }: FieldProps) => {
  return (
    <div className={cn('flex flex-col w-full gap-1', className)}>
      {label && (
        <Label error={error} htmlFor={id ?? name} disabled={disabled} className='font-normal text-textGray'>
          {label}
        </Label>
      )}
      {children}
      {error && <ErrorMessage disabled={disabled} message={errorMessage} />}
    </div>
  )
}