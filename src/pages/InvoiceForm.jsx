import API from "../services/api";

export default function InvoiceForm() {
  const generate = async () => {
    const res = await API.post(
      "/invoice/generate",
      {
        freelancer: "මධුශංක",
        client: "John",
        service: "Web Dev",
        amount: 300,
        currency: "USD",
      },
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(res.data);
    window.open(url);
  };

  return <button onClick={generate}>Generate Invoice</button>;
}
