const express =require('express');
const router = express.Router();
const MenuItem = require('./../Models/MenuItem');

// POST method for MenuItem
router.post('/',async(req,res)=>{
  try {
    const data = req.body//Assuming the req body contains the person data

  
  const newMenuItem = new MenuItem(data);
  //newPerson.name = data.name;

  
  const response = await newMenuItem.save();
  console.log('Menu data saved');
  res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal Server error'});
    
  }

})

//Get method for menu

router.get('/', async(req,res)=>{
  try { 
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
    
  } catch (error) {
     console.log(error);
    res.status(200).json('Listening on port 3000');
    
  }
})

module.exports = router;