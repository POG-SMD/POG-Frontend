import { Calendar } from 'rsuite';

export const ReservationCalendar = () => {
  return (
    <Calendar cellClassName={date => (date.getDay() % 2 ? 'bg-gray-100' : undefined)} bordered className='bg-secondary border-2 border-primary rounded-md scale-[80%] w-2/3' />
  )
}
