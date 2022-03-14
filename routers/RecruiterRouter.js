"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RecruiterController_1 = require("../controllers/RecruiterController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const RecruiterValidators_1 = require("./validators/RecruiterValidators");
class RecruiterRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/data', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, RecruiterController_1.RecruiterController.data);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RecruiterController_1.RecruiterController.all);
        this.router.get('/login', RecruiterValidators_1.RecruiterValidators.login(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RecruiterController_1.RecruiterController.login);
    }
    postRoutes() {
        this.router.post('/signup', RecruiterValidators_1.RecruiterValidators.signup(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RecruiterController_1.RecruiterController.signup);
    }
    patchRoutes() {
        this.router.patch('/update', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, RecruiterController_1.RecruiterController.update);
    }
    deleteRoutes() {
    }
}
exports.default = new RecruiterRouter().router;
