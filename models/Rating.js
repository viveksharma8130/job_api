"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Utils_1 = require("../utils/Utils");
const RatingSchema = new mongoose.Schema({
    employer_id: { type: mongoose.Types.ObjectId, ref: 'employers', required: true },
    person_id: { type: String, required: true },
    rating: { type: Number, required: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
    updated_at: { type: Date, required: true, default: Utils_1.Utils.indianTimeZone },
}, { id: false });
RatingSchema.set('toObject', { virtuals: true });
RatingSchema.set('toJSON', { virtuals: true });
exports.default = mongoose_1.model('ratings', RatingSchema);
