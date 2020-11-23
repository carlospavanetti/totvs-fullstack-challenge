import path from "path";
import express from "express";
import cors from "cors";

import seed from "./scripts/seed";
import routes from "./api/routes";

function runServer() {
  const app = express();
  const PORT = 8000;

  app.use(express.static(path.join(__dirname, "./public")));
  app.use(cors());
  app.use("/api", routes);

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

if (process.argv.slice(2).includes("--seed")) {
  seed().then(() => process.exit(0));
} else {
  runServer();
}
