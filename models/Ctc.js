"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const CtcSchema = new mongoose.Schema({
    numeral: { type: Number, required: true },
    type: { type: String, required: true, enum: ['lakh', 'thousand'] },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
CtcSchema.set('toObject', { virtuals: true });
CtcSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('ctcs', CtcSchema);
