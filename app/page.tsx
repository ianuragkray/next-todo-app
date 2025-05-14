import Header from "@/component/Header";
import Form from "./_form/form";
import ClientForm from "./_form/ClientForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
       <Header title="ToDo App" className="mb-4" />
       {/* <Form /> */}
       <ClientForm/>
      </div>
    </div>
  );
}
