import React from "react";

export default function PackageCard({ data }) {
  return (
    <div className="package-card">
      <h3>{data.title}</h3>
      <p>Destination: {data.destination}</p>
      <p>Starting from: ₹{data.priceFrom}</p>
      <button>View Details</button>
    </div>
  );
}
