"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ShiftController_1 = require("../controllers/ShiftController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const ShiftValidators_1 = require("./validators/ShiftValidators");
class ShiftRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', ShiftValidators_1.ShiftValidators.Shift(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ShiftController_1.ShiftController.Shift);
        this.router.get('/all', ShiftController_1.ShiftController.allShift);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, ShiftController_1.ShiftController.allAdminShift);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, ShiftValidators_1.ShiftValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ShiftController_1.ShiftController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), ShiftController_1.ShiftController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, ShiftValidators_1.ShiftValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ShiftController_1.ShiftController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, ShiftValidators_1.ShiftValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, ShiftController_1.ShiftController.delete);
    }
}
exports.default = new ShiftRouter().router;
