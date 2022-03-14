"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobTypeValidators = void 0;
const express_validator_1 = require("express-validator");
const JobType_1 = require("../../models/JobType");
class JobTypeValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return JobType_1.default.findOne({ name: name }).then(jobType => {
                    if (jobType) {
                        throw new Error('JobType Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static JobType() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return JobType_1.default.findOne({ _id: id }, { __v: 0 }).then((jobType) => {
                    if (jobType) {
                        req.jobType = jobType;
                        return true;
                    }
                    else {
                        throw new Error('JobType Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return JobType_1.default.findOne({ _id: id }, { __v: 0 }).then((jobType) => {
                    if (jobType) {
                        req.jobType = jobType;
                        return true;
                    }
                    else {
                        throw new Error('JobType Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return JobType_1.default.findOne({ _id: id }, { __v: 0 }).then((jobType) => {
                    if (jobType) {
                        req.jobType = jobType;
                        return true;
                    }
                    else {
                        throw new Error('JobType Does Not Exist');
                    }
                });
            })];
    }
}
exports.JobTypeValidators = JobTypeValidators;
