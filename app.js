const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// connect database
connectDB();

app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authroutes"));

// home route
app.get("/", (req, res) => {
  res.send("JWT Authentication API is running...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});