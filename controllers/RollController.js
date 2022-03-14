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
exports.RollController = void 0;
const Roll_1 = require("../models/Roll");
const Utils_1 = require("../utils/Utils");
class RollController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let roll = yield new Roll_1.default(req.body).save();
                res.json({
                    message: 'Roll Save Successfully',
                    data: roll,
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
            yield Roll_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const RollId = req.roll._id;
            try {
                const roll = yield Roll_1.default.findOneAndUpdate({ _id: RollId }, req.body, { new: true, useFindAndModify: false });
                res.send(roll);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Roll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const roll = req.roll;
            const data = {
                message: 'Success',
                data: roll
            };
            res.json(data);
        });
    }
    static allRoll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roll = yield Roll_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: roll
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminRoll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roll = yield Roll_1.default.find();
                const data = {
                    message: 'Success',
                    data: roll
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
            const roll = req.roll;
            try {
                yield roll.remove();
                res.json({
                    message: 'Success ! Roll Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.RollController = RollController;
