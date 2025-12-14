import React, { useState } from "react";
import axios from "axios";

function InvoiceForm() {
  const [form, setForm] = useState({
    freelancer: "",
    client: "",
    platform: "Upwork",
    service: "",
    amount: "",
    currency: "USD",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/invoice/generate", form, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-5 rounded shadow">
      <input
        name="freelancer"
        placeholder="Freelancer නාමය"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
        value={form.freelancer}
      />
      <input
        name="client"
        placeholder="Client Name"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
        value={form.client}
      />
      <select name="platform" onChange={handleChange} value={form.platform} className="w-full p-2 border mb-2">
        <option>Upwork</option>
        <option>Fiverr</option>
      </select>
      <input
        name="service"
        placeholder="සේවාව විස්තරය"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
        value={form.service}
      />
      <input
        name="amount"
        placeholder="මුදල"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
        value={form.amount}
      />
      <select name="currency" onChange={handleChange} value={form.currency} className="w-full p-2 border mb-2">
        <option>USD</option>
        <option>LKR</option>
      </select>
      <button className="w-full bg-blue-500 text-white p-2 rounded">Generate PDF</button>
    </form>
  );
}

export default InvoiceForm;
