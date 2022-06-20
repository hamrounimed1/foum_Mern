const mongoose=require('mongoose');
const deepPopulate=require('mongoose-deep-populate');
const SectionsSchema =new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    
    Isvisible:{type:Boolean,default:true},
    createdAt:{type:Date},
});
const populate=[];
const Sections=mongoose.model('Sections',SectionsSchema,'Sections');
module.exports=Sections