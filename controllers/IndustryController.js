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
exports.IndustryController = void 0;
const Industry_1 = require("../models/Industry");
const Utils_1 = require("../utils/Utils");
class IndustryController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let industry = yield new Industry_1.default(req.body).save();
                res.json({
                    message: 'Industry Save Successfully',
                    data: industry,
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
            yield Industry_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const IndustryId = req.industry._id;
            try {
                const industry = yield Industry_1.default.findOneAndUpdate({ _id: IndustryId }, req.body, { new: true, useFindAndModify: false });
                res.send(industry);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Industry(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const industry = req.industry;
            const data = {
                message: 'Success',
                data: industry
            };
            res.json(data);
        });
    }
    static allIndustry(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const industry = yield Industry_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: industry
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminIndustry(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const industry = yield Industry_1.default.find();
                const data = {
                    message: 'Success',
                    data: industry
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
            const industry = req.industry;
            try {
                yield industry.remove();
                res.json({
                    message: 'Success ! Industry Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.IndustryController = IndustryController;
