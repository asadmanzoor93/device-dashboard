<img src="https://assets.relayr.io/images/relayr/relayr_logo_transparent.png" alt="relayr-logo" width="300"/>

# Relayr Frontend Challenge

![device-assignment](https://user-images.githubusercontent.com/17013371/66345666-e9829d80-e969-11e9-88f2-9732c9dbf4a5.png)

## Our Expectations

This code challenge is based on the actual work we do here at Relayr. It's designed to see how you design and code a simple app based on real-world requirements.

There's no time limit here, though we'd like to receive your solution within a week if possible. We expect a basic solution to take a couple of hours, but you're welcome to work on it longer if you'd like. 

What we're looking for: clean, concise, well-organized, and modern code that meets the acceptance criteria below. 

You can add some basic styles via CSS, but we won't be judging based on how beautiful or advanced your UI is. A simple, straightforward, functional interface is just fine. 

## Acceptance Criteria

You are building a React-based frontend interface for displaying data from and interacting with an IoT device. Once you're finished with the basic app, a user should be able to do the following:

* **Retrieve the device's state** from the backend.
* **Show each of the device's readings**: name, unit, value, timestamp, and active status.
* **Show a counter** showing how many readings are active and how many are inactive.
* **Implement a search input** that filters visible readings by name.
* A user should also be able to **toggle the active status of each reading** by making the proper requests to the backend. After successfully changing the status on the backend, the UI should display the updated state of the active counter, or handle any errors appropriately. 
 
Please the `API_DOCS.MD` file for information on the API endpoints available.

## Extra Credit

Finishing the above acceptance criteria is enough to submit the challenge, and we don't expect you to do any more. You're welcome to add more functionality if you want to, but keep in mind that a solid solution that fulfills the basic acceptance criteria is much better than a larger and more complicated solution with extra features. Instead of spending your time adding many extra features and libraries we would prefer you spent it on the basic code and functionality required to fulfill the acceptance criteria. 

It's also fine to submit the challenge without any test coverage, but you can write some basic tests if you'd like. 

## Getting started

To run the server locally: ```npm run start```

## Prerequisites

To install dependencies: ```npm install```

## Notes
* We've set up a basic webpack configuration to serve files. Your code should hot reload, as should any styles you put in the `styles.css` file.
* PLEASE append your name to the project folder. E.g. device-dashboard-luke-skywalker
