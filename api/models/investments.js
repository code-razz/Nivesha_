import mongoose from 'mongoose';

const investmentsSchema = new mongoose.Schema({
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: true,
    },
    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'investor',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    equityGained: {
      type: Number,
    },
  });
  
//  const investments = mongoose.model('investments', investmentsSchema);
  

export default mongoose.model("investments",investmentsSchema);