"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RollController_1 = require("../controllers/RollController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const RollValidators_1 = require("./validators/RollValidators");
class RollRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', RollValidators_1.RollValidators.Roll(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RollController_1.RollController.Roll);
        this.router.get('/all', RollController_1.RollController.allRoll);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RollController_1.RollController.allAdminRoll);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RollValidators_1.RollValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RollController_1.RollController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), RollController_1.RollController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RollValidators_1.RollValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RollController_1.RollController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RollValidators_1.RollValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RollController_1.RollController.delete);
    }
}
exports.default = new RollRouter().router;
