"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LocationController_1 = require("../controllers/LocationController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const LocationValidators_1 = require("./validators/LocationValidators");
class LocationRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', LocationValidators_1.LocationValidators.Location(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, LocationController_1.LocationController.Location);
        this.router.get('/all', LocationController_1.LocationController.allLocation);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, LocationController_1.LocationController.allAdminLocation);
    }
    postRoutes() {
        this.router.post('/create', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, LocationValidators_1.LocationValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, LocationController_1.LocationController.create);
        this.router.post('/excel', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, new Utils_1.Utils().excelMulter.single('excel'), LocationController_1.LocationController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, LocationValidators_1.LocationValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, LocationController_1.LocationController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, LocationValidators_1.LocationValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, LocationController_1.LocationController.delete);
    }
}
exports.default = new LocationRouter().router;
