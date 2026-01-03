// const mongoose = require("mongoose");

// const complaintSchema = new mongoose.Schema(
//   {
//     category: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: [
//         "PENDING",
//         "ASSIGNED",
//         "IN_PROGRESS",
//         "RESOLVED",
//         "FEEDBACK_GIVEN",
//       ],
//       default: "PENDING",
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     assignedTo: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       default: null,
//     },
//     feedback: {
//       type: String,
//       default: "",
//     },
//     resolvedAt: {
//       type: Date,
//       default: null,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Complaint", complaintSchema);

const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    block: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "PENDING",
        "ASSIGNED",
        "IN_PROGRESS",
        "RESOLVED",
        "FEEDBACK_GIVEN",
      ],
      default: "PENDING",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    feedback: {
      type: String,
      default: "",
    },
    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);

