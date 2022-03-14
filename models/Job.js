"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    recruiter_id: { type: mongoose.Types.ObjectId, ref: 'recruiters', required: true },
    employer_id: { type: mongoose.Types.ObjectId, ref: 'employers', required: true },
    roll_id: { type: mongoose.Types.ObjectId, ref: 'rolls', required: true },
    location_id: { type: mongoose.Types.ObjectId, ref: 'locations', required: true },
    skill_id: { type: mongoose.Types.ObjectId, ref: 'skills', required: true },
    notice_period_id: { type: mongoose.Types.ObjectId, ref: 'notice_periods', required: true },
    ref_id: { type: String, required: false },
    experience: { type: String, required: true },
    job_description: { type: String, required: true },
    responsibilities: { type: String, required: true },
    budget: { type: String, required: true },
    vacancy: { type: Number, required: true },
    applicant_count: { type: Number, required: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
JobSchema.set('toObject', { virtuals: true });
JobSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('jobs', JobSchema);
