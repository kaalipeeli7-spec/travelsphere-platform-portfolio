import React, { useState } from "react";

export default function EnquiryForm({ packageId }) {
  const [form, setForm] = useState({ name: "", phone: "", travelDate: "" });

  const submitEnquiry = async () => {
    await fetch("/api/enquiries", {
      method: "POST",
      body: JSON.stringify({ ...form, packageId }),
      headers: { "Content-Type": "application/json" }
    });
    alert("Enquiry submitted!");
  };

  return (
    <div className="enquiry-form">
      <h2>Enquiry</h2>
      <input placeholder="Your Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
      <input placeholder="Mobile Number" onChange={(e)=>setForm({...form, phone:e.target.value})} />
      <input type="date" onChange={(e)=>setForm({...form, travelDate:e.target.value})} />
      <button onClick={submitEnquiry}>Submit</button>
    </div>
  );
}
