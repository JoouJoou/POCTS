"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesRoutes_1 = __importDefault(require("./moviesRoutes"));
const Routes = (0, express_1.Router)();
Routes.use(moviesRoutes_1.default);
exports.default = Routes;
