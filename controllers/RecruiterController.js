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
exports.RecruiterController = void 0;
const Jwt = require("jsonwebtoken");
const env_1 = require("../environments/env");
const Recruiter_1 = require("../models/Recruiter");
const Utils_1 = require("../utils/Utils");
class RecruiterController {
    static signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const phone = req.body.phone;
            const email = req.body.email;
            const name = req.body.name;
            const password = req.body.password;
            const hash = yield Utils_1.Utils.encryptPassword(password);
            try {
                const data = {
                    email: email,
                    password: hash,
                    name: name,
                    phone: phone,
                    created_at: new Utils_1.Utils().indianTimeZone,
                    updated_at: new Utils_1.Utils().indianTimeZone
                };
                let recruiter = yield new Recruiter_1.default(data).save();
                if (recruiter) {
                    const para = {
                        recruiter_id: recruiter._id,
                        email: email
                    };
                    const token = Jwt.sign(para, env_1.getEnvironmentVariables().jwt_secret, { expiresIn: '120d' });
                    const data = {
                        message: 'Success',
                        token: token,
                        data: recruiter
                    };
                    res.json(data);
                }
                else {
                    throw new Error('Something Went Wrong');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = req.query.password;
            const recruiter = req.recruiter;
            try {
                yield Utils_1.Utils.comparePassword({
                    plainPassword: password,
                    encryptedPassword: recruiter.password
                });
                const token = Jwt.sign({ email: recruiter.email, recruiter_id: recruiter._id }, env_1.getEnvironmentVariables().jwt_secret, { expiresIn: '120d' });
                const data = { token: token, data: recruiter };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const recruiterId = req.recruiter.recruiter_id;
            var update = Object.assign(Object.assign({}, req.body), { updated_at: new Date() });
            //res.send(req.body);
            try {
                const recruiter = yield Recruiter_1.default.findOneAndUpdate({ _id: recruiterId }, update, { new: true, useFindAndModify: false });
                res.send(recruiter);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static data(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var recruiterId = req.recruiter.recruiter_id;
            try {
                var recruiter = yield Recruiter_1.default.findById({ _id: recruiterId }, { __v: 0 });
                const data = {
                    message: 'Success',
                    recruiter: recruiter
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static all(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recruiter = yield Recruiter_1.default.find({});
                const data = {
                    message: 'Success !',
                    recruiter: recruiter
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.RecruiterController = RecruiterController;
