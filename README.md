# Liberty

# Introduction

Our aim is to create a simple blog post application that allows users to write a
post with a title, a pseudonym and a body that is stored in a non-SQL database
with mongoDB and redirect to the show path of their post. They can also view all
other posts and click into each post.

# Installation & usage

- Git clone/download repository.
- Navigate to server folder.
- Open terminal and run `npm install` to install dependencies.
- Select `index.html` in `client` folder and open with Live Server.

# Change Log

1. Created folders and files for project
2. Connect database with Mongoose and defined schema
3. Completed server.js and app.js files
4. Defined routes, controllers and models files, thus completing server side
5. Created html pages for index, posts and show
6. Created and added favicon
7. Creating scripts.js for each page to fetch and post appropriate data
8. Completed styling and resonsiveness of webpage
9. Add darkmode and form validation

# Technologies

- DATABASE: MongoDB
- SERVER: node.js, nodemon, express, cors, Mongoose
- CLIENT: vanilla css and vanilla JS, dayjs CDN

# Wins & Challanges

#### Wins

- Connecting to MongoDB Atlas through Mongoose ODM library.
- Used dayjs package CDN client side to show various time strings dependant on
  age of post.

#### Challenges

- Attempting to write skeleton components in javascript - decided to abandon as
  was too complicated and was taking too much time.

# Future features

- Edit/Delete post
- More styling including animation
- Deploy website on serverless (e.g. Vercel, Azure, etc.)
