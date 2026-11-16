```javascript
// Select the button and the display container
const fetchBtn = document.getElementById('fetchBtn');
const dataContainer = document.getElementById('api-data');

// Add click event listener to fetch API data
fetchBtn.addEventListener('click', function() {
    dataContainer.innerHTML = "<p style='text-align: center; color: #e67e22;'>Loading data...</p>";

    // Using fetch() to get data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json()) // Parse the JSON data
        .then(data => {
            // Dynamically update the DOM with fetched data
            dataContainer.innerHTML = `
                <h3 style="color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 5px;">User Profile (Fetched via API)</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>City:</strong> ${data.address.city}</p>
                <p><strong>Company:</strong> ${data.company.name}</p>
            `;
        })
        .catch(error => {
            // Handle errors if API call fails
            dataContainer.innerHTML = "<p style='color: red; text-align: center;'>Failed to load data. Please check your internet connection.</p>";
            console.error('Error fetching data:', error);
        });
});