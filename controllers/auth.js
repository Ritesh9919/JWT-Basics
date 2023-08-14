const {BadRequestError} = require('../error');
const jwt = require('jsonwebtoken');




module.exports.create = (req, res) => {
   const {name, password} = req.body;

   if(!name || !password) {
    throw new BadRequestError('please provide email and password');
   }

   const id = new Date().getTime();
   const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn:'30d'});

   return res.json({msg:'User created', token})
}

module.exports.dashBoard = (req, res) => {
    

     return res.json({
        success:true,
        msg:`Hello ${req.user.name}`
    });
}


