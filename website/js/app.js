// Global Variables
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?appid=';
const apiKey = '541edf4d85a8f53fc2d7080a41292ff2&units=imperial&zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear() + ' @' + d.getHours() + ':' + d.getMinutes();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/**
 * Function called by event listener 
 * @param {event} e - The triggering event.
 */
function performAction(e){
    const newCountry = document.getElementById('country').value;
    const newZip =  document.getElementById('zip').value;
    const newFeel =  document.getElementById('feelings').value;
    const newLocation = newZip + ',' + newCountry;

    getWeatherData(baseURL, newLocation, apiKey)
    .then(function(data){
        //console.log(data);
        postData('/addJournal',{date:newDate, temp:data.main.temp, feel:newFeel, location:data.name, desc:data.weather[0].main, icon:data.weather[0].icon});
        retrieveData();
    });
}

/**
 * Function to GET Web API Data
 * @param {string} baseURL  OpenWeatherMap API endpoint
 * @param {string} zip      Zip code and country code separated by comma.
 * @param {string} key      OpenWeatherMap API key with the units and zip parameters.
 * @returns {object} data   Data from OpenWeatherMap.
 */
const getWeatherData = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL + key + zip);
    try {
        const data = await res.json();
        //console.log(data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
}

/**
 * Function to POST data
 * @param {string} url      Post data route defined on the server.
 * @param {object} data     Data object posting to the specified route.
 * @returns {object} newData Data returned after posted data.
 */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    }
}

/**
 * Function to GET Project Data and update UI
 */
const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json();
        //console.log(allData);
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ '°F';
        document.getElementById('desc').innerHTML = allData.desc;
        document.getElementById('content').innerHTML = allData.feel;
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('location').innerHTML = allData.location;
        document.getElementById('icon').innerHTML = '<img id="wicon" src="https://openweathermap.org/img/wn/'+allData.icon+'@2x.png" alt="Weather icon">';
    } catch(error) {
      console.log('error', error);
      // appropriately handle the error
    }
}