"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollValidators = void 0;
const express_validator_1 = require("express-validator");
const Roll_1 = require("../../models/Roll");
class RollValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return Roll_1.default.findOne({ name: name }).then(roll => {
                    if (roll) {
                        throw new Error('Roll Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static Roll() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Roll_1.default.findOne({ _id: id }, { __v: 0 }).then((roll) => {
                    if (roll) {
                        req.roll = roll;
                        return true;
                    }
                    else {
                        throw new Error('Roll Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Roll_1.default.findOne({ _id: id }, { __v: 0 }).then((roll) => {
                    if (roll) {
                        req.roll = roll;
                        return true;
                    }
                    else {
                        throw new Error('Roll Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Roll_1.default.findOne({ _id: id }, { __v: 0 }).then((roll) => {
                    if (roll) {
                        req.roll = roll;
                        return true;
                    }
                    else {
                        throw new Error('Roll Does Not Exist');
                    }
                });
            })];
    }
}
exports.RollValidators = RollValidators;
