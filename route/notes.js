const noteModel = require("../models/note")

const route = require("express").Router()

//posting notes
route.post("/notes", async(req,res)=>{
    try {
        const {title, description} = req.body

        let today = new Date()
        const Month =  today.getUTCMonth()+1
        const Year = today.getFullYear()
        const Dates = today.getDate()
        const Time = today.getTime()
        const notes = await noteModel.create({
            title:title,
            description:description,
            month: Month,
            year:Year,
            date:Dates,
            time:Time
        })
        res.json({
            status:"success",
            notes
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//getting notes
route.get("/notes", async(req,res)=>{
    try {
        const {id} = req.params
        const notes = await noteModel.find({id:id})
        res.json({
            status:"success",
            notes
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//updating notes
route.put("/notes/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const {title, description} = req.body
        const update = {
            title:title,
            description:description
        }
        const notes = await noteModel.findByIdAndUpdate(id, update, {new:true})
        res.json({
            status:"success",
            update
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//deleting notes
route.delete("/notes/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const notes = await noteModel.findByIdAndDelete(id)
        res.json({
            status:"success"
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//delete all
route.delete("/notes", async(req,res)=>{
    try {
        const {title, description} = req.body
        const notes = await noteModel.findOneAndDelete({
            title:title,
            description:description
        })
        res.json({
            status:"success"
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = route