import mongoose from 'mongoose'

const Shema = new mongoose.Schema(
    {
        NAME: { type: String, required },
        SL1: { type: Number, default: 0 },
        SL2: { type: Number, default: 0 },
        G: { type: Number, default: 0 },
        VT1: { type: String },
        VT2: { type: String },
        VT3: { type: String },
        VT4: { type: String },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models('Books') || mongoose.model('Books', Shema)
