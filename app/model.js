import mongoose, {
    Schema
} from 'mongoose';

//each table defined by const Schema
const SymptomSchema = new Schema( {
    bodyPart: {
        type: String,
        required: "What body part is the symptom associated with?"
    },
    severity: {
        type: Number,
        required: "How severe is the pain?"
    },
    date: {
        type: Date,
        default: new Date
    }
})

export default mongoose.model('SymptomSchema', SymptomSchema);