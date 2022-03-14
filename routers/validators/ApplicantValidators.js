"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantValidators = void 0;
const express_validator_1 = require("express-validator");
const Applicant_1 = require("../../models/Applicant");
class ApplicantValidators {
    static create() {
        return [
            express_validator_1.body('job_id', 'job_id Is Required').isString().custom((job_id, { req }) => {
                return Applicant_1.default.findOne({ job_id: job_id, user_id: req.user.user_id }).then(applicant => {
                    if (applicant) {
                        throw new Error('Applicant already applied!');
                    }
                    else {
                        return true;
                    }
                });
            }),
        ];
    }
    static Applicant() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Applicant_1.default.findOne({ _id: id }, { __v: 0 }).then((applicant) => {
                    if (applicant) {
                        req.applicant = applicant;
                        return true;
                    }
                    else {
                        throw new Error('Applicant Does Not Exist');
                    }
                });
            })];
    }
    static jobApplicant() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Applicant_1.default.find({ job_id: id }, { __v: 0 }).populate({ path: 'user_id' }).then((applicant) => {
                    if (applicant) {
                        req.applicant = applicant;
                        return true;
                    }
                    else {
                        throw new Error('No Applicant!');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Applicant_1.default.findOne({ _id: id }, { __v: 0 }).then((applicant) => {
                    if (applicant) {
                        req.applicant = applicant;
                        return true;
                    }
                    else {
                        throw new Error('Applicant Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Applicant_1.default.findOne({ _id: id }, { __v: 0 }).then((applicant) => {
                    if (applicant) {
                        req.applicant = applicant;
                        return true;
                    }
                    else {
                        throw new Error('Applicant Does Not Exist');
                    }
                });
            })];
    }
}
exports.ApplicantValidators = ApplicantValidators;
