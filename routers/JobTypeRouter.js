"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JobTypeController_1 = require("../controllers/JobTypeController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const JobTypeValidators_1 = require("./validators/JobTypeValidators");
class JobTypeRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', JobTypeValidators_1.JobTypeValidators.JobType(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobTypeController_1.JobTypeController.JobType);
        this.router.get('/all', JobTypeController_1.JobTypeController.allJobType);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, JobTypeController_1.JobTypeController.allAdminJobType);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, JobTypeValidators_1.JobTypeValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobTypeController_1.JobTypeController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), JobTypeController_1.JobTypeController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, JobTypeValidators_1.JobTypeValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobTypeController_1.JobTypeController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, JobTypeValidators_1.JobTypeValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobTypeController_1.JobTypeController.delete);
    }
}
exports.default = new JobTypeRouter().router;
