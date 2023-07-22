import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
  {
    members : {
        type :Array,
    },
  },
  {
    timestamps: true,
  }
);

var ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;