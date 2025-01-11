import express from "express";
import userRoutes from "./routes/users";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

export default startServer;
