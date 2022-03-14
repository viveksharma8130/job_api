"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployerController_1 = require("../controllers/EmployerController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const EmployerValidators_1 = require("./validators/EmployerValidators");
class EmployerRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/data', GlobalMiddleWare_1.GlobalMiddleWare.employerAuthenticate, EmployerController_1.EmployerController.data);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, EmployerController_1.EmployerController.all);
        this.router.get('/login', EmployerValidators_1.EmployerValidators.login(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmployerController_1.EmployerController.login);
    }
    postRoutes() {
        this.router.post('/signup', EmployerValidators_1.EmployerValidators.signup(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, EmployerController_1.EmployerController.signup);
    }
    patchRoutes() {
        this.router.patch('/update', GlobalMiddleWare_1.GlobalMiddleWare.employerAuthenticate, EmployerController_1.EmployerController.update);
    }
    deleteRoutes() {
    }
}
exports.default = new EmployerRouter().router;
