"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NoticePeriodController_1 = require("../controllers/NoticePeriodController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const NoticePeriodValidators_1 = require("./validators/NoticePeriodValidators");
class NoticePeriodRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', NoticePeriodValidators_1.NoticePeriodValidators.NoticePeriod(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, NoticePeriodController_1.NoticePeriodController.NoticePeriod);
        this.router.get('/all', NoticePeriodController_1.NoticePeriodController.allNoticePeriod);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, NoticePeriodController_1.NoticePeriodController.allAdminNoticePeriod);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, NoticePeriodValidators_1.NoticePeriodValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, NoticePeriodController_1.NoticePeriodController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), NoticePeriodController_1.NoticePeriodController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, NoticePeriodValidators_1.NoticePeriodValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, NoticePeriodController_1.NoticePeriodController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, NoticePeriodValidators_1.NoticePeriodValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, NoticePeriodController_1.NoticePeriodController.delete);
    }
}
exports.default = new NoticePeriodRouter().router;
