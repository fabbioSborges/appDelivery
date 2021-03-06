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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticateClient = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticateClient(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ mesage: "Token não existe" });
        }
        const [, token] = authHeader.split(" ");
        try {
            const { sub } = (0, jsonwebtoken_1.verify)(token, "chavesecreta");
            req.id_client = sub;
            return next();
        }
        catch (err) {
            return res.status(401).json({ mesage: "Token invalido" });
        }
    });
}
exports.ensureAuthenticateClient = ensureAuthenticateClient;
//# sourceMappingURL=ensureAuthenticateClient.js.map