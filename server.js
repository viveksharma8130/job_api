"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env_1 = require("./environments/env");
const AdminRouter_1 = require("./routers/AdminRouter");
const UserRouter_1 = require("./routers/UserRouter");
const BannerRouter_1 = require("./routers/BannerRouter");
const razorpayRouter_1 = require("./routers/razorpayRouter");
const LocationRouter_1 = require("./routers/LocationRouter");
const SkillRouter_1 = require("./routers/SkillRouter");
const ShiftRouter_1 = require("./routers/ShiftRouter");
const RollRouter_1 = require("./routers/RollRouter");
const IndustryRouter_1 = require("./routers/IndustryRouter");
const JobTypeRouter_1 = require("./routers/JobTypeRouter");
const EmploymentTypeRouter_1 = require("./routers/EmploymentTypeRouter");
const EmployerRouter_1 = require("./routers/EmployerRouter");
const RecruiterRouter_1 = require("./routers/RecruiterRouter");
const JobRouter_1 = require("./routers/JobRouter");
const NoticePeriodRouter_1 = require("./routers/NoticePeriodRouter");
const RatingRouter_1 = require("./routers/RatingRouter");
const ApplicantRouter_1 = require("./routers/ApplicantRouter");
const CtcRouter_1 = require("./routers/CtcRouter");
class Server {
    constructor() {
        this.app = express();
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfigurations() {
        this.connectMongodb();
        this.configureBodyParser();
    }
    connectMongodb() {
        const databaseUrl = env_1.getEnvironmentVariables().db_url;
        mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('mongoDb Connected');
        });
    }
    configureBodyParser() {
        this.app.use(express.json({ limit: '1000mb' }));
        this.app.use(express.urlencoded({ limit: '1000mb', extended: true, parameterLimit: 1000000 }));
    }
    setRoutes() {
        this.app.use(cors());
        this.app.use('/api/src/uploads', express.static('src/uploads'));
        this.app.use('/api/admin', AdminRouter_1.default);
        this.app.use('/api/user', UserRouter_1.default);
        this.app.use('/api/employer', EmployerRouter_1.default);
        this.app.use('/api/recruiter', RecruiterRouter_1.default);
        this.app.use('/api/banner', BannerRouter_1.default);
        this.app.use('/api/razorpay', razorpayRouter_1.default);
        this.app.use('/api/location', LocationRouter_1.default);
        this.app.use('/api/skill', SkillRouter_1.default);
        this.app.use('/api/shift', ShiftRouter_1.default);
        this.app.use('/api/roll', RollRouter_1.default);
        this.app.use('/api/ctc', CtcRouter_1.default);
        this.app.use('/api/industry', IndustryRouter_1.default);
        this.app.use('/api/job_type', JobTypeRouter_1.default);
        this.app.use('/api/notice_period', NoticePeriodRouter_1.default);
        this.app.use('/api/employment_type', EmploymentTypeRouter_1.default);
        this.app.use('/api/job', JobRouter_1.default);
        this.app.use('/api/applicant', ApplicantRouter_1.default);
        this.app.use('/api/rating', RatingRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(200).json({
                message: 'Not Found !' + env_1.getEnvironmentVariables().jwt_secret,
                status_code: 404
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(200).json({
                message: error.message || 'Something Went Wrong. Please Try Again',
                status_code: errorStatus
            });
        });
    }
}
exports.Server = Server;
