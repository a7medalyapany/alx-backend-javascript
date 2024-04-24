function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.5) {
                // Simulating a successful response
                resolve({
                    status: 200,
                    body: "photo-profile-1"
                });
            } else {
                // Simulating an error response
                reject(new Error("API request failed"));
            }
        }, 1000); // Simulating a delay of 1 second
    });
}

export default getResponseFromAPI;
