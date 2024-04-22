"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const jwt_authenticate_1 = __importDefault(
  require("../middlewares/jwt_authenticate")
);
const admin_middlewares_1 = __importDefault(
  require("../middlewares/adminMiddleware")
);

const router = express_1.default.Router();

// Fetching data  from the database

router.get(
  "/",
  jwt_authenticate_1.default,
  admin_middlewares_1.default,
  (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        
        const user = yield userSchema_1.default.find({}, { password: 0 });
        console.log(user);
        res.status(200).send(user);
      } catch (err) {
        
        console.log(err);
        res
          .status(500)
          .json({ error: "We are experiencing some server problems!!" });
      }
    })
);

//Delete the user from the database

router.delete(
  "/delete/:id",
  jwt_authenticate_1.default,
  admin_middlewares_1.default,
  (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const id = req.params.id;
        const deletedUser = yield userSchema_1.default.deleteOne({ _id: id });
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res
          .status(200)
          .json({ message: "User deleted successfully", user: deletedUser });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete user" });
      }
    })
);

exports.default = router;
