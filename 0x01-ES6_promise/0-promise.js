function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Perform API request or any asynchronous operation here
        // For simplicity, let's resolve with a dummy response after a timeout
        setTimeout(() => {
            resolve("Dummy API response");
        }, 1000); // Simulating a delay of 1 second
    });
}

export default getResponseFromAPI;
