﻿<div align="center">
<img src="https://raw.githubusercontent.com/folkuni-f22-fullstack/CrazyMonkeys/dev/src/assets/footerpagepic/FF-red.png" alt="Funky Fusion" />
</div>
<h1 align="center">Funky Fusion, a school project created by <i>Crazy Monkeys</i></h1>

<h2 align="center">Introduction</h2>

The group, *Crazy Monkeys*, consists of the following students; Malin, Mustafa, Ali, Victor and Abbe.

Our teacher assigned us a project to create a fullstack web app for a hypothetical restaurant. The web app needs to be responsive from sizes of tiny mobile screens to bigger screens as computer monitors. The app should cater to the needs of customers, employees and chefs. We decided to design our app for a fusion restaurant, because we wanted to showcase our creativity and diversity.

The costumer role can browse the menu, search for information about the fake restaurant, and also do food orders that are sent to the employees, and after that to the chef. The costumer can write comments to the employees. When the order has come to the employee, the customer can edit the order to their liking, if they change their mind. When the order has come to the chef, the order can't be undone.  The employee role can see food order requests that the costumer has made. The employee can make messages to the chef when sending the order further to the chef.

Our project followed the scrum process, as instructed by our teacher, and we organized our tasks using *Trello* as a kanban board. We had daily *stand-ups*, *sprint reviews* and *sprint retrospective* and much communication. Every member of the group got the chance of being a *scrum master*.


<h2 align="center">Project Journey </h2>

In addition to the functional requirements, we applied the UX/UI design principles such as *Emphasize, Ideate, Prototype* and others. These principles helped us to understand the needs and preferences of the users, generate creative solutions, and test our prototypes with feedback. To guide our design process, we developed various *personas* that represent our target users and their needs.

During the ideation phase, we applied the *brainstorming* technique to generate ideas for two different user groups of the app: *customers* and *employees*. We didn't have *chef* role during this time period, because it was something the teacher suggested later on.

One of the methods we applied for user experience design was the crazy 8 technique. This is a brainstorming exercise that helps us generate diverse and creative ideas in a short time. We divided a sheet of paper into eight sections and sketched one idea per section for eight minutes.

Our project involved creating low-fidelity sketches with *figma* to explore different design concepts. This was a useful way to communicate our vision and get feedback. Next, we developed high-fidelity prototypes that matched the specifications and requirements of the project. Based on the input from our testers, we revised our hifi design and produced a second version. This version incorporates the suggestions and feedback we received from the first round of testing and aims to improve the user experience and satisfaction.

<h2 align="center">Tech stack</h2>

Our frontend is based on *react*, a popular library for building user interfaces. We also used *react-router-dom* for navigation, and other dependencies such as *react-scroll*, *vite* and *framer-motion*. We started our project using *TypeScript*, to take advantage of its features such as static typing and interfaces. However, we encountered many errors and compatibility issues when we were trying to upload the repo to *render*. As a result, we decided to stick with JavaScript for the rest of the development process.

We built our backend using *express*, a web framework for **Node.js**, and *mongoDB atlas*, a cloud database service. To enhance the security and performance of our backend, we also used *helmet*, a middleware that sets various HTTP headers, *morgan*, a logger that records the requests and responses, *mongoose*, an object data modeling library that simplifies working with mongoDB, and *nodemon*, a tool that automatically restarts the server when changes are detected. The backend is a *RESTful API*.

