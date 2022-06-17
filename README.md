# Wish You Were Here
![App Icon](https://user-images.githubusercontent.com/82775910/172031537-1dbab416-40d6-425c-b951-b4124215982f.png)

#### Deployable
- [Deploy Link](https://wywh-ui.herokuapp.com/)

#### Getting Started
1. Clone the repo from [github](https://github.com/elleshadow/wish-you-were-here-client/tree/main/client)

2. Cd into the directory from your terminal and install the project dependencies:
- Run `npm install` or `npm i` in the terminal

3. To see the web app:
- Run `npm start` in the terminal
- Press `ctrl/cmd + c` to exit

4. Copy the local host address from your terminal and add to your web browser to see the web app

### Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Instructions on Use](#instructions-on-use)
- [Demo of Features](#demo-of-features)
- [Testing the app](#testing-the-app)
- [Challenges and Wins](#challenges-and-wins)
- [Project Overview and Goals](#project-overview-and-goals)
- [Future Additions](#future-additions)

#### About the Project
**Wish You Were Here** was a project inspired by the limitations of remote learning and the nostalgia of a class photo.

This was part of Turing School of Software & Design module3 group project where we were encouraged to implement new technologies that we learned independently. This was meant to demonstrate our ability to self-teach new technologies in a short amount of time. It also showcases our ability to ask questions and struggle through new problems with other developers.

#### Contributors
 - [Zach Saile](https://github.com/zwsaile)
 - [Alex Bumpus](https://github.com/Abumpus1)
 - [Eli Davidson](https://github.com/elleshadow)
 - [Kal Al-Rajhi](https://github.com/kal-aalrajhi)

#### Technologies Used
- React
- Javascript
- HTML
- CSS
- React Router
- Cypress 
- Express
- Fabric-js
- Socket.io
- Canvas API
- [RemoveBG Api](https://www.remove.bg/)

#### Instructions on Use
**_Login_**
The user is initially asked to login with a name, preferred pronouns, and email address. All but the name are optional.
![login](https://user-images.githubusercontent.com/97044701/172260425-8e98fb4f-c112-49d0-b3f4-fefb523fe7d3.gif)

**_Chat_**
A live chat is available for users to see who's on and interact with each other.
![chat_room](https://user-images.githubusercontent.com/97044701/172260441-f82f8a85-35e7-41d2-a3fa-92c324350a91.gif)

**_Insert Photo and Drag, Drop, and Scale Photo**
Users are encouraged to take a photo by pressing the blue cheese button. Once pressed, the gallary will be immedietly populated with the photo. Multiple photos can be stored in the gallery. If a user is satisfied with a photo they've taken, they can insert it into the group photo stage. Once the photo is in the group photo stage, users can drag, drop, and scale their images - live with other users.
![use_photo](https://user-images.githubusercontent.com/97044701/172260919-1196e24b-2531-4296-957f-8bb6b6f0e858.gif)

**_Delete Photo_**
If a user doesn't like their photo, they can delete it from the gallery.
![delete_photo](https://user-images.githubusercontent.com/97044701/172260766-1c62ea9c-f84e-4f71-8155-7990ae0d8103.gif)

**_Download Group Photo_**
Finally, if a user is satified with the group photo they can download it for keepsake.
![download_photo](https://user-images.githubusercontent.com/97044701/172261320-6d927ec4-1b3e-4777-aab8-ec122513d08d.gif)

**_Logout_**
Users can logout and login as a different user if they choose.
![logout](https://user-images.githubusercontent.com/97044701/172260569-482bb5fb-c5c1-49b9-938e-007822660bef.gif)


#### Testing the App
`End-to-end` testing was implimented to test the application by using Cypress. `Stubbing` and `intercepting` was used to control the network response. The app was fully tested based on the user story from start to finish. 

#### Challenges and Wins

##### Challenges
- Getting a live photo to render via canvas API.
- Overcoming imposter syndrome when it comes to learning new technologies.
- Finding documentation on the fabric.js react package

##### Wins
- The first time we got an image to appear on screen
- Getting the chat function to work between clients
- Implementing a divide & conquer approach to complete features asynchronously
- Take a more modern approach to React by using hooks

#### Project Overview And Goals
- Use OOP to drive the design of the application and the code
- Gain further competency with React 
- Build a robust test suite using Cypress for E2E testing
- Implement asynchronous JavaScript
- Learn a new technology: socket.io

#### Future Additions
- Convert the app into a progressive web app (PWA)
- Multiplatform responsive design
