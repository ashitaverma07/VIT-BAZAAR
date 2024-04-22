"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb+srv://VITBAZAAR:6001322174@cluster0.0oaqvtg.mongodb.net/";

// Connecting to the MongoDB database using the connection string from the environment variable DB

if (url) {

  mongoose_1.default
    .connect(url)
  
    .then(() => console.log("Connection is successful"))
    
    .catch((err) => console.log(err));
} else {
  
  console.error("No connection string provided in process.env.DB");
}
