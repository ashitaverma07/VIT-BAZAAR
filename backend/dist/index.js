"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
// Alloting the Port Number
const port = 5000;
// Creating the server
const server = http_1.default.createServer(app_1.default);
// Listening to the alloted port number
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
