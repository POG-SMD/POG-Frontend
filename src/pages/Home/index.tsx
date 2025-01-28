import { ReservationCalendar } from "@/components/common/Calendar";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";

export const Home = () => {
  return (
    <div className="w-full bg-slate-500 flex justify-center items-center">
      <ReservationCalendar />
      <ReservationForm
        loading={false}
        errorMessage="Erro ao reservar materiais"
        successMessage="Sucesso ao reservar materiais"
        header={<p className="">Materiais</p>}
        optionList={[{ label: "", value: "" }]}
        setState={() => {}}
      />
    </div>
  );
};
