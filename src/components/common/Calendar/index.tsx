import { Calendar } from "rsuite";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/libs";
import { Icon } from "@iconify/react";
import { ReservationResponseProps } from "../ReservationForm/hook/useApi";
import { statusType } from "@/types/statusType";
import { formatDate } from "@/pages/Admin/components/ReservationDetails";

interface CalendarProps {
  reservations?: ReservationResponseProps[];
  hasDetails?: boolean;
  leftContent?: JSX.Element;
  setDate?: Dispatch<SetStateAction<string>>;
}

export const VizualizeCalendar = ({
  reservations = [],
  hasDetails = true,
  leftContent,
  setDate,
}: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getReservationsByDate = (date: string) => {
    return reservations.filter((res) => res.dateStart === date);
  };

  const handleSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    setDate && setDate(formattedDate);
  };

  const renderCell = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const hasReservations = reservations.some(
      (res) => res.dateStart === formattedDate && res.status === statusType.EM_RESERVA
    );

    return hasReservations ? (
      <div className="relative">
        <span className="absolute -top-3.5 left-2/3 w-2 h-2 bg-red-500 rounded-full" />
      </div>
    ) : null;
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:grid grid-cols-12 2xl:px-0 sm:px-5 px-2 mb-5">
      <span className="col-span-1 2xl:block hidden" />
      {leftContent && leftContent}
      {hasDetails && (
        <div className="mx-auto w-full lg:col-span-4 2xl:col-span-3">
          {selectedDate ? (
            <DayDetails date={selectedDate} reservations={getReservationsByDate(selectedDate)} />
          ) : (
            <WelcomeMessage />
          )}
        </div>
      )}
      <span className="col-span-1" />
      <div className={cn("lg:col-span-7 xl:col-span-7 2xl:col-span-6 h-fit", { "w-full": !hasDetails })}>
        <Calendar
          onSelect={handleSelect}
          bordered
          className="bg-secondary border-2 border-primary rounded-md w-full"
          renderCell={renderCell}
        />
      </div>
      <span className="col-span-1 2xl:block hidden" />
    </div>
  );
};

const DayDetails = ({
  date,
  reservations,
}: {
  date: string;
  reservations: ReservationResponseProps[];
}) => {
  return (
    <div className="w-full h-full bg-secondary border-2 rounded-md py-1 px-6 border-primary text-center overflow-auto">
      <h3 className="text-lg font-bold mb-2">Reservas em {formatDate(date)}</h3>
      {reservations.length > 0 ? (
        <ul className="text-left">
          {reservations
            .filter((res) => res.status === statusType.EM_RESERVA)
            .map((res, index) => (
              <li key={index} className="mb-2">
                <strong>
                  {res.startTime} - {res.endTime}:
                </strong>
                {res.purpose} ({res.user.name}) {res.dateStart} {res.status}
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          Nenhuma reserva para este dia.
        </p>
      )}
    </div>
  );
};

const WelcomeMessage = () => (
  <div className="flex flex-col gap-10 py-10 bg-secondary h-full border-2 rounded-md px-6 border-primary text-center overflow-auto">
    <h2 className="text-3xl text-center font-bold">Bem-vindo à Celulose!</h2>
    <p className="text-2xl text-center px-10 font-semibold">Aqui você pode:</p>
    <ul className="flex flex-col gap-10 px-2">
      <li className="flex items-center gap-5">
        <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
          <Icon
            fontSize={48}
            icon="streamline:dices-entertainment-gaming-dices"
          />
        </div>
        <p className="font-medium text-xl text-start">Agendar os espaços</p>
      </li>
      <li className="flex items-center gap-5">
        <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
          <Icon fontSize={48} icon="grommet-icons:cubes" />
        </div>
        <p className="font-medium text-xl text-start">Solicitar equipamentos</p>
      </li>
      <li className="flex items-center gap-5">
        <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
          <Icon fontSize={48} icon="mdi:link-variant" />
        </div>
        <p className="font-medium text-xl text-start">Manejar links</p>
      </li>
    </ul>
  </div>
);
