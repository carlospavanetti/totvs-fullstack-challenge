import path from "path";
import express from "express";

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
