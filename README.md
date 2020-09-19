# Platform API

Server is deployed at Heroku here: [Film Finder Server](https://lab5-platform-api-jeremywasham.herokuapp.com/)

And the final version of the client is here: [Film Finder Client](http://jeremywasham-filmfinder-final.surge.sh/)

Below you can find my original description for lab 5 from when I finished it, as well as a description of the updates I made in SA8. 

For more on the frontend of this project check out that repo [here](https://github.com/dartmouth-cs52-20X/platform-client-jeremy-washam/blob/master/README.md)

## Lab 5 Overview

For this lab, I built an Express/Mongo CRUD api server for my movie review website. Like the original CS52 api, the server allows you to create a new post, delete a post by ID, update a post by ID, fetch all posts, and fetch individual posts. I also added a new field to each post - rating (from 0 to 5) - and a new function to fetch all posts sorted by rating. The posts and their data are stored in a Mongo database, hosted at Heroku.

This part didn't take as long as the frontend, but it was a lot more tedious - I had a ton of syntax errors and had a tough time figuring everything out and getting it to work properly (I referenced this a lot https://mongoosejs.com/docs/api.html). Ultimately though, it works well and I'm happy with the result, and it's cool to finally build a project that's "full stack." I'm also really happy that I was able to add the star ratings to the frontend.

## Lab 5 Limitations
* I'm not sure if sorting by rating on the server side is the best way to do that - it works, but it could be better to just return the posts and sort them on the frontend?
* I hoped to add search or comments, but I didn't get a chance.

## Attempted Extra Credit 
* As mentioned in the README for my platform client, I added a field for movie ratings (from 0 to 5)
* I also added a way to sort by rating (highest rated first) or by date added (most recent first)

## SA 8

For part 2 of the backend / SA8, I added authentication to the frontend and backend of my project. My app now lets you signup, signin, and sign out, adds the username to each new post on the frontend, and only lets signed in users create or edit posts. This was pretty time consuming and difficult but the final product works well and it felt amazing once I got everything connected and working properly.

## SA 8 Limitations

As I mentioned in my frontend repo, I wish I'd been able to add comments and search but I didn't get around to it. I also didn't get a chance to limit editing posts to the original author of the post (as of now any user can edit any post as long as they're signed in). Overall though I'm very happy with the final product, and I learned a ton while doing this project. 
