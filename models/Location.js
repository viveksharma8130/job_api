"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
LocationSchema.set('toObject', { virtuals: true });
LocationSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('locations', LocationSchema);
