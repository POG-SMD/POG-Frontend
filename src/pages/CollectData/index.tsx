import { VizualizeCalendar } from "@/components/common/Calendar";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";

export const CollectData = () => {
  return (
    <div className="w-full bg-slate-500 flex items-start">
      <div className="w-2/3">
        <VizualizeCalendar hasDetails={false} />
      </div>
      <ReservationForm
        className="my-auto"
        loading={false}
        errorMessage="Erro ao reservar materiais"
        successMessage="Sucesso ao reservar materiais"
        header={<p className="">Espaço para coleta de dados</p>}
        optionList={[{ label: "", value: "" }]}
        setState={() => {}}
      />
    </div>
  );
};
