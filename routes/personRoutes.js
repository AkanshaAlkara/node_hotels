const express =require('express');
const router = express.Router();
const Person = require('./../Models/Person')

//POST route to add a person
router.post('/', async(req, res)=>{
  try {
    const data = req.body//Assuming the req body contains the person data

  //create a new person document using Mongoose model
  const newPerson = new Person(data);
  //newPerson.name = data.name;

  //Save the newPerson to the datbase
  const response = await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal Server error'});
    
  }
})

//Get method to get the person
router.get('/', async(req,res)=>{
  try { 
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
    
  } catch (error) {
     console.log(error);
    res.status(200).json('Listening on port 3000');
    
  }
})

router.get('/:workType', async(req,res)=>{
    try {
      const workType = req.params.workType;// Extract the work Type from the URL parameter
    if(workType=='chef' || workType=='manager' || workType=='waiter'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);

    }else{
      res.status(404).json({error:'Invalid work Type'})
    }
      
    } catch (error) {
       console.log(error);
    res.status(500).json({error: 'Internal Server error'});
     }
})

router.put('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedParsonData, {
      new: true,// Return the updated document
      runValidators: true,// Run Mongoose validation

    })

    if(!response)
    {
      return res.status(404).json({error: 'Person not found'})
    }
    console.log('data updated');
    res.status(200).json(response);
  }catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal Server error'});
    
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    const pesonId =req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({eror:'Person not foumd'});
    }
    console.log('data delete');
    res.status(200).json({message:'person Deleted Sucessfully'})
    
  } catch (error) {
     console.log(error);
    res.status(500).json({error: 'Internal Server error'});
    
  }

})

module.exports = router;