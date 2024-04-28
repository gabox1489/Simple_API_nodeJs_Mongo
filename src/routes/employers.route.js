const express = require('express')
const Model = require('../models/employers.model')
const router = express.Router()

router.post('/post', async (req, res)=>{
    const data = new Model({
        name: req.body.name,
        last_name: req.body.last_name,
        cellphone: req.body.cellphone,
        social_id: req.body.social_id,
        publication_date: req.body.publication_date
    })

    try{
        const dataSave = await data.save()
        res.status(200).json(dataSave)
    }catch(error){
        res.status(400).json({message: 'An error has occurred with your application'})
    }
})

router.get('/getAll', async (req, res)=>{
    try{
        const info = await Model.find()
        res.json(info)
    }catch(error){
        res.status(400).json({message: 'An error has occurred with your application'})
    }
})

router.get('/getOne/:id',async (req, res)=>{
    try{
        const dataId = await Model.findById(req.params.id)
        res.json(dataId)
    }catch(error){
        res.status(500).json({message: 'ID not found'})
    }
})

router.patch('/updateOne/:id', async(req, res)=>{
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}

        const result = await Model.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id',async (req, res)=>{
    try{
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`The employer with the ${data.id} id has been deleted....`)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})





module.exports = router