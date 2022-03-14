"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RatingController_1 = require("../controllers/RatingController");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
const RatingValidators_1 = require("./validators/RatingValidators");
class RatingRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/id/:id', RatingValidators_1.RatingValidators.Rating(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RatingController_1.RatingController.Rating);
        this.router.get('/all', RatingController_1.RatingController.allRating);
        this.router.get('/admin/all', GlobalMiddleWare_1.GlobalMiddleWare.adminAuthenticate, RatingController_1.RatingController.allAdminRating);
    }
    postRoutes() {
        this.router.post('/create', RatingValidators_1.RatingValidators.create(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RatingController_1.RatingController.create);
        this.router.post('/excel', new Utils_1.Utils().excelMulter.single('excel'), RatingController_1.RatingController.excel);
    }
    patchRoutes() {
        this.router.patch('/update/:id', RatingValidators_1.RatingValidators.update(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RatingController_1.RatingController.update);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', RatingValidators_1.RatingValidators.delete(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, RatingController_1.RatingController.delete);
    }
}
exports.default = new RatingRouter().router;
