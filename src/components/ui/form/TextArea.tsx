import { cn } from '@/libs/utils'
import { InputProps } from '@/types/form'
import { TextareaHTMLAttributes } from 'react'

export type TextAreaProps = InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = ({ className, error, cols, rows, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(
        'flex rounded-md resize-none border w-full border-slate-700 px-3 py-2 file:border-0 bg-transparent file:font-medium ring-inset ring-primary focus-visible:border-primary focus-visible:ring-1 placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-transparent dark:placeholder:text-slate-400 dark:text-white placeholder:opacity-75',
        className,
        {
          'text-negative border-negative focus-visible:ring-negative focus-visible:border-negative': error,
        }
      )}
      cols={cols}
      rows={rows}
      {...props}
    ></textarea>
  )
}