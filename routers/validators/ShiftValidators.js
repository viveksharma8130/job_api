"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftValidators = void 0;
const express_validator_1 = require("express-validator");
const Shift_1 = require("../../models/Shift");
class ShiftValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return Shift_1.default.findOne({ name: name }).then(shift => {
                    if (shift) {
                        throw new Error('Shift Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static Shift() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Shift_1.default.findOne({ _id: id }, { __v: 0 }).then((shift) => {
                    if (shift) {
                        req.shift = shift;
                        return true;
                    }
                    else {
                        throw new Error('Shift Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Shift_1.default.findOne({ _id: id }, { __v: 0 }).then((shift) => {
                    if (shift) {
                        req.shift = shift;
                        return true;
                    }
                    else {
                        throw new Error('Shift Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Shift_1.default.findOne({ _id: id }, { __v: 0 }).then((shift) => {
                    if (shift) {
                        req.shift = shift;
                        return true;
                    }
                    else {
                        throw new Error('Shift Does Not Exist');
                    }
                });
            })];
    }
}
exports.ShiftValidators = ShiftValidators;
