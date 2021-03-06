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
exports.EmploymentTypeController = void 0;
const EmploymentType_1 = require("../models/EmploymentType");
const Utils_1 = require("../utils/Utils");
class EmploymentTypeController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let employmentType = yield new EmploymentType_1.default(req.body).save();
                res.json({
                    message: 'EmploymentType Save Successfully',
                    data: employmentType,
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
            yield EmploymentType_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const EmploymentTypeId = req.employmentType._id;
            try {
                const employmentType = yield EmploymentType_1.default.findOneAndUpdate({ _id: EmploymentTypeId }, req.body, { new: true, useFindAndModify: false });
                res.send(employmentType);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static EmploymentType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const employmentType = req.employmentType;
            const data = {
                message: 'Success',
                data: employmentType
            };
            res.json(data);
        });
    }
    static allEmploymentType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employmentType = yield EmploymentType_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: employmentType
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminEmploymentType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employmentType = yield EmploymentType_1.default.find();
                const data = {
                    message: 'Success',
                    data: employmentType
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
            const employmentType = req.employmentType;
            try {
                yield employmentType.remove();
                res.json({
                    message: 'Success ! EmploymentType Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.EmploymentTypeController = EmploymentTypeController;
