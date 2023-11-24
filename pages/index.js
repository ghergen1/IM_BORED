import { useState, useEffect } from "react";
import TextCycler from "../components/cycler.js"

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';

export default function MyPage() {
  const initialFormData = {
    activity: "",
    date: "",
    location: "",
    people: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [collaborationMode, setCollaborationMode] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [uniqueKey, setUniqueKey] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState(0);
  const [buttonActive, setButtonActive] = useState(true);
  const [submitButtonActive, setSubmitButtonActive] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonActive(false);

    if (collaborationMode) {
      setIsLoading(true);
      
      const response = await fetch("/api/get-collab-answer", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: formData, groupId: groupId, people: people, }),
      });

      const data = await response.json();
      
      try {
          setAnswer(data.text.trim());
          setIsLoading(false);
          setSubmitButtonActive(false);
      } catch (e) {
          console.error('Error awaiting response: ', e);
          
          return;
      }

    } else {
      console.log("Not in collaboration mode");
      setIsLoading(true);

      const combinedPrompt = generateCombinedPrompt();
      
      const response = await fetch("/api/get-answer", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: combinedPrompt }),
      });

      const data = await response.json();
      
      setAnswer(data.text.trim());
      setIsLoading(false);
  }
  setButtonActive(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  }

  function handleClear() {
    setFormData({
      activity: "",
      date: "",
      location: "",
      people: "",
    });
    setAnswer("");
    setCollaborationMode(false);
    // window.location.reload();
  }

  function generateCombinedPrompt() {
    const { activity, date, location, people } = formData;

    return `Please suggest 5 brief activity ideas for ${people} people, involving some or all of these ideas: ${activity} on ${date} at ${location}.`;
  }

  function generateGoogleSearchLink(query) {
    // Remove leading digits and whitespace
    const trimmedQuery = query.replace(/^\d+\.\s*/, '');
  
    const encodedQuery = encodeURIComponent(trimmedQuery);
    return `https://www.google.com/search?q=${encodedQuery}`;
  }

  const handleToggleCollaboration = () => {
    setCollaborationMode(!collaborationMode);

    const key = generateUniqueKey();
    setGroupId(key); // Reset Group ID when enabling collaboration mode
  };

  const handleGenerateGroupID = () => {
    setCollaborationMode(true);

    const key = generateUniqueKey();
    setGroupId(key); // Reset Group ID when enabling collaboration mode
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
    handleChange(e);
  };

  function generateUniqueKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    return key;
  }

  return (
    <div className="container">
      <div className="gradient-background"></div>
      <h1>Welcome to IMBORED.TECH</h1>
      <h2>Get activity ideas using the power of AI!</h2>
      
      <TextCycler></TextCycler>
      <h2>Fill out the form below to get started: </h2>

      <form className="our-form" onSubmit={handleSubmit}>
        <div className="label-container">
          <label className="prompt-label">Topics of interest?</label>
          <span className="hint-text">(e.g. nature, music, coffee)</span>
        </div>
        <input
          className="prompt-field"
          type="text"
          name="activity"
          onChange={handleChange}
          required
          disabled={!buttonActive}
        />

        <br />

        <label className="time-label">When?</label>
        <input
          className="time-field"
          type="date"
          name="date"
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}  // Set min attribute to today's date
          value={new Date().toISOString().split("T")[0]} // Set value attribute to today's date
          required
          disabled={!buttonActive}
       />

        <br />

       
        <div className="label-container">
          <label className="location-label">Where?</label>
          <span className="hint-text">(e.g. New York City, New York)</span>
        </div>
        <input
          className="location-field"
          type="text"
          name="location"
          onChange={handleChange}
          disabled={!buttonActive}
          required
        />

        <br />

        
        <label className="people-label">How many people?</label>
        <input
          className="people-field"
          type="number"
          name="people"
          onChange={(e) => {
            handlePeopleChange(e);
          }}
          disabled={!buttonActive}
          // required
        />

        <br />

        <div className="button-container">
          <button type="button" disabled={!buttonActive} onClick={handleClear} className="clear-button">Clear</button>
          <button type="button" disabled={!buttonActive} onClick={handleToggleCollaboration} className="collaboration-toggle-button">
              {collaborationMode ? "Disable Collaborative Session" : "Enable Collaborative Session"}
          </button>
          <button disabled={!buttonActive || !submitButtonActive} className="prompt-button">Go!</button>
        </div>

      </form>

      {collaborationMode && (
        <div>
          {/* Your existing collaboration mode content */}
          <p>Collaboration Mode is active!</p>
          <button type="button" disabled={!buttonActive} onClick={handleGenerateGroupID}>Get New Group ID</button>
          <p>Group ID: {groupId}</p>
          {/* Generate and display a unique key */}
          {/* <p>Unique Key: {groupId}</p> */}
        </div>
      )}

      {collaborationMode && (
        <div>
          <label className="group-id-label">Enter Group ID: </label>
          <input
            className="group-id-field"
            type="text"
            name="group-id"
            onChange={(e) => setGroupId(e.target.value)}
            maxLength={6}
            required
            disabled={!buttonActive}
          />
        </div>
      )}

      {collaborationMode && !buttonActive && (
        <div>
          {/* Your existing collaboration mode content */}
          <p>Waiting for other users to respond.</p>
          <p>Please do not refresh the page.</p>
        </div>
      )}


      {isLoading && <div className="loading-spinner"></div>}

      <div className="answer-area">
        {answer && (
        <div className="answer-area">
          {answer.split("\n").map((response, index) => {
            const trimmedResponse = response.trim();

            // Only render if the response is not empty
            if (trimmedResponse) {
              // setButtonActive(true);
              const { activity, date, location, people } = formData;
              return (
                <div key={index}>
                  <p>{trimmedResponse}</p>
                  <a href={generateGoogleSearchLink(trimmedResponse + " " + location)} target="_blank" rel="noopener noreferrer">
                    Google Search
                  </a>
                </div>
              );
            }

            return null; // Skip rendering for empty responses
          })}
        </div>
      )}
      </div>
    </div>
  );
}
