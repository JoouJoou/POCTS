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
exports.postMovies = void 0;
const database_1 = __importDefault(require("../database/database"));
function postMovies(movieInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("teste");
        return database_1.default.query(`INSERT INTO movies (name, streaming, genre, status, review) VALUES ($1, $2, $3, $4, $5)`, [
            movieInfo.name,
            movieInfo.streaming,
            movieInfo.genre,
            movieInfo.status,
            movieInfo.review,
        ]);
    });
}
exports.postMovies = postMovies;
