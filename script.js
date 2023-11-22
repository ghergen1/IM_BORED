// import axios from 'axios';

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Function to add a topic to the list
var numTopics = 0;

function addTopic() {
    const topicInput = document.getElementById('topic');
    const topicList = document.getElementById('topicList');

    if (topicInput.value.trim() !== '') {
        if (numTopics >= 5) {
            alert('You have reached the maximum number of topics!');
            return;

        } else {
            numTopics ++;
            const li = document.createElement('li');
            li.textContent = topicInput.value;
            topicList.appendChild(li);

            // Clear the input field after adding a topic
            topicInput.value = '';
        }
    }
}

function clearForm() {
    const topicList = document.getElementById('topicList');

    topicList.innerHTML = '';

    numTopics = 0;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Function to generate text using OpenAI API
async function generateText(prompt) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 100,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        if (response.status === 200) {
            const generatedText = response.data.choices[0].text;
            console.log(generatedText);
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage
generateText('Tell me a joke about cats.');
