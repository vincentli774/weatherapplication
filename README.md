Quick start guide in terminal:
npm init -y
npm install express
npm install cors
npm install body-parser

For front-end: Open index.html with live server
For back-end: Run node app.js in terminal

Test cases: 
Testing top "Get weather" functionality: Insert city in input field just above button and click on button "Get weather".
This will either show the current weather for the city by retrieving temperature, description, windspeed, and humidity in the appropriate text fields, or, if it does not find the city, it will show the alert "city not found".
Testing "Add city" functionality: Insert city in input field just above "Add city" button and press the button "Add city".
Do this for as many cities as you like. 
This will send the cities to the backend, to retrieve them click on button "Get favorite cities". 
This will show a list of the cities that were posted to the backend with a "Get weather" button next to each of them. 
Click on button "Get weather" below city name to retrieve weather details for the city.
This will retrieve temperature, description, windspeed, and humidity for the given city, or, if the city is not found, it will display the message "city name not found".

