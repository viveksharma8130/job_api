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
exports.RatingController = void 0;
const Rating_1 = require("../models/Rating");
const Utils_1 = require("../utils/Utils");
class RatingController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rating = yield new Rating_1.default(req.body).save();
                res.json({
                    message: 'Rating Save Successfully',
                    data: rating,
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
            yield Rating_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const RatingId = req.rating._id;
            try {
                const rating = yield Rating_1.default.findOneAndUpdate({ _id: RatingId }, req.body, { new: true, useFindAndModify: false });
                res.send(rating);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Rating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const rating = req.rating;
            const data = {
                message: 'Success',
                data: rating
            };
            res.json(data);
        });
    }
    static allRating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rating = yield Rating_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: rating
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminRating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rating = yield Rating_1.default.find();
                const data = {
                    message: 'Success',
                    data: rating
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
            const rating = req.rating;
            try {
                yield rating.remove();
                res.json({
                    message: 'Success ! Rating Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.RatingController = RatingController;
