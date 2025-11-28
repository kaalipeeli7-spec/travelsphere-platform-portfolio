import React, { useState } from "react";

export default function QuotationBuilder({ enquiry }) {
  const [quote, setQuote] = useState({
    price: "",
    hotel: "",
    itinerary: ""
  });

  const sendQuotation = async () => {
    await fetch("/api/quotations", {
      method: "POST",
      body: JSON.stringify({ enquiryId: enquiry.id, ...quote }),
      headers: { "Content-Type": "application/json" }
    });
    alert("Quotation sent to customer (sample)!");
  };

  return (
    <div className="quotation-builder">
      <h2>Build Quotation for {enquiry.destination}</h2>
      <input placeholder="Price" onChange={(e)=>setQuote({...quote, price:e.target.value})} />
      <input placeholder="Hotel Name" onChange={(e)=>setQuote({...quote, hotel:e.target.value})} />
      <textarea placeholder="Itinerary" onChange={(e)=>setQuote({...quote, itinerary:e.target.value})}></textarea>
      <button onClick={sendQuotation}>Send Quotation</button>
    </div>
  );
}
