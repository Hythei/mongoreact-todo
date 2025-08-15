const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const taskRouter = require("./routes/tasks");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.json());

// Simple health check
app.use('/api/tasks', taskRouter);
app.get("/api", (req, res) => {
  res.json({Status: "Health OK"});
});

const PORT = process.env.PORT || 3000;

async function start(){
  try{
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo";
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch(err){
    console.log('Failed to start server:', err);
    process.exit(1);
  }
}

start();
