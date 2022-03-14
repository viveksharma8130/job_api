"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentTypeValidators = void 0;
const express_validator_1 = require("express-validator");
const EmploymentType_1 = require("../../models/EmploymentType");
class EmploymentTypeValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return EmploymentType_1.default.findOne({ name: name }).then(employmentType => {
                    if (employmentType) {
                        throw new Error('EmploymentType Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static EmploymentType() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return EmploymentType_1.default.findOne({ _id: id }, { __v: 0 }).then((employmentType) => {
                    if (employmentType) {
                        req.employmentType = employmentType;
                        return true;
                    }
                    else {
                        throw new Error('EmploymentType Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return EmploymentType_1.default.findOne({ _id: id }, { __v: 0 }).then((employmentType) => {
                    if (employmentType) {
                        req.employmentType = employmentType;
                        return true;
                    }
                    else {
                        throw new Error('EmploymentType Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return EmploymentType_1.default.findOne({ _id: id }, { __v: 0 }).then((employmentType) => {
                    if (employmentType) {
                        req.employmentType = employmentType;
                        return true;
                    }
                    else {
                        throw new Error('EmploymentType Does Not Exist');
                    }
                });
            })];
    }
}
exports.EmploymentTypeValidators = EmploymentTypeValidators;
