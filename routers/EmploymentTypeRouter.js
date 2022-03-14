"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmploymentTypeController_1 = require("../controllers/EmploymentTypeController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const EmploymentTypeValidators_1 = require("./validators/EmploymentTypeValidators");
class EmploymentTypeRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', EmploymentTypeValidators_1.EmploymentTypeValidators.EmploymentType(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmploymentTypeController_1.EmploymentTypeController.EmploymentType);
        this.router.get('/all', EmploymentTypeController_1.EmploymentTypeController.allEmploymentType);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, EmploymentTypeController_1.EmploymentTypeController.allAdminEmploymentType);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, EmploymentTypeValidators_1.EmploymentTypeValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmploymentTypeController_1.EmploymentTypeController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), EmploymentTypeController_1.EmploymentTypeController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, EmploymentTypeValidators_1.EmploymentTypeValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmploymentTypeController_1.EmploymentTypeController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, EmploymentTypeValidators_1.EmploymentTypeValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmploymentTypeController_1.EmploymentTypeController.delete);
    }
}
exports.default = new EmploymentTypeRouter().router;
