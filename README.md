### **[SIAA Weather App Link](https://facg5.github.io/SSIA-API-WeatherApp/public/index.html)**

# **SSIA Weather App**
## **Why**

To learn how to use several APIs and use the result to update DOM, and test it using TDD.

## **What**

Simple Weather web app . The App query from two APIs The first for weather data by city name and the second for forcast the cilmate for 5 days and use the results to update the DOM,**city name and country code divided by comma, use ISO 3166 country codes.**
___

## **User Journey**
* As a user I want to know the weather of city: **enter city name,country** (ex: *Gaza,ps*) I need to know its weather into a input text so that I will know the weather of it,view the weather by **temperature and description** (ex: *clear sky*),also I can **forcast** the climate for *5 days*.
* As a user I can use it on mobile, tablet or desktop.
___

## **Architecture**

* public
  * css
    * styles.css
  * img
  * js
    * dom.js
    * logic.js
  * test
    * test.js
  * index.html
* README
* .gitignore 
* package-lock.json
* package-.json
---------
## **How to use it**

Run this project on your Local Machine

1. Clone the repo:

```sh
git clone https://github.com/FACG5/SSIA-API-WeatherApp.git 
```
```sh
cd SSIA-API-WeatherApp
```
2. Get our ```config.js``` file that contain our **API Key** form our **Gitter Channel or CF.**

3. Install the npm devDependencies:

```sh
npm install
```

4. Run the Tests
```sh
npm test
```
5. Open ```index.html``` into your browser.

6. Enjoy your time :relaxed: . 

---

## **Requirements of this week's projects:**
- [x] Your app queries at least two APIs using the XMLHttpRequest method.
- [x] Your app features some dynamic content
A clearly defined user journey, documented in your readme.

- [x] A well-considered architecture for your app - think back to the workshops from the beginning of this week. Try to modularise your code, or break it down into separate files.
- [x] Document any key decisions about how you structure your code in your readme!
- [x] Code: break your JavaScript down into small functions with a clear input and output; this will make it easy to write tests
- [x] Tests: you must write tests!
- [x] Design: aim for a responsive, mobile-first design
- [x] Accessibility: same as always, we'll be running your code through accessibility checkers
- [x] Take appropriate measures when it comes to concealing private information (i.e. your API key!)
