const mongoose=require('mongoose');
const deepPopulate=require('mongoose-deep-populate');
const TopicsSchema =new mongoose.Schema({
    Title:{type:String},
    Text:{type:String},
    Section:{type:mongoose.Schema.Types.ObjectId,ref:'Sections'},
    Member:{type:mongoose.Schema.Types.ObjectId,ref:'Members'},
    Isvisible:{type:Boolean,default:true},
    createdAt:{type:Date},
});
const populate=[{
    path:'section',
    match:{Isvisible:true}
}];

const Members=mongoose.model('Members',MembersSchema,'Members');
model.exports=Members