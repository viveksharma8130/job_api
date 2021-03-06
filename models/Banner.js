"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const BannerSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ['homepage', 'test_series', 'courses'], default: 'admin' },
    title: { type: String, required: false },
    image: { type: String, required: false },
    image_name: { type: String, required: false },
    url: { type: String, required: false },
    sequence: { type: Number, required: false, default: 1 },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
BannerSchema.set('toObject', { virtuals: true });
BannerSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('banners', BannerSchema);
