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

  function generateGoogleSearchLink(query) {
    // Use a regular expression to remove leading digits and whitespace
    const trimmedQuery = query.replace(/^\d+\.\s*/, '');
  
    const encodedQuery = encodeURIComponent(trimmedQuery);
    return `https://www.google.com/search?q=${encodedQuery}`;
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
          min={new Date().toISOString().split("T")[0]}  // Set min attribute to today's date
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

      <div className="answer-area">
        {/* Display responses with Google search links */}
        {answer && (
        <div className="answer-area">
          {/* Display responses with Google search links */}
          {answer.split("\n").map((response, index) => {
            const trimmedResponse = response.trim();

            // Only render if the response is not empty
            if (trimmedResponse) {
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
