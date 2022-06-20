const mongoose=require('mongoose');
const deepPopulate=require('mongoose-deep-populate');
const MembersSchema =new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    fullname:{type:String},
    gender:{type:String},
    db:{type:Date},
    Isvisible:{type:Boolean,default:true},
    createdAt:{type:Date},
});
const populate=[];
const Members=mongoose.model('Members',MembersSchema,'Members');
model.exports=Members