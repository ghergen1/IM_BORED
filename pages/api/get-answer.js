const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      temperature: 0,
      max_tokens: 1000
    })

    try {
      const docRef = await addDoc(collection(db, 'responses'), {
        prompt: req.body.prompt,
        response: response.data.choices[0].text,
        timestamp: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      
      res.status(200).json({ text: response.data.choices[0].text })
      return;
    }

    res.status(200).json({ text: response.data.choices[0].text })
  } else {
    res.status(200).json({ text: "Invalid prompt provided." })
  }
}
