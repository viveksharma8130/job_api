"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const ApplicantSchema = new mongoose.Schema({
    job_id: { type: mongoose.Types.ObjectId, ref: 'jobs', required: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
ApplicantSchema.set('toObject', { virtuals: true });
ApplicantSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('applicants', ApplicantSchema);
