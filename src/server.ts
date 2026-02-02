// import express from "express";

// const PORT = 4000;
// const app = express();

// app.use(express.json());

// app.get("/health", (req, res) => {
//     res.send("OK");
// });

// app.listen(PORT, () => {
//     console.log(`Server running on Port: ${PORT}`);
// });

import App from "./app";

const app = new App;