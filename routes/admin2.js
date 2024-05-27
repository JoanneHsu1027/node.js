import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin2 root");
});

router.get("/admin2/:p1?/:p2?", (req, res) => {
  const { p1, p2 } = req.params;
  const { url, baseUrl, originalUrl } = req;

  res.json({ url: req.url, p1, p2 });
});

export default router;