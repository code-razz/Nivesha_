import mongoose from 'mongoose';

const pullReqSchema = new mongoose.Schema({
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: true,
    },
    companyName:{
      type:String
    },
    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'investor',
      required: true,
    },
    investorName:{
      type:String
    }

  });
  
//  const investments = mongoose.model('investments', investmentsSchema);
  

export default mongoose.model("pullReq",pullReqSchema);