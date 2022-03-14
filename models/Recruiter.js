"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const RecruiterSchema = new mongoose.Schema({
    employer_id: { type: mongoose.Types.ObjectId, ref: 'employers', required: false },
    subscription_plan_id: { type: mongoose.Types.ObjectId, ref: 'subscriptions', required: false },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    job_title: { type: String, required: false },
    profile_image: { type: String, required: false },
    contact_number: { type: String, required: false },
    verified_profile: { type: Boolean, required: true, default: false },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
exports.default = mongoose_1.model('recruiters', RecruiterSchema);
