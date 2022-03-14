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
exports.ApplicantController = void 0;
const Applicant_1 = require("../models/Applicant");
class ApplicantController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = Object.assign(Object.assign({}, req.body), { user_id: req.user.user_id });
                let applicant = yield new Applicant_1.default(data).save();
                res.json({
                    message: 'Applicant Save Successfully',
                    data: applicant,
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const ApplicantId = req.applicant._id;
            try {
                const applicant = yield Applicant_1.default.findOneAndUpdate({ _id: ApplicantId }, req.body, { new: true, useFindAndModify: false });
                res.send(applicant);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Applicant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const applicant = req.applicant;
            const data = {
                message: 'Success',
                data: applicant
            };
            res.json(data);
        });
    }
    static jobApplicant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const applicant = req.applicant;
            const data = {
                message: 'Success',
                data: applicant
            };
            res.json(data);
        });
    }
    static allApplicant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const applicant = yield Applicant_1.default.find({ user_id: req.user.user_id, status: true }, { __v: 0 }).sort({ _id: -1 }).populate({ path: 'job_id' });
                const data = {
                    message: 'Success',
                    data: applicant
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminApplicant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const applicant = yield Applicant_1.default.find().sort({ _id: -1 });
                ;
                const data = {
                    message: 'Success',
                    data: applicant
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const applicant = req.applicant;
            try {
                yield applicant.remove();
                res.json({
                    message: 'Success ! Applicant Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ApplicantController = ApplicantController;
