"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingValidators = void 0;
const express_validator_1 = require("express-validator");
const Employer_1 = require("../../models/Employer");
const Rating_1 = require("../../models/Rating");
class RatingValidators {
    static create() {
        return [
            express_validator_1.body('employer_id', 'employer_id Is Required').isString().custom((employer_id, { req }) => {
                return Employer_1.default.findOne({ _id: employer_id }).then(employer => {
                    if (employer) {
                        return true;
                    }
                    else {
                        throw new Error('Employer Not Exist');
                    }
                });
            }),
            express_validator_1.body('person_id', 'person_id Is Required').isString().custom((person_id, { req }) => {
                return Rating_1.default.findOne({ person_id: person_id, employer_id: req.body.employer_id }).then(rating => {
                    if (rating) {
                        throw new Error('Rating Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            express_validator_1.body('rating', 'rating Is Required').isNumeric(),
        ];
    }
    static Rating() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Rating_1.default.findOne({ _id: id }, { __v: 0 }).then((rating) => {
                    if (rating) {
                        req.rating = rating;
                        return true;
                    }
                    else {
                        throw new Error('Rating Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Rating_1.default.findOne({ _id: id }, { __v: 0 }).then((rating) => {
                    if (rating) {
                        req.rating = rating;
                        return true;
                    }
                    else {
                        throw new Error('Rating Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Rating_1.default.findOne({ _id: id }, { __v: 0 }).then((rating) => {
                    if (rating) {
                        req.rating = rating;
                        return true;
                    }
                    else {
                        throw new Error('Rating Does Not Exist');
                    }
                });
            })];
    }
}
exports.RatingValidators = RatingValidators;
