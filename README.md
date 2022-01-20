# ShopifyChallenge
This is a CRUD application for Shopify BAckend Challenge. 

#Functionality
User can:
1. Add an item to the inventory.
2. View the list of items in the inventory.
3. Edit an item in the inventory.
4. Delete an item from the inventory.
5. Export data from database in CSV format.

# Tech-Stack
1. Front-end :  React.js
2. Backend : Node.js, Express.js
3. Storage: MongoDB

# Steps to start the server
To run this application follow the below steps:
1. Clone the repository
2. Go to the node website "https://nodejs.org/en/download/" and download instaaller specific to your machine if you don't have it installed already.
3. Open the cloned source code in any code editor of your choice for example I used Visual Studio Code.
4. Run "npm install" in the terminal in both frontend and backend folder destination. The npm install command downloads all the dependencies for frontend and backend which are listed in package.json file.
   The installation should be done in both backend and frontend folder as both have seperate package.json file.
5. Go to /back-end destination in your teminal and run the command "npm run dev". This will start the backend as well as the frontend server which has been configured in package.json file in back-end folder.

# Routing
Get https://localhost:8080/feed/posts
```
This returns all the items in the inventory to the user.
```
Post https://localhost:8080/feed/post
```
This sets the data obtained from the front end and creates a new item in the repository.
```
Put https://localhost:8080/feed/editpost/:postId
```
This takes postid as a variable passed from the item data in the fromt end that user clicks Edit Item for and saves the updated values in the database.
```
Delete https://localhost:8080/feed/deletepost/:postId
```
This takes postid as a variable passed from the item data in the fromt end that user clicks Delete Item for and deletes that particular item from the database.
```
Get https://localhost:8080/feed/getcsv
```
This is invoked on the click of a button from the frontend and what this does is take all the items in the database and download them in  CSV format in the /back-end folder.
```
Get https://localhost:8080/feed/fetchpost/:postId
```
This is an extra API that retrieves only particular value from database that matches the postId.
P.S. This was not a part of tha challenge it was something I tried out hence no backend is configured. 
If you're curious about using it you may download postman tool from here "https://www.postman.com/downloads/" or use the free web-version and chack by sending a get request to the backend server.
```


# Download destination
For the CSV file download feature, the file is downloaded and updtaed everytime a user clicks on the "Click to download CSV file" in the back-end flder.
