"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const userSchema = new mongoose.Schema({
    user_code: { type: String, required: true },
    current_job_title_id: { type: mongoose.Types.ObjectId, ref: 'jobs', required: false },
    current_industry_id: { type: mongoose.Types.ObjectId, ref: 'industries', required: false },
    current_location_id: { type: mongoose.Types.ObjectId, ref: 'locations', required: false },
    current_employer_id: { type: mongoose.Types.ObjectId, ref: 'employers', required: false },
    skill_ids: [{ type: mongoose.Types.ObjectId, ref: 'skills', required: false }],
    employer_ids: [{ type: mongoose.Types.ObjectId, ref: 'employers', required: false }],
    prefered_location_ids: [{ type: mongoose.Types.ObjectId, ref: 'locations', required: false }],
    prefered_role_ids: [{ type: mongoose.Types.ObjectId, ref: 'rolls', required: false }],
    prefered_shift_ids: [{ type: mongoose.Types.ObjectId, ref: 'shifts', required: false }],
    prefered_job_type_ids: [{ type: mongoose.Types.ObjectId, ref: 'job_types', required: false }],
    prefered_employment_type_ids: [{ type: mongoose.Types.ObjectId, ref: 'employment_types', required: false }],
    prefered_industry_ids: [{ type: mongoose.Types.ObjectId, ref: 'industries', required: false }],
    ctc_ids: [{ type: mongoose.Types.ObjectId, ref: 'ctcs', required: false }],
    search_criteria: { type: String, required: false },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false },
    dob: { type: String, required: false },
    profile_image_path: { type: String, required: false },
    video_profile_path: { type: String, required: false },
    resume_path: { type: String, required: false },
    profile_summary: { type: String, required: false },
    profile_headline: { type: String, required: false },
    total_experience: { type: String, required: false },
    current_ctc: { type: String, required: false },
    employer_data: { type: String, required: false },
    project_data: { type: String, required: false },
    verified_profile: { type: Boolean, required: true, default: false },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('users', userSchema);
