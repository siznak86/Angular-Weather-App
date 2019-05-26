## Project Requirements:
Complete the project to display they current weather for a city and state.  The city and state will be input from form inputs, passed to a Geolocation and Weather API, with the resulting data displayed on the page.

## Tasks:
1.	 Create a MapQuest developer account 
        * Signup for a free MapQuest Developer Account
        * When you sign up, you should be provided an API Key. Once you have the key, replace the placeholder (MAPQUEST_API_KEY) at the top of the geolocation.service.ts file:

        ```// API Key - Change to your API_KEYconst GEO_API_KEY = "MAPQUEST_API_KEY";```
        * You can manage your MapQuest API keys on their site.
        * You will need to add the necessary code to the geolocation.service.ts file to acquire data from MapQuests's API. However, a skeleton is provided, and there are comments to help you. Look back throughout the lessons if you need help. 
        * The other service — WeatherService — has been implemented for you. You can also refer to that source code for ideas or help.
        * To get details on how to use the API, go to MapQuests's Geocoding API documentation.

2.	Create an OpenWeatherMap account 
    * Signup for a free account at OpenWeatherMap
    * When you sign up, you should be provided an API Key. Once you have the key, replace the placeholder (OPEN_WEATHER_MAP_API_KEY) at the top of the weather.service.ts file:

    ``` // API Key - Change to your API_KEY```

    ```const WEATHER_API_KEY = "OPEN_WEATHER_MAP_API_KEY";```
    * You can manage your OpenWeatherMap API keys on their site.

3.	Complete the geolocation.service.ts  file & don’t forget to add your API key
4.	Add your API key to the weather.service.ts  file
5.	Create a form on app.component.html / app.component.ts to capture the city and state, and submit the captured information to the geolocation service.
6.	Capture the result from the geolocation service, and pass the result to the weather service
7.	Display the result from the weather service onto the page
8.	Enter in your City and State and make sure the weather displays accurately

## Data Flow:

User Input -> Geolocation service -> weather service -> page


Feel free to add any extra styling! Get your creative juices flowing 


## **DON’T FORGET TO RUN NPM INSTALL!!**	
"# Angular-Weather-App" 
