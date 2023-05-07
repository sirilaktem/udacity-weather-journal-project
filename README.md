# Weather Journal App

This project is a part of Front End Developer Nanodegree program by Bertelsmann Next Generation Tech Booster and Udacity. This is a simple application that allows users to create a journal and display it with the current weather data such as temperature, weather icon, and description.

# Screenshot

![Home](https://raw.githubusercontent.com/sirilaktem/udacity-weather-journal-project/master/website/images/screenshot0.jpg)
![Output](https://raw.githubusercontent.com/sirilaktem/udacity-weather-journal-project/master/website/images/screenshot.jpg)

# Table of Contents

* [Weather Journal App](#weather-journal-app)
* [Screenshot](#screenshot)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)

# Installation
[(Back to top)](#table-of-contents)
This application can run on Node.js environment which you can visit [Node.js Download Page](https://nodejs.org/en/download/) to install it or follow instructions on [this article](https://www.mend.io/free-developer-tools/blog/how-to-update-node-js-to-latest-version/) to update to a newer version.

After that please [download](https://github.com/sirilaktem/udacity-weather-journal-project/archive/refs/heads/master.zip) or clone this project to your local computer.

Then open the terminal, navigate to project directory and run these commands:
```bash
  npm install body-parser
  npm install cors
  npm install express
```

When everything is set, start the server by running this commend:
```bash
  node server.js
```

Then please access the application through [http://localhost:8000](http://localhost:8000)

# Usage
[(Back to top)](#table-of-contents)
User can add the journal by selecting a country from the Country dropdown list then specify the zip code within that country. After that input the information about user's feeling in the text area and click the Generate button.

Once the form is completely submitted, the weather information of that location the user specified with their feeling information will be displayed on the "Most Recent Entry" area.

# Development
[(Back to top)](#table-of-contents)
The starter code of this project is provided [here](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app), but I decided to develop this project from scratch using the free design from [Untitled UI](https://www.untitledui.com/).

This project is built using third-party resources as follow:

-   Quicksand and Reenie Beanie fonts from [Google Fonts](https://fonts.google.com/)
-   Weather API by [OpenWeather](https://openweathermap.org/)