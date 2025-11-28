const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json([
    { id: 1, title: "Dubai Starter Pack", destination: "Dubai" },
    { id: 2, title: "Bali Honeymoon", destination: "Bali" }
  ]);
});

module.exports = router;
