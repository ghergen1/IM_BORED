import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, setDoc, getDoc, doc, query, where, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

function createCollaborativeResponse(activities, people, date, location) {
    return `Please suggest 5 specific activity ideas for ${people} people, involving some or all of these ideas: ${activities} on ${date} at ${location}.`
}

async function waitForGroupEntryCount(mainDocRef, desiredCount) {
    while (true) {
      // Query the entries sub-collection for the specified mainDocRef
      const entriesQuerySnapshot = await getDocs(collection(db, `collabs/${mainDocRef.id}/entries`));
      const currentCount = entriesQuerySnapshot.size;
        console.log('Current count: ', currentCount);
      if (currentCount >= desiredCount) {
        console.log('Desired count reached.');
        break;
      }
  
      // Wait for a certain period before checking again
      await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
    }
  }
  
  async function addSubcollectionDoc(subcollectionRef, data) {
    const docRef = await addDoc(subcollectionRef, data);
  
    console.log('Document written with ID: ', docRef.id);
  
    return docRef;
  } 

export default async function handler(req, res) {
if ( true
    // typeof req.body.prompt === "string" &&
    // typeof req.body.groupId === "string"
    ) {

    try {
        let mainDocRef;
        const groupEntryQuerySnapshot = await getDocs(query(collection(db, 'collabs'), where('groupId', '==', req.body.groupId)));
        const groupEntryExists = !groupEntryQuerySnapshot.empty;
        console.log('Group entry exists: ', groupEntryExists);

        if (!groupEntryExists) {
          // If the group entry doesn't exist, create it
        mainDocRef = await addDoc(collection(db, "collabs"), {
            timestamp: new Date(),
            people: req.body.people,
            groupId: req.body.groupId,
          });
  
          console.log('Group entry created with ID: ', mainDocRef.id);
        } else {
            mainDocRef = groupEntryQuerySnapshot.docs[0].ref;
            
            // Fetch the document to get the value of the 'people' field
            const mainDocSnapshot = await getDoc(mainDocRef);
            const peopleValue = mainDocSnapshot.data().people;
            console.log('People value: ', peopleValue);
            req.body.people = peopleValue;
        }


        // // Create a sub-collection for entries
        const entriesCollectionRef = collection(db, `collabs/${mainDocRef.id}/entries`);
        // // Optionally, you can add an initial entry
        const { activity, date, location, people } = req.body.formData;
        await addSubcollectionDoc(entriesCollectionRef, {
            activity: activity,
            date: date,
            location: location,
            people: people,
            timestamp: new Date(),
        });

        await waitForGroupEntryCount(mainDocRef, req.body.people);

        // // Query the entries sub-collection for the specified mainDocRef
        const entriesQuerySnapshot = await getDocs(entriesCollectionRef);
        const allEntries = entriesQuerySnapshot.docs.map(doc => doc.data());
        const concatenatedActivity = allEntries.map(entry => entry.activity).join(', ');

        const collabPrompt = createCollaborativeResponse(concatenatedActivity, people, date, location);
        // Once all sub-entries are added, proceed to create the collaborative response using OpenAI API
        const collaborativeResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: collabPrompt,
            temperature: 0,
            max_tokens: 1000
        })

    console.log('Collaborative response: ', collaborativeResponse.data.choices[0].text);

    try {
        await updateDoc(doc(db, `collabs/${mainDocRef.id}`), {
            response: collaborativeResponse.data.choices[0].text,
        });

        res.status(200).json({ text: collaborativeResponse.data.choices[0].text })
    } catch (e) {

        console.error('Error updating document: ', e);
        return;

    }

    } catch (e) {
      console.error('Error adding document: ', e);

      return;
    }

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.prompt,
        temperature: 0,
        max_tokens: 1000
      })

      

    res.status(200).json({ text: response.data.choices[0].text })
  } else {
    res.status(200).json({ text: "Invalid prompt provided." })
  }
}
