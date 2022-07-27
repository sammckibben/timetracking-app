"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTestRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.fetchTestRouter = router;
router.get('/api/get_test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const my_var = {
        "users": [
            {
                "id": 1,
                "first_name": "Robert",
                "last_name": "Schwartz",
                "email": "rob23@gmail.com"
            },
            {
                "id": 2,
                "first_name": "Lucy",
                "last_name": "Ballmer",
                "email": "lucyb56@gmail.com"
            },
            {
                "id": 3,
                "first_name": "Anna",
                "last_name": "Smith",
                "email": "annasmith23@gmail.com"
            },
            {
                "id": 4,
                "first_name": "Robert",
                "last_name": "Brown",
                "email": "bobbrown432@yahoo.com"
            },
            {
                "id": 5,
                "first_name": "Roger",
                "last_name": "Bacon",
                "email": "rogerbacon12@yahoo.com"
            }
        ]
    };
    return res.json(my_var);
}));
