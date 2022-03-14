"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const EmployerSchema = new mongoose.Schema({
    industry_type_ids: [{ type: mongoose.Types.ObjectId, ref: 'industry_types', required: false }],
    branches_ids: [{ type: mongoose.Types.ObjectId, ref: 'locations', required: false }],
    phone: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String, required: false },
    images: { type: String, required: false },
    videos: { type: String, required: false },
    company_size: { type: String, required: false },
    type: { type: String, required: false },
    headquarter: { type: String, required: false },
    website_links: { type: String, required: false },
    contact_number: { type: String, required: false },
    linkedin_link: { type: String, required: false },
    instagram_link: { type: String, required: false },
    facebook_links: { type: String, required: false },
    twitter_links: { type: String, required: false },
    verified_profile: { type: Boolean, required: true, default: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
exports.default = mongoose_1.model('employers', EmployerSchema);
