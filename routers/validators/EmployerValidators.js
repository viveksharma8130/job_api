"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployerValidators = void 0;
const express_validator_1 = require("express-validator");
const Employer_1 = require("../../models/Employer");
class EmployerValidators {
    static signup() {
        return [
            express_validator_1.body('name', 'name is Required').isString(),
            express_validator_1.body('password', 'password is Required').isString(),
            express_validator_1.body('email', 'email Is Required').isEmail().custom((email, { req }) => {
                return Employer_1.default.findOne({ email: email }).then(employer => {
                    if (employer) {
                        throw new Error('Employer Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            express_validator_1.body('phone', 'Phone with numeric value Is Required').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digit').custom((phone, { req }) => {
                return Employer_1.default.findOne({ phone: phone }).then(employer => {
                    if (employer) {
                        throw new Error('Employer Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static login() {
        return [express_validator_1.query('email', 'Email is Required').isEmail()
                .custom((email, { req }) => {
                return Employer_1.default.findOne({ email: email }).then(employer => {
                    if (employer) {
                        req.employer = employer;
                        return true;
                    }
                    else {
                        throw new Error('Employer Does Not Exist');
                    }
                });
            }), express_validator_1.query('password', 'Password is Required').isAlphanumeric()];
    }
}
exports.EmployerValidators = EmployerValidators;
