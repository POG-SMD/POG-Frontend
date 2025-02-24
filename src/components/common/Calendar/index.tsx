import { Calendar } from "rsuite";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/libs";
import { Icon } from "@iconify/react";
import { ReservationResponseProps } from "../ReservationForm/hook/useApi";
import { statusType } from "@/types/statusType";
import { formatDate } from "@/pages/Admin/components/ReservationDetails";
import { getReservationType } from "@/types/reservationType";

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
      (res) =>
        res.dateStart === formattedDate && res.status === statusType.EM_RESERVA
    );

    return hasReservations ? (
      <div className="relative">
        <span className="absolute -top-3.5 left-2/3 w-2 h-2 bg-blue-500 rounded-full" />
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
            <DayDetails
              date={selectedDate}
              reservations={getReservationsByDate(selectedDate)}
            />
          ) : (
            <WelcomeMessage />
          )}
        </div>
      )}
      <span className="col-span-1" />
      <div
        className={cn("lg:col-span-7 xl:col-span-7 2xl:col-span-6 h-fit", {
          "w-full": !hasDetails,
        })}
      >
        <Calendar
          onSelect={handleSelect}
          bordered
          className="rounded-md bg-base_primary-100 w-full shadow-lg shadow-[#00000060]"
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
    <div className="flex flex-col gap-10 py-10 bg-secondary h-full shadow-lg shadow-[#00000060] rounded-md px-6 text-center overflow-auto">
      <h3 className="text-lg font-bold mb-2">Reservas em {formatDate(date)}</h3>
      {reservations.filter((res) => res.status === statusType.EM_RESERVA)
        .length > 0 ? (
        <ul className="text-left overflow-y-auto">
          {reservations
            .filter((res) => res.status === statusType.EM_RESERVA)
            .map((res, index) => (
              <li
                key={index}
                className="mb-2 bg-base_primary-100 gap-2 rounded-[10px] shadow-md shadow-[#00000020] px-3 py-4 grid grid-cols-2"
              >
                <h6>
                  <span className="text-base font-semibold">Usuário:</span>{" "}
                  {res?.user?.name}
                </h6>
                <h6>
                  <span className="text-base font-semibold">Tipo:</span>{" "}
                  {getReservationType(res?.type)}
                </h6>

                <h6>
                  <span className="text-base font-semibold">Início:</span>{" "}
                  {res?.startTime}
                </h6>
                <h6>
                  <span className="text-base font-semibold">Fim:</span>{" "}
                  {res?.endTime}
                </h6>

                {res?.materials.length > 0 && (
                  <div className="col-span-2">
                    <span className="text-base font-semibold">Materiais:</span>
                    <div className="flex flex-wrap gap-2 items-end justify-start -mt-2">
                      {res?.materials?.map((material) => (
                        <p>
                          {/* @ts-ignore */}
                          {material?.material?.title},
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <h6>
                  <span className="text-base font-semibold">Tipo:</span>{" "}
                  {getReservationType(res?.type)}
                </h6>

                <p className="col-span-2">
                  <span className="text-base font-semibold">Propósito:</span>{" "}
                  {res?.purpose}
                </p>
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
  <div className="flex flex-col gap-10 py-10 bg-secondary h-full shadow-lg shadow-[#00000060] rounded-md px-6 text-center overflow-auto">
    <h2 className="text-3xl text-center font-bold text-base_primary">Bem-vindo ao Hermes!</h2>
    <p className="text-2xl text-center px-10 font-semibold text-base_primary">Aqui você consegue:</p>
    <ul className="flex flex-col gap-10 px-2">
      <li className="flex items-center gap-5">
        <div className="h-16 min-w-16 bg-base_secondary-200 text-base_secondary rounded-full p-1 flex justify-center items-center">
          <Icon
            fontSize={36}
            icon="streamline:dices-entertainment-gaming-dices"
          />
        </div>
        <p className="font-medium text-lg text-start text-gray-800">Agendar os espaços na aba de reservas </p>
      </li>
      <li className="flex items-center gap-5">
        <div className="h-16 min-w-16 bg-base_secondary-200 text-base_secondary rounded-full p-1 flex justify-center items-center">
          <Icon fontSize={36} icon="grommet-icons:cubes" />
        </div>
        <p className="font-medium text-lg text-start text-gray-800">Solicitar equipamentos na aba de equipamenos</p>
      </li>
      <li className="flex items-center gap-5">
        <div className="h-16 min-w-16 bg-base_secondary-200 text-base_secondary rounded-full p-1 flex justify-center items-center">
          <Icon fontSize={36} icon="mdi:link-variant" />
        </div>
        <p className="font-medium text-lg text-start text-gray-800">Manejar links e aviso na aba de materiais e avisos</p>
      </li>
    </ul>
  </div>
);
