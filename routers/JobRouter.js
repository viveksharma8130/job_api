"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JobController_1 = require("../controllers/JobController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const JobValidators_1 = require("./validators/JobValidators");
class JobRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', JobValidators_1.JobValidators.Job(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.Job);
        this.router.get('/employer/:id', JobValidators_1.JobValidators.employerJob(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.employerJob);
        this.router.get('/recruiter/:id', JobValidators_1.JobValidators.recruiterJob(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.recruiterJob);
        this.router.get('/all', JobController_1.JobController.allJob);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, JobController_1.JobController.allAdminJob);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, JobValidators_1.JobValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), JobController_1.JobController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, JobValidators_1.JobValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.recruiterAuthenticate, JobValidators_1.JobValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, JobController_1.JobController.delete);
    }
}
exports.default = new JobRouter().router;
