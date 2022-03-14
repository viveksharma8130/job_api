"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndustryController_1 = require("../controllers/IndustryController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const IndustryValidators_1 = require("./validators/IndustryValidators");
class IndustryRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', IndustryValidators_1.IndustryValidators.Industry(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, IndustryController_1.IndustryController.Industry);
        this.router.get('/all', IndustryController_1.IndustryController.allIndustry);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, IndustryController_1.IndustryController.allAdminIndustry);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, IndustryValidators_1.IndustryValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, IndustryController_1.IndustryController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), IndustryController_1.IndustryController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, IndustryValidators_1.IndustryValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, IndustryController_1.IndustryController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, IndustryValidators_1.IndustryValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, IndustryController_1.IndustryController.delete);
    }
}
exports.default = new IndustryRouter().router;
