const getAllProducts = (req,res)=>{
    //res.status(200).json({msg:"fdsqsafd"});
    res.end('hello');
};

const getSomething = async(req,res)=>{
   // res.status(200).json({msg:"fdsqsafd"});
   res.end('world');

};

module.exports = {getAllProducts,getSomething}