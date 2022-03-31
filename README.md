# foam-challenge
### Table of Contents
1. [General Info](#General-Info)
2. [Demo](#Demo)
3. [Tech Stack](#Installation-and-Setup)
4. [Installation](#Installation-and-Setup)
5. [Contributors](#Contributors)
6. [File Structure](#File-Structure)

### General Info
Culture Biosciences SWE foam-challenge.
This app allows users to view images from reactors, and tag them as foaming or not.
User Stories:
- As a user, I need to be able to view images from the reactor run.
- As a user, while viewing images I need the ability to mark them as foaming or not.
- As a user, I want my decisions to be stored for the next time I use the app.
- As a user, I need to be able to filter by foaming, non-foaming and unclassified images.

### Demo
![foam-challenge](https://user-images.githubusercontent.com/75865828/160982203-5c0bcefa-5f72-43ed-b9a1-2276b4cd8d5c.gif)

### Tech Stack
- Front End: Javascrip, React, Axios
- Back End: Node.js, Express, Cors, Nodemon
- Database: MongoDB/ Mongoose

### Installation and Setup
##### Back End
1. Clone down the repo `$ git clone https://github.com/RehReis/foam-challenge.git`
2. install dependencies `$ npm i`
3. seed database by running the following in your terminal:
  `$ mongoimport --jsonArray --db=foamChallenge --collection=classifications --file=database/foam-seed.json`
4. start server by running `$ npm run start-server`
#### Client Side
1. cd into client directory `$ cd client`
2. install dependencies `$ npm i`
3. start webpack by running `$ npm start`


### Contributors
- [Regina Grogan](https://github.com/RehReis)

### File Structure
├── client
    ├── public
      ├── index.html
    ├── src
      ├── components
          ├── Image.jsx
          ├── Images.jsx
      ├── style
          ├── App.css
          ├── index.css
      ├── App.js
      ├── index.js
├── database
    ├── controllers.js
    ├── foam-seed.json
    ├── index.js
├── server
    ├── index.js