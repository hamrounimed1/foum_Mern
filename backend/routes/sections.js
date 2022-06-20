var express = require('express');
var router = express.Router();
const Sections =require('../Schemas/sections.schema');

/* GET sections listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', async function(req, res, next) {
 const {name,description}=req.body;
 const newSection =await Sections.create({
    name,
    description
 });
 res.send(newSection);

});
router.put('/', async function(req, res, next) {
    const {name,description,_id}=req.body;
    const updateSection =await Sections.findByIdAndUpdate(_id,
        {
      
        name,
       description
    },{new:true});
    res.send(updateSection);
   
   });
module.exports=router;


module.exports = router;
