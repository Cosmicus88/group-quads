import { addEntry, allEntries } from "../Model/entriesModel.js";

export async function getEntries(req, res) {
  console.log("controller on to get entries");
  const entries = await allEntries();
  res.status(201).json(entries);
}

export function postEntries(req, res) {
  const entry = req.body;
  if (addEntry(entry)) {
    res.status(201);
    res.json({ statusCode: 201, message: "Entry added successfuly" });
  } else {
    res.status(400);
  }
}
