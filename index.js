import express from "express";

const app = express();

app.get("/", (req, res) => res.send("axauto: ok"));
app.get("/healthz", (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`[BOOT] listening on ${port}`);
});
