
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
