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
require("dotenv").config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));

const userSchema_1 = __importDefault(require("../models/userSchema"));
const jwt_Authenticate = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // Retrieving the JWT from the cookies sent with the request
      const token = req.headers.authorization;
      const tok = process.env.JWT_KEY;
      console.log(tok);
      if (tok) {
        // Verify the JWT using the secret key
        const verifyToken = jsonwebtoken_1.default.verify(token, tok);
        if (typeof verifyToken === "object" && "_id" in verifyToken) {
          const payload = verifyToken;
          const rootUser = yield userSchema_1.default.findOne({
            _id: payload._id,
            "tokens.token": token,
          });
          // If no user is found, throw error message of user not found
          if (!rootUser) {
            throw new Error("User not found");
          }
          // If a user is found, add the token, rootUser, and userID to the request object.
          req.token = token;
          req.rootUser = rootUser;
          req.userID = rootUser._id;
          next();
        } else {
          console.error("Invalid JWT payload");
        }
      } else {
        console.error("No secret key provided in process.env.JWT_KEY");
      }
    } catch (err) {
      console.error(err);
      // If there is an error, respond with a 400 status code and an error message
      res.status(400).send("Unauthorised:_NO_token_provided");
    }
  });
exports.default = jwt_Authenticate;
