import { Calendar } from "rsuite";
import { useState } from "react";

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

export const VizualizeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex w-full justify-center items-center border-gray-200 h-full">
      <div className="w-2/3">
        <Calendar
          onSelect={handleSelect}
          cellClassName={(date) =>
            date.getDay() % 2 ? "bg-gray-100" : undefined
          }
          bordered
          className="bg-secondary border-2 border-primary rounded-md scale-[90%] w-full"
        />
      </div>

      <div className="w-1/3 py-10">
        {selectedDate ? (
          <DayDetails date={selectedDate} />
        ) : (
          <div className="sm:min-w-[400px] w-full sm:w-1/4 bg-secondary border-2 rounded-md py-1 h-[78vh] px-6 border-primary text-center overflow-auto">
            Selecione algum dia
          </div>
        )}
      </div>
    </div>
  );
};

// Estilizar aqui
const DayDetails = ({ date }: { date: Date | null }) => {
  const list = getTodoList(date);

  return (
    <div className="sm:min-w-[400px] w-full sm:w-1/4 bg-secondary border-2 rounded-md py-1 h-[78vh] px-6 border-primary overflow-auto">
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
