"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryValidators = void 0;
const express_validator_1 = require("express-validator");
const Industry_1 = require("../../models/Industry");
class IndustryValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return Industry_1.default.findOne({ name: name }).then(industry => {
                    if (industry) {
                        throw new Error('Industry Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static Industry() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Industry_1.default.findOne({ _id: id }, { __v: 0 }).then((industry) => {
                    if (industry) {
                        req.industry = industry;
                        return true;
                    }
                    else {
                        throw new Error('Industry Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Industry_1.default.findOne({ _id: id }, { __v: 0 }).then((industry) => {
                    if (industry) {
                        req.industry = industry;
                        return true;
                    }
                    else {
                        throw new Error('Industry Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Industry_1.default.findOne({ _id: id }, { __v: 0 }).then((industry) => {
                    if (industry) {
                        req.industry = industry;
                        return true;
                    }
                    else {
                        throw new Error('Industry Does Not Exist');
                    }
                });
            })];
    }
}
exports.IndustryValidators = IndustryValidators;
