"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobValidators = void 0;
const express_validator_1 = require("express-validator");
const Employer_1 = require("../../models/Employer");
const Job_1 = require("../../models/Job");
const Populate_1 = require("../../utils/Populate");
class JobValidators {
    static create() {
        return [
            express_validator_1.body('title', 'title Is Required'),
            express_validator_1.body('employer_id', 'employer_id Is Required').custom((employer_id, { req }) => {
                return Employer_1.default.findOne({ _id: employer_id }).then(employer => {
                    if (employer) {
                        return true;
                    }
                    else {
                        throw new Error('employer not Exist');
                    }
                });
            })
        ];
    }
    static Job() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Job_1.default.findOne({ _id: id }, { __v: 0 }).populate(new Populate_1.Populate().jobPopulate).then((job) => {
                    if (job) {
                        req.job = job;
                        return true;
                    }
                    else {
                        throw new Error('Job Does Not Exist');
                    }
                });
            })];
    }
    static employerJob() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Job_1.default.find({ employer_id: id }, { __v: 0 }).populate(new Populate_1.Populate().jobPopulate).then((job) => {
                    if (job) {
                        req.job = job;
                        return true;
                    }
                    else {
                        throw new Error('Job Does Not Exist');
                    }
                });
            })];
    }
    static recruiterJob() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Job_1.default.find({ recruiter_id: id }, { __v: 0 }).populate(new Populate_1.Populate().jobPopulate).then((job) => {
                    if (job) {
                        req.job = job;
                        return true;
                    }
                    else {
                        throw new Error('Job Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Job_1.default.findOne({ _id: id }, { __v: 0 }).then((job) => {
                    if (job) {
                        req.job = job;
                        return true;
                    }
                    else {
                        throw new Error('Job Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Job_1.default.findOne({ _id: id }, { __v: 0 }).then((job) => {
                    if (job) {
                        req.job = job;
                        return true;
                    }
                    else {
                        throw new Error('Job Does Not Exist');
                    }
                });
            })];
    }
}
exports.JobValidators = JobValidators;
