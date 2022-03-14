"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillController = void 0;
const Skill_1 = require("../models/Skill");
const Utils_1 = require("../utils/Utils");
class SkillController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let skill = yield new Skill_1.default(req.body).save();
                res.json({
                    message: 'Skill Save Successfully',
                    data: skill,
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static excel(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const excelData = yield Utils_1.Utils.importExcelData2MongoDB(req.file.path);
            yield Skill_1.default.insertMany(excelData);
            res.json({
                message: 'File uploaded/import successfully!',
                file_name: req.file,
                status_code: 200
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const SkillId = req.skill._id;
            try {
                const skill = yield Skill_1.default.findOneAndUpdate({ _id: SkillId }, req.body, { new: true, useFindAndModify: false });
                res.send(skill);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static Skill(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const skill = req.skill;
            const data = {
                message: 'Success',
                data: skill
            };
            res.json(data);
        });
    }
    static allSkill(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skill = yield Skill_1.default.find({ status: true }, { __v: 0 });
                const data = {
                    message: 'Success',
                    data: skill
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static allAdminSkill(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skill = yield Skill_1.default.find();
                const data = {
                    message: 'Success',
                    data: skill
                };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const skill = req.skill;
            try {
                yield skill.remove();
                res.json({
                    message: 'Success ! Skill Deleted Successfully',
                    status_code: 200
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.SkillController = SkillController;
