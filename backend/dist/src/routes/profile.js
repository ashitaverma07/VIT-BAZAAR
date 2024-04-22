"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const jwt_authenticate_1 = __importDefault(
  require("../middlewares/jwt_authenticate")
);

const router = express_1.default.Router();

// Route to get the profile of the user

router.get("/", jwt_authenticate_1.default, (req, res) => {
  res.status(200).send(req.rootUser);
});
exports.default = router;
