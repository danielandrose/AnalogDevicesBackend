import mongoose,{ Schema } from "mongoose";

const schema = new Schema({
    value: {
        type:Number,
        required:true
    },
    recordedAt: {
        type: Date,
        default: Date.now
    }
})

const Temperature=mongoose.model("temperature",schema);

export default Temperature;