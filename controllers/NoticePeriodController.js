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
exports.NoticePeriodController = void 0;
const NoticePeriod_1 = require("../models/NoticePeriod");
const Utils_1 = require("../utils/Utils");
class NoticePeriodController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let noticePeriod = yield new NoticePeriod_1.default(req.body).save();
                res.json({
                    message: 'NoticePeriod Save Successfully',
                    data: noticePeriod,
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
            yield NoticePeriod_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const NoticePeriodId = req.noticePeriod._id;
            try {
                const noticePeriod = yield NoticePeriod_1.default.findOneAndUpdate({ _id: NoticePeriodId }, req.body, { new: true, useFindAndModify: false });
                res.send(noticePeriod);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static NoticePeriod(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const noticePeriod = req.noticePeriod;
            const data = {
                message: 'Success',
                data: noticePeriod
            };
            res.json(data);
        });
    }
    static allNoticePeriod(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticePeriod = yield NoticePeriod_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: noticePeriod
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminNoticePeriod(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticePeriod = yield NoticePeriod_1.default.find();
                const data = {
                    message: 'Success',
                    data: noticePeriod
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
            const noticePeriod = req.noticePeriod;
            try {
                yield noticePeriod.remove();
                res.json({
                    message: 'Success ! NoticePeriod Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.NoticePeriodController = NoticePeriodController;
