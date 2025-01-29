# Wish You Were Here
![App Icon](https://user-images.githubusercontent.com/82775910/172031537-1dbab416-40d6-425c-b951-b4124215982f.png)

## Deployable
- [Deploy Link](https://wywh-ui.herokuapp.com/)

## Getting Started
To get started with this app:

1. Clone the repo from [GitHub](https://github.com/elleshadow/wish-you-were-here-client/tree/main/client).
2. Cd into the directory from your terminal and install the project dependencies with `npm install`.
3. To view the web app, run `npm start` in the terminal.
4. Copy the local host address from your terminal into your web browser to view the app.

## Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Instructions on Use](#instructions-on-use)
- [Application in Action](#application-in-action)
- [Testing the App](#testing-the-app)
- [Challenges and Wins](#challenges-and-wins)
- [Project Overview and Goals](#project-overview-and-goals)
- [Future Additions](#future-additions)

## About the Project
**Wish You Were Here** allows users to create a collective virtual photo reminiscent of a class photo, designed during a time when remote interaction was prevalent.

## Contributors
- [Zach Saile](https://github.com/zwsaile)
- [Alex Bumpus](https://github.com/Abumpus1)
- [Eli Davidson](https://github.com/elleshadow)
- [Kal Al-Rajhi](https://github.com/kal-aalrajhi)

## Technologies Used

### Languages
- JavaScript

### Frontend
- React
  - react-dom
  - react-router-dom
- Fabric.js
  - fabric
  - fabricjs-react

### Backend
- Express.js

### Realtime Communication
- socket.io
- socket.io-client

### HTTP Clients
- axios
- form-data

### Utilities
- uuidv4

### Middleware
- cors

### Testing
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event
- Cypress
- Web Vitals

### Build Tools
- react-scripts

### Others
- ESLint
- Browserslist
- Node.js (v17.2.0)


## Instructions on Use
Users begin by logging in and can then interact through a live chat, take and edit photos, and participate in creating a group photo.

## Application in Action
**Login**
![login](https://user-images.githubusercontent.com/97044701/172260425-8e98fb4f-c112-49d0-b3f4-fefb523fe7d3.gif)

**Live Chat**
![chat_room](https://user-images.githubusercontent.com/97044701/172260441-f82f8a85-35e7-41d2-a3fa-92c324350a91.gif)

**Photo Interaction**
![use_photo](https://user-images.githubusercontent.com/97044701/172260919-1196e24b-2531-4296-957f-8bb6b6f0e858.gif)

**Delete Photo**
![delete_photo](https://user-images.githubusercontent.com/97044701/172260766-1c62ea9c-f84e-4f71-8155-7990ae0d8103.gif)

**Download Group Photo**
![download_photo](https://user-images.githubusercontent.com/97044701/172261320-6d927ec4-1b3e-4777-aab8-ec122513d08d.gif)

**Logout**
![logout](https://user-images.githubusercontent.com/97044701/172260569-482bb5fb-c5c1-49b9-938e-007822660bef.gif)

## Testing the App
Cypress was used for `end-to-end` testing, including `stubbing` and `intercepting` to control the network response.

## Challenges and Wins
### Challenges
- Implementing live photo rendering with Canvas API.
- Learning new technologies with minimal documentation available.

### Wins
- Real-time chat functionality.
- Collaborative photo editing with live updates.

## Project Overview and Goals
- Embrace object-oriented programming and React component structure.
- Develop robust Cypress tests for end-to-end coverage.
- Practice asynchronous JavaScript and integrate new technologies such as socket.io.

## Future Additions
- Transition to a Progressive Web App for offline use.
- Enhance responsive design across various devices.