All of these packages are to be found at [npm](https://www.npmjs.com/) ❤️

<h2 align="center">How to start</h2>
<h3 align="center">On render 🚀</h3>

You can start messing around visually with this project live on *render*!
 - Visit this [render link](https://funkyfusion.onrender.com/).
 - Give it some time to load, this web service is using a free subscription.
 
<h3 align="center">Locally 💻</h3>

To start the project locally you need to clone this repo to your host machine.

 - [ ] Please start your favorite terminal (git preferred) and with node installed.
 - [ ] Write this in the terminal:  `git clone https://github.com/folkuni-f22-fullstack/CrazyMonkeys.git`
 - [ ] Open the newly created folder with the terminal; `cd CrazyMonkeys`
 - [ ] After that you write `npm i` to install the required packages
 - [ ] When in the folder, you write `npm run dev` to start the frontend.
 - [ ] Last you need to do is navigating to the folder called *api* and open a terminal there and write `npm run start` to start express.
 - [ ] When done with all the steps above, you can navigate to `http://localhost:5173/` in your preferred browser

<h2 align="center">API documentation</h2>

You don't need to use the frontend to do orders, send costumer messages to employee, employee message to chef, thanks to our own **API**. That means you can do everything at the backend with *insomnia* or *postman*. When we tested our api, we used insomnia.

<h3 align="center">Data Modeling</h3>
<h4>Orders<h4>

| Property     | Data type | Short description                                |
|--------------|-----------|------------------------------------------------------|
| _id              | String    | Unique identifier from mongoDB                   |
| orderId          | Number    | Unique identifier                                |
| status           | String    | Tells if order is being worked on or is finished |
| customerName     | String    | The customer's name of the order                 |
| adress           | String    | The customer's home address                      |
| floor            | String    | What floor the customer lives on                 |
| portCode         | String    | The apartment building that the customer lives in|
| mail             | String    | The customer's e-mail address                    |
| mobile           | String    | The customer's phone number                      |
| items            | Array     | All the food articles in the order               |
| commentsEmployee | Array     | Comments to chef from employee                   |

<h4>Users</h4>

| Property | Data type | Short description                                  |
|----------|-----------|----------------------------------------------------|
| _id      | String    | Unique identifier from mongoDB                     |
| status   | String    | Tells what kind of user there is, chef or employee |
| username | String    | The name for the specific user                     |
| password | String    | The password for the specific user                 |

<h4>Menus</h4>

| Property | Data type | Short description                       |
|----------|-----------|-----------------------------------------|
| _id      | String    | Unique identifier from mongoDB          |
| itemId   | Number    | Unique identifier                       |
| itemType | String    | What kind of article it is, drink, dish |
| name     | String    | The name of a specific article          |
| price    | Number    | The price of a specific article         |
| desc     | String    | A description of a specific article     |
| img      | String    | Link to a image for the article         |

<h3 align="center">Endpoints</h3>
<h4>api/auth</h4>

| Method | URL       | Params | Headers | Body                       | Response                                        |
|--------|-----------|--------|---------|----------------------------|-------------------------------------------------|
| GET    | /         | .      | .       | .                          | Get all the users                               |
| POST   | /login    | .      | .       | username, password         | Get identifier, token and what role the user is |
| POST   | /register | .      | .       | status, username, password | Get the created new user                        |

<h4>api/menu</h4>

| Method | URL | Params | Headers | Body                                     | Response                                       |
|--------|-----|--------|---------|------------------------------------------|------------------------------------------------|
| GET    | /   | .      | .       | .                                        | Get all the food articles                      |
| POST   | /   | .      | .       | itemId, name, price, desc, itemType, img | Get the newly created article                  |
| PUT    | /   | id   | .       | itemId, name, price, desc, itemType, img | Changes the selected article with new contents |
| DEL    | /   | id   | .       | .                                        | Deletes the selected article                   |

<h4>api/orders</h4>

Note that `id`  is _id from mongoDB!

| Method | URL              | Params | Query  | Headers | Body                                                                                  | Response                    |
|--------|------------------|--------|--------|---------|---------------------------------------------------------------------------------------|-----------------------------|
| GET    | /                | .      | .      | .       | .                                                                                     | Get all the orders          |
| POST   | /                | .      | .      | .       | orderId, customerName, adress, floor, portCode, mail, mobile, items, comments, status | Get the newly created order |
| POST   | /:id/addMenuItem | id     | .      | .       | menuItem, quantity                                                                    | Get the whole order back    |
| PUT    | /:id             | id     | .      | .       | orderId, customerName, adress, floor, portCode, mail, mobile, items, comments, status | Get status message OK       |
| DEL    | /:id             | id     | option | .       | menuItemId                                                                            | Get status message OK       |
| DEL    | /:id             | id     | option | .       | .                                                                                     | Get status message OK       |




Amazing! Thank you for reading this README! ❤️
