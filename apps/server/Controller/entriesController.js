import { addEntry, allEntries } from "../Model/entriesModel.js"



export function getEntries(req,res){
   const entries = allEntries()
    res.status(201)
    res.json(entries)
}

export function postEntries(req,res){
    const entry = req.body
    if (addEntry(entry)){
        res.status(201)
        res.json({"statusCode" : 201,
            "message" : "Entry added successfuly"
        })
    }
    res.status(400)
}