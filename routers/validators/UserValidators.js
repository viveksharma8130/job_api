"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../../models/User");
const UserSession_1 = require("../../models/UserSession");
class UserValidators {
    static session() {
        return [
            express_validator_1.body('firebase_token', 'firebase_token is Required').isString(),
            express_validator_1.body('device_detail', 'device_detail is Required').isString(),
            express_validator_1.body('device_id', 'device_id Is Required').isString().custom((device_id, { req }) => {
                return UserSession_1.default.findOne({ device_id: device_id }).then(userSession => {
                    if (userSession) {
                        req.action = 'update';
                        return true;
                    }
                    else {
                        req.action = 'save';
                        return true;
                    }
                });
            })
        ];
    }
    static signup() {
        return [
            express_validator_1.body('name', 'name is Required').isString(),
            express_validator_1.body('password', 'password is Required').isString(),
            express_validator_1.body('email', 'email Is Required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        throw new Error('User Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            express_validator_1.body('phone', 'Phone with numeric value Is Required').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digit').custom((phone, { req }) => {
                return User_1.default.findOne({ phone: phone }).then(user => {
                    if (user) {
                        throw new Error('User Already Exist');
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
                return User_1.default.findOne({ email: email, status: 1 }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User Does Not Exist');
                    }
                });
            }), express_validator_1.query('password', 'Password is Required').isString()];
    }
    static passwordForgot() {
        return [
            express_validator_1.body('password', 'Alphanumeric password is Required').isAlphanumeric(),
            express_validator_1.body('email', 'Email Is Required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw new Error('User Not Exist');
                    }
                });
            }),
        ];
    }
    static passwordChange() {
        return [
            express_validator_1.body('password', 'Alphanumeric password is Required').isString(),
            express_validator_1.body('old_password', 'Old password is Required').isString().custom((old_password, { req }) => {
                return User_1.default.findOne({ _id: req.user.user_id }).then(user => {
                    if (user) {
                        req.user_data = user;
                        return true;
                    }
                    else {
                        throw new Error('User Not Exist');
                    }
                });
            }),
        ];
    }
    static deleteUser() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return User_1.default.findOne({ _id: id }, { __v: 0 }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('user Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return User_1.default.findOne({ _id: id }, { __v: 0 }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User Does Not Exist');
                    }
                });
            })];
    }
}
exports.UserValidators = UserValidators;
