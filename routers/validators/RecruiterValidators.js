"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruiterValidators = void 0;
const express_validator_1 = require("express-validator");
const Recruiter_1 = require("../../models/Recruiter");
class RecruiterValidators {
    static signup() {
        return [
            express_validator_1.body('name', 'name is Required').isString(),
            express_validator_1.body('password', 'password is Required').isString(),
            express_validator_1.body('email', 'email Is Required').isEmail().custom((email, { req }) => {
                return Recruiter_1.default.findOne({ email: email }).then(recruiter => {
                    if (recruiter) {
                        throw new Error('Recruiter Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            express_validator_1.body('phone', 'Phone with numeric value Is Required').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digit').custom((phone, { req }) => {
                return Recruiter_1.default.findOne({ phone: phone }).then(recruiter => {
                    if (recruiter) {
                        throw new Error('Recruiter Already Exist');
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
                return Recruiter_1.default.findOne({ email: email }).then(recruiter => {
                    if (recruiter) {
                        req.recruiter = recruiter;
                        return true;
                    }
                    else {
                        throw new Error('Recruiter Does Not Exist');
                    }
                });
            }), express_validator_1.query('password', 'Password is Required').isAlphanumeric()];
    }
}
exports.RecruiterValidators = RecruiterValidators;
