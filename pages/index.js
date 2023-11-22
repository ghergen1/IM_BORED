import { useState } from "react";

export default function MyPage() {
  const [formData, setFormData] = useState({
    activity: "",
    date: "",
    location: "",
    people: "",
  });

  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function generateCombinedPrompt() {
    const { activity, date, location, people } = formData;

    // Modify this template as needed
    return `Please suggest 5 brief activity ideas for ${people} people, involving some or all of these ideas: ${activity} on ${date} at ${location}.`;
  }

  return (
    <div className="container">
      <div className="gradient-background"></div>
      <h1>Welcome to IMBORED.TECH</h1>
      <h2>Get activity ideas using the power of AI!</h2>
      <h2>Fill out the form below to get started: </h2>
      
      <form className="our-form" onSubmit={handleSubmit}>
        <label className="prompt-label">What do you want to do?</label>
        <input
          className="prompt-field"
          type="text"
          name="activity"
          onChange={handleChange}
        />

        <br />

        <label className="time-label">When do you want to do it?</label>
        <input
          className="time-field"
          type="date"
          name="date"
          onChange={handleChange}
        />

        <br />

        <label className="location-label">Where do you want to do it?</label>
        <input
          className="location-field"
          type="text"
          name="location"
          onChange={handleChange}
        />

        <br />

        <label className="people-label">How many people?</label>
        <input
          className="people-field"
          type="number"
          name="people"
          onChange={handleChange}
        />

        <br />

        <button className="prompt-button">Go!</button>
      </form>

      {isLoading && <div className="loading-spinner"></div>}

      <div className="answer-area">{answer}</div>
    </div>
  );
}
