import express from "express";
import { connectDB } from "./src/config/database.js";
connectDB();
import "dotenv/config";
import UserRoutes from "./src/routes/user.route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log("Servidor corriendo en puerto "+PORT);
})

app.use("/api", UserRoutes);

