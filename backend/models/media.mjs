import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    videos: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("media", mediaSchema);
