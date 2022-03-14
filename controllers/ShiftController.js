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
exports.ShiftController = void 0;
const Shift_1 = require("../models/Shift");
const Utils_1 = require("../utils/Utils");
class ShiftController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let shift = yield new Shift_1.default(req.body).save();
                res.json({
                    message: 'Shift Save Successfully',
                    data: shift,
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
            yield Shift_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const ShiftId = req.shift._id;
            try {
                const shift = yield Shift_1.default.findOneAndUpdate({ _id: ShiftId }, req.body, { new: true, useFindAndModify: false });
                res.send(shift);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Shift(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const shift = req.shift;
            const data = {
                message: 'Success',
                data: shift
            };
            res.json(data);
        });
    }
    static allShift(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shift = yield Shift_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: shift
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminShift(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shift = yield Shift_1.default.find();
                const data = {
                    message: 'Success',
                    data: shift
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
            const shift = req.shift;
            try {
                yield shift.remove();
                res.json({
                    message: 'Success ! Shift Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ShiftController = ShiftController;
