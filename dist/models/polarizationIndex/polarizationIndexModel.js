"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarizationMetricsSchema = exports.PolarizationAxisSchema = exports.PolarizationGroupSchema = void 0;
const valibot_1 = require("valibot");
// Schema for individual group within an axis
exports.PolarizationGroupSchema = (0, valibot_1.object)({
    groupId: (0, valibot_1.string)(), // "sports_123_option_0"
    groupName: (0, valibot_1.string)(), // "Football Lovers"
    average: (0, valibot_1.number)(), // -1 to +1 (group's average opinion)
    numberOfMembers: (0, valibot_1.number)(), // Number of people in this group
    color: (0, valibot_1.string)(), // Hex color for charts (e.g., "#ef4444")
    mad: (0, valibot_1.number)() // Within-group polarization (0 to 1)
});
// Schema for each polarization axis
exports.PolarizationAxisSchema = (0, valibot_1.object)({
    groupingQuestionId: (0, valibot_1.string)(), // e.g., "sports_question_123"
    groupingQuestionText: (0, valibot_1.string)(), // e.g., "Which sport do you prefer?"
    // Axis-specific polarization metrics
    axisAverageAgreement: (0, valibot_1.number)(), // Average for this axis grouping (-1 to +1)
    axisMAD: (0, valibot_1.number)(), // MAD for this axis grouping (0 to 1)   
    // All groups for this axis
    groups: (0, valibot_1.array)(exports.PolarizationGroupSchema)
});
// Main polarization metrics schema
exports.PolarizationMetricsSchema = (0, valibot_1.object)({
    // Overall polarization (across all users, regardless of grouping)
    overallAverage: (0, valibot_1.number)(), // -1 to +1 (X-axis on triangle plot)
    overallMAD: (0, valibot_1.number)(), // 0 to 1 (Y-axis on triangle plot)
    averageAgreement: (0, valibot_1.string)(), // Overall direction
    lastUpdated: (0, valibot_1.number)(), // Timestamp of last calculation
    // Multiple polarization axes (one per grouping question)
    axes: (0, valibot_1.array)(exports.PolarizationAxisSchema)
});
// Export the main schema
