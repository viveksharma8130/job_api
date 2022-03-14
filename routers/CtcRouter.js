"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CtcController_1 = require("../controllers/CtcController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const CtcValidators_1 = require("./validators/CtcValidators");
class CtcRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', CtcValidators_1.CtcValidators.ctc(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CtcController_1.CtcController.ctc);
        this.router.get('/all', CtcController_1.CtcController.allCtc);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, CtcController_1.CtcController.allAdminCtc);
        this.router.get('/type/:type', CtcValidators_1.CtcValidators.type(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CtcController_1.CtcController.type);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, CtcValidators_1.CtcValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CtcController_1.CtcController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), CtcController_1.CtcController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, CtcValidators_1.CtcValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CtcController_1.CtcController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, CtcValidators_1.CtcValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, CtcController_1.CtcController.delete);
    }
}
exports.default = new CtcRouter().router;
