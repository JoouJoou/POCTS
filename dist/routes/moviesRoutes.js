"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controllers/moviesController");
const validateSchema_1 = require("../middlewares/validateSchema");
const moviesSchemas_1 = __importDefault(require("../schemas/moviesSchemas"));
const moviesRoute = express_1.default.Router();
moviesRoute.post("/movies", (0, validateSchema_1.validateSchema)(moviesSchemas_1.default), moviesController_1.postMovie);
exports.default = moviesRoute;
