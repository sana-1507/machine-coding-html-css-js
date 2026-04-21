
// 🌐 Question 3: Function Generator for API Calls (Pseudo Code)

// Write a function generator that:
//  • Accepts an array of API configs (url, method, headers)
//  • Executes API calls concurrently
//  • Handles errors like:
//  • 401 → Unauthorized
//  • 500 → Server Error

function generateApiCalls(apiConfigs = [{url: '', method: '', headers: {}}]) {
    if(!Array.isArray(apiConfigs)) {
        return [];
    }
    const promises =  apiConfigs.map(config => {
        return fetch(config.url, {method: config.method, headers: config.headers   }).
        then(response => {
            if(response.status === 401) {
                throw new Error('Unauthorized');
            } else if(response.status === 500) {
                throw new Error('Server Error');
            }

            return response.json();
    }).catch(error => {
        console.error(`Error fetching ${config.url}:`, error.message);

    });
})

return Promise.all(promises);

}