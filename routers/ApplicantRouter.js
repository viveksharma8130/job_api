"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ApplicantController_1 = require("../controllers/ApplicantController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const ApplicantValidators_1 = require("./validators/ApplicantValidators");
class ApplicantRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', ApplicantValidators_1.ApplicantValidators.Applicant(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ApplicantController_1.ApplicantController.Applicant);
        this.router.get('/user/all', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, ApplicantController_1.ApplicantController.allApplicant);
        this.router.get('/job/:id', ApplicantValidators_1.ApplicantValidators.jobApplicant(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ApplicantController_1.ApplicantController.jobApplicant);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, ApplicantController_1.ApplicantController.allAdminApplicant);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, ApplicantValidators_1.ApplicantValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ApplicantController_1.ApplicantController.create);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, ApplicantValidators_1.ApplicantValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ApplicantController_1.ApplicantController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, ApplicantValidators_1.ApplicantValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ApplicantController_1.ApplicantController.delete);
    }
}
exports.default = new ApplicantRouter().router;
