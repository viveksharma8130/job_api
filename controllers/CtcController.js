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
exports.CtcController = void 0;
const Ctc_1 = require("../models/Ctc");
const Utils_1 = require("../utils/Utils");
class CtcController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ctc = yield new Ctc_1.default(req.body).save();
                res.json({
                    message: 'Ctc Save Successfully',
                    data: ctc,
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static excel(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const excelData = yield Utils_1.Utils.importExcelData2MongoDB(req.file.path);
            yield Ctc_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const CtcId = req.ctc._id;
            try {
                const ctc = yield Ctc_1.default.findOneAndUpdate({ _id: CtcId }, req.body, { new: true, useFindAndModify: false });
                res.send(ctc);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static ctc(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = req.ctc;
            const data = {
                message: 'Success',
                data: ctc
            };
            res.json(data);
        });
    }
    static type(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = req.ctc;
            const data = {
                message: 'Success',
                data: ctc
            };
            res.json(data);
        });
    }
    static allCtc(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ctc = yield Ctc_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: ctc
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminCtc(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ctc = yield Ctc_1.default.find();
                const data = {
                    message: 'Success',
                    data: ctc
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
            const ctc = req.ctc;
            try {
                yield ctc.remove();
                res.json({
                    message: 'Success ! Ctc Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.CtcController = CtcController;
