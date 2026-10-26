const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "",
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Dance",
        "Music",
        "Fine Arts",
        "Literary",
        "Dramatics",
        "Informal"
      ],
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      default: "",
    },
    venue: {
      type: String,
      required: true,
    },
    maxParticipants: {
      type: Number,
      required: true,
      min: 1,
    },
    registeredCount: {
      type: Number,
      default: 0,
    },
    image: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    isListed: {
      type: Boolean,
      default: true,
    },
    participationType: {
      type: String,
      enum: ["solo", "group"],
      default: "solo",
    },
    teamSize: {
      min: { type: Number, default: 1 },
      max: { type: Number, default: 4 },
    },
    customQuestions:[
      {
      questionId:{
        type:String,
        required:true
      },
      label:{
        type:String,
        required:true,
        trim:true
      },
      type:{
        type:String,
        enum:[
          "text",
          "textarea",
          "number",
          "email",
          "url",
          "select",
          "radio",
          "checkbox",
          "file"
        ],
        required:true
      },
      options:{
        type:[String],
        default:[]
      },
      required:{
        type:Boolean,
        default:false
      },
      order:{
        type:Number,
        default:0
      },
      conditions:[
        {
          questionId:{
            type:String,
            required:true
          },
          operator:{
            type:String,
            enum:["equals","notEquals","contains"],
            default:"equals"
          },
          value:{
            type:String,
            default:""
          }
        }
      ]
    }
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
