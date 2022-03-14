"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationValidators = void 0;
const express_validator_1 = require("express-validator");
const Location_1 = require("../../models/Location");
class LocationValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return Location_1.default.findOne({ name: name }).then(location => {
                    if (location) {
                        throw new Error('Location Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static Location() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Location_1.default.findOne({ _id: id }, { __v: 0 }).then((location) => {
                    if (location) {
                        req.location = location;
                        return true;
                    }
                    else {
                        throw new Error('Location Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Location_1.default.findOne({ _id: id }, { __v: 0 }).then((location) => {
                    if (location) {
                        req.location = location;
                        return true;
                    }
                    else {
                        throw new Error('Location Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Location_1.default.findOne({ _id: id }, { __v: 0 }).then((location) => {
                    if (location) {
                        req.location = location;
                        return true;
                    }
                    else {
                        throw new Error('Location Does Not Exist');
                    }
                });
            })];
    }
}
exports.LocationValidators = LocationValidators;
