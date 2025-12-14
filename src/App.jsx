import React from "react";
import InvoiceForm from "./components/InvoiceForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        Freelancer Invoice Generator
      </h1>
      <InvoiceForm />
    </div>
  );
}

export default App;
