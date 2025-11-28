const express = require("express");
const enquiries = require("./routes/enquiries");
const packages = require("./routes/packages");

const app = express();
app.use(express.json());

app.use("/api/enquiries", enquiries);
app.use("/api/admin/packages", packages);

app.listen(5000, () => console.log("Sample API running on port 5000"));
