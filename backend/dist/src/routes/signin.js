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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const router = express_1.default.Router();


// The below mentioned route is responisble for allow ing users to log in.

router.post("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { email_id, password } = req.body;

      // Checking if both email id and password is entered
      if (!email_id || !password) {
        return res.status(400).json({ error: "incomplete Data" });
      }
      // Checking if Email Id exists and if not request registering as a new account
      const userLogin = yield userSchema_1.default.findOne({ email_id });
      
      if (userLogin) {

        const isMatched = yield bcryptjs_1.default.compare(
          password,
          userLogin.password
        );
        
        // Generatig JWT authentication token
        const token = yield userLogin.generateAuthToken();
        console.log(token);
        res.setHeader("Authorization", token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
        
          httpOnly: true, // Else it will work only in secure
        });
        console.log("login success");
        return res.status(200).json({ message: "Login Successful", token });
       
      } else {
       
        res
          .status(400)
          .json({
            message: "Invalid Email ID. Pls register before signing in",
          });
      }
    } catch (err) {
      console.log(err);
    }
  })
);
exports.default = router;
