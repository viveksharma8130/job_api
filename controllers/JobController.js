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
exports.JobController = void 0;
const Job_1 = require("../models/Job");
const Populate_1 = require("../utils/Populate");
const Utils_1 = require("../utils/Utils");
class JobController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = Object.assign(Object.assign({}, req.body), { recruiter_id: req.recruiter.recruiter_id });
                let job = yield new Job_1.default(data).save();
                res.json({
                    message: 'Job Save Successfully',
                    data: job,
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
            yield Job_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const JobId = req.job._id;
            try {
                const job = yield Job_1.default.findOneAndUpdate({ _id: JobId }, req.body, { new: true, useFindAndModify: false });
                res.send(job);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Job(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = req.job;
            const data = {
                message: 'Success',
                data: job
            };
            res.json(data);
        });
    }
    static employerJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = req.job;
            const data = {
                message: 'Success',
                data: job
            };
            res.json(data);
        });
    }
    static recruiterJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = req.job;
            const data = {
                message: 'Success',
                data: job
            };
            res.json(data);
        });
    }
    static allJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield Job_1.default.find({ status: true }, { __v: 0 }).populate(new Populate_1.Populate().jobPopulate);
                const data = {
                    message: 'Success',
                    data: job
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield Job_1.default.find();
                const data = {
                    message: 'Success',
                    data: job
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
            const job = req.job;
            try {
                yield job.remove();
                res.json({
                    message: 'Success ! Job Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.JobController = JobController;
