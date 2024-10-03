const Urls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];

function fetchDataFromAPI(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  function fetchMultipleAPIs(Urls) {
    const promises = Urls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
  }
 
  
  fetchMultipleAPIs(Urls)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  