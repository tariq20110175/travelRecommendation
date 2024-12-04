document.addEventListener('DOMContentLoaded', (event) => {
    const resetButton = document.getElementById('reset-button');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        resultsDiv.innerHTML = '';
    });
searchInput.addEventListener("keypress",function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      //event.preventDefault();
      // Trigger the button element with a click
      searchButton.click();
    }
  });
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const results = [];
                // Search countries and cities
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        if (city.name.toLowerCase().includes(query)) {
                            results.push(city);
                        }
                    });
                });

                 if(query.toLowerCase().includes('countr')){
                   data.countries.forEach(country => {
                    country.cities.forEach(city => {
                       
                            results.push(city);
                        
                    });
                });}
                // Search temples
                data.temples.forEach(temple => {
                    if (temple.name.toLowerCase().includes(query)) {
                        results.push(temple);
                    }
                });
                if(query.toLowerCase().includes('temple')){
                    data.temples.forEach(temple => {
                   
                        results.push(temple);
                    
                });}
                // Search beaches
                data.beaches.forEach(beach => {
                    if (beach.name.toLowerCase().includes(query)) {
                        results.push(beach);
                    }
                });
                if(query.toLowerCase().includes('beach')){
                data.beaches.forEach(beach => {
                    
                        results.push(beach);
                    
               });  }
 //   data.forEach(qq => {
          //          if (qq.toLowerCase().includes(query)) {
          //              results.push(qq);
         //           }                });
                displayResults(results);
            });
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';
        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('result-item');
                resultElement.innerHTML = `
                    <h3>${result.name}</h3>
                    <img src="${result.imageUrl}" alt="${result.name}">
                    <p>${result.description}</p>
                `;
                resultsDiv.appendChild(resultElement);
            });
        }
    }
});
