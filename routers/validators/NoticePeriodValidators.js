"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticePeriodValidators = void 0;
const express_validator_1 = require("express-validator");
const NoticePeriod_1 = require("../../models/NoticePeriod");
class NoticePeriodValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return NoticePeriod_1.default.findOne({ name: name }).then(noticePeriod => {
                    if (noticePeriod) {
                        throw new Error('NoticePeriod Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static NoticePeriod() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return NoticePeriod_1.default.findOne({ _id: id }, { __v: 0 }).then((noticePeriod) => {
                    if (noticePeriod) {
                        req.noticePeriod = noticePeriod;
                        return true;
                    }
                    else {
                        throw new Error('NoticePeriod Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return NoticePeriod_1.default.findOne({ _id: id }, { __v: 0 }).then((noticePeriod) => {
                    if (noticePeriod) {
                        req.noticePeriod = noticePeriod;
                        return true;
                    }
                    else {
                        throw new Error('NoticePeriod Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return NoticePeriod_1.default.findOne({ _id: id }, { __v: 0 }).then((noticePeriod) => {
                    if (noticePeriod) {
                        req.noticePeriod = noticePeriod;
                        return true;
                    }
                    else {
                        throw new Error('NoticePeriod Does Not Exist');
                    }
                });
            })];
    }
}
exports.NoticePeriodValidators = NoticePeriodValidators;
