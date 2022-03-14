"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SkillController_1 = require("../controllers/SkillController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const SkillValidators_1 = require("./validators/SkillValidators");
class SkillRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', SkillValidators_1.SkillValidators.Skill(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, SkillController_1.SkillController.Skill);
        this.router.get('/all', SkillController_1.SkillController.allSkill);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, SkillController_1.SkillController.allAdminSkill);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, SkillValidators_1.SkillValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, SkillController_1.SkillController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), SkillController_1.SkillController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, SkillValidators_1.SkillValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, SkillController_1.SkillController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, SkillValidators_1.SkillValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, SkillController_1.SkillController.delete);
    }
}
exports.default = new SkillRouter().router;
