"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillValidators = void 0;
const express_validator_1 = require("express-validator");
const Skill_1 = require("../../models/Skill");
class SkillValidators {
    static create() {
        return [
            express_validator_1.body('name', 'name Is Required').custom((name, { req }) => {
                return Skill_1.default.findOne({ name: name }).then(skill => {
                    if (skill) {
                        throw new Error('Skill Already Exist');
                    }
                    else {
                        return true;
                    }
                });
            })
        ];
    }
    static Skill() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Skill_1.default.findOne({ _id: id }, { __v: 0 }).then((skill) => {
                    if (skill) {
                        req.skill = skill;
                        return true;
                    }
                    else {
                        throw new Error('Skill Does Not Exist');
                    }
                });
            })];
    }
    static update() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Skill_1.default.findOne({ _id: id }, { __v: 0 }).then((skill) => {
                    if (skill) {
                        req.skill = skill;
                        return true;
                    }
                    else {
                        throw new Error('Skill Does Not Exist');
                    }
                });
            })];
    }
    static delete() {
        return [express_validator_1.param('id').custom((id, { req }) => {
                return Skill_1.default.findOne({ _id: id }, { __v: 0 }).then((skill) => {
                    if (skill) {
                        req.skill = skill;
                        return true;
                    }
                    else {
                        throw new Error('Skill Does Not Exist');
                    }
                });
            })];
    }
}
exports.SkillValidators = SkillValidators;
