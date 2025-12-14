import { useEffect, useState } from "react";
import API from "../services/api";

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/invoice/history").then(res => setData(res.data));
  }, []);

  return (
    <ul>
      {data.map(i => (
        <li key={i._id}>{i.invoiceNumber} - {i.client}</li>
      ))}
    </ul>
  );
}
