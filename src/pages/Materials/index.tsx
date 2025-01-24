// import { DynamicTable } from "@/components/common/DynamicTable"
import { ReservationForm } from "@/components/common/ReservationForm";

export const Material = () => {

  // const columns = [
  //   { title: "Name", className: "font-bold mr-auto" },
  //   { title: "Email", className: "mx-auto" },
  //   { title: "Actions", className: "ml-auto" },
  // ];

  // const mockData = [
  //   {
  //     cells: {
  //       Name: "John Doe",
  //       Email: "john.doe@example.com",
  //       Actions: <button className="text-blue-500">Edit</button>,
  //     },
  //     onClick: () => console.log("Clicked on John Doe"),
  //     className: "hover:bg-slate-200",
  //   },
  //   {
  //     cells: {
  //       Name: "Jane Smith",
  //       Email: "jane.smith@example.com",
  //       Actions: <button className="text-blue-500">Edit</button>,
  //     },
  //     onClick: () => console.log("Clicked on Jane Smith"),
  //     className: "hover:bg-slate-200",
  //   },
  // ];

  return (
    <div className="w-full bg-slate-500 h-screen flex justify-center items-center">
      {/* <DynamicTable cols={columns} data={mockData} /> */}

      <ReservationForm header={<p className="">Batata</p>} optionList={[{label: '', value: ''}]}/>
    </div>
  )
}
