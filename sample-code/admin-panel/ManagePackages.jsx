import React, { useEffect, useState } from "react";

export default function ManagePackages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/api/admin/packages")
      .then(res => res.json())
      .then(setPackages);
  }, []);

  return (
    <section>
      <h1>Manage Packages</h1>
      {packages.map(pkg => (
        <div key={pkg.id} className="admin-package-row">
          <strong>{pkg.title}</strong>
          <span>{pkg.destination}</span>
          <button>Edit</button>
        </div>
      ))}
    </section>
  );
}
