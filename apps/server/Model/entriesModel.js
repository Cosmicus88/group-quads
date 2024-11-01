import { db } from "../src/db.js";

const collection = db.collection('entries')

export async function allEntries(){
    let result = await collection.find().toArray()
    return result
}


export async function addEntry(){

}