import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import enquiryRoutes from "./src/routes/enquiryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/enquiries", enquiryRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("Enquiry Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
