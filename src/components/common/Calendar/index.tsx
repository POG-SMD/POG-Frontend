import { Calendar } from "rsuite";
import { useState } from "react";
import { cn } from "@/libs";
import { Icon } from "@iconify/react/dist/iconify.js";

function getTodoList(date: Date | null) {
  if (!date) {
    return [];
  }
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
      ];
    default:
      return [];
  }
}

export const VizualizeCalendar = ({
  hasDetails = true,
  leftContent,
}: {
  hasDetails?: boolean;
  leftContent?: JSX.Element
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:grid grid-cols-12 2xl:px-0 sm:px-5 px-2 mb-5">
      <span className="col-span-1 2xl:block hidden" />
      {leftContent && leftContent}
      {hasDetails && (
        <div className="mx-auto w-full lg:col-span-4 2xl:col-span-3">
          {selectedDate ? (
            <DayDetails date={selectedDate} />
          ) : (
            <div className="flex flex-col gap-10 py-10 bg-secondary h-full border-2 rounded-md px-6 border-primary text-center overflow-auto">
              <h2 className="text-3xl text-center font-bold">Bem vindo a celulose!</h2>
              <p className="text-2xl text-center px-10 font-semibold">Aqui nesse site você consegue:</p>

              <ul className="flex flex-col gap-10 px-2">
                <li className="flex items-center gap-5">
                  <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
                    <Icon fontSize={48} className="" icon='streamline:dices-entertainment-gaming-dices' />
                  </div>
                  <p className="font-medium text-xl text-start">Agendar os espaços</p>
                </li>
                <li className="flex items-center gap-5">
                  <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
                    <Icon fontSize={48} className="" icon='grommet-icons:cubes' />
                  </div>
                  <p className="font-medium text-xl text-start">Solicitar equipamentos</p>
                </li>
                <li className="flex items-center gap-5">
                  <div className="bg-blue-50 border h-20 w-20 border-primary rounded-full p-1 flex justify-center items-center">
                    <Icon fontSize={48} className="" icon='mdi:link-variant' />
                  </div>
                  <p className="font-medium text-xl text-start">Manejar links</p>
                </li>
              </ul>
            </div>
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
          cellClassName={(date) =>
            date.getDay() % 2 ? "bg-gray-100" : undefined
          }
          bordered
          className="bg-secondary border-2 border-primary rounded-md w-full"
        />
      </div>
      <span className="col-span-1 2xl:block hidden" />
    </div>
  );
};

// Estilizar aqui
const DayDetails = ({ date }: { date: Date | null }) => {
  const list = getTodoList(date);

  return (
    <div className="w-full h-full bg-secondary border-2 rounded-md py-1 px-6 border-primary text-center overflow-auto">
      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item.time} className="mb-2">
              <strong>{item.time}:</strong> {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          Nenhuma tarefa para este dia.
        </p>
      )}
    </div>
  );
};
