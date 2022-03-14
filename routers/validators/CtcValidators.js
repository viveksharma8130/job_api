"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtcValidators = void 0;
const express_validator_1 = require("express-validator");
const Ctc_1 = require("../../models/Ctc");
class CtcValidators {
    static create() {
        return [
            express_validator_1.body('numeral', 'numeral Is Required'),
            express_validator_1.body('type', 'type Is Required')
        ];
    }
    static ctc() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Ctc_1.default.findOne({ _id: id }, { __v: 0 }).then((ctc) => {
                    if (ctc) {
                        req.ctc = ctc;
                        return true;
                    }
                    else {
                        throw new Error('Ctc Does Not Exist');
                    }
                });
            })];
    }
    static type() {
        return [express_validator_1.param('type').custom((type, { req }) => {
                return Ctc_1.default.find({ type: type }, { __v: 0 }).then((ctc) => {
                    if (ctc) {
                        req.ctc = ctc;
                        return true;
                    }
                    else {
                        throw new Error('type Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Ctc_1.default.findOne({ _id: id }, { __v: 0 }).then((ctc) => {
                    if (ctc) {
                        req.ctc = ctc;
                        return true;
                    }
                    else {
                        throw new Error('Ctc Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Ctc_1.default.findOne({ _id: id }, { __v: 0 }).then((ctc) => {
                    if (ctc) {
                        req.ctc = ctc;
                        return true;
                    }
                    else {
                        throw new Error('Ctc Does Not Exist');
                    }
                });
            })];
    }
}
exports.CtcValidators = CtcValidators;
