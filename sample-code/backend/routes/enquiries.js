const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, phone, travelDate, packageId } = req.body;
  return res.json({
    message: "Enquiry received (sample)",
    data: { name, phone: "***masked***", travelDate, packageId }
  });
});

module.exports = router;
