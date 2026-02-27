// Determine API base URL
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : window.location.origin;

function showLoading(show = true) {
  const loading = document.getElementById('loading');
  if (show) {
    loading.classList.add('active');
  } else {
    loading.classList.remove('active');
  }
}

function displayResponse(elementId, data, isError = false) {
  const element = document.getElementById(elementId);
  if (typeof data === 'object') {
    element.textContent = JSON.stringify(data, null, 2);
  } else {
    element.textContent = data;
  }
  element.classList.add('active');
  element.classList.toggle('error', isError);
  element.classList.toggle('success', !isError);
}

async function getWelcome() {
  showLoading(true);
  try {
    const response = await fetch(`${API_URL}/`);
    const data = await response.text();
    displayResponse('welcomeResponse', data);
  } catch (error) {
    displayResponse('welcomeResponse', `Error: ${error.message}`, true);
  } finally {
    showLoading(false);
  }
}

async function getHello() {
  showLoading(true);
  try {
    const response = await fetch(`${API_URL}/api/hello`);
    const data = await response.json();
    displayResponse('helloResponse', data);
  } catch (error) {
    displayResponse('helloResponse', `Error: ${error.message}`, true);
  } finally {
    showLoading(false);
  }
}

async function postEcho() {
  showLoading(true);
  try {
    const input = document.getElementById('echoInput').value;
    
    if (!input.trim()) {
      displayResponse('echoResponse', 'Please enter something first', true);
      showLoading(false);
      return;
    }

    let payload;
    try {
      payload = JSON.parse(input);
    } catch {
      payload = { message: input };
    }

    const response = await fetch(`${API_URL}/api/echo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    displayResponse('echoResponse', data);
  } catch (error) {
    displayResponse('echoResponse', `Error: ${error.message}`, true);
  } finally {
    showLoading(false);
  }
}

// Test connection on page load
window.addEventListener('load', () => {
  console.log(`API URL: ${API_URL}`);
});
