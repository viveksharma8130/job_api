"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Populate = void 0;
class Populate {
    constructor() {
        // USER 
        this.userPopulate = [
            { path: 'current_job_title_id' },
            { path: 'current_industry_id' },
            { path: 'current_location_id' },
            { path: 'current_employer_id' },
            { path: 'skill_ids' },
            { path: 'prefered_location_ids' },
            { path: 'prefered_role_ids' },
            { path: 'prefered_shift_ids' },
            { path: 'prefered_job_type_ids' },
            { path: 'prefered_employment_type_ids' },
            { path: 'prefered_industry_ids' },
            { path: 'ctc_ids' },
        ];
        // JOB 
        this.jobPopulate = [
            { path: 'recruiter_id' },
            { path: 'employer_id' },
            { path: 'roll_id' },
            { path: 'location_id' },
            { path: 'skill_id' },
            { path: 'notice_period_id' },
        ];
    }
}
exports.Populate = Populate;
