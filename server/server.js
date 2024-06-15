
// this line imports express.js framework module
const express = require('express');
const db = require('./utils/db');
// this app object is used to configure the application routes and behavior, In short, creating an express app
const app = express();

// express.json() is a middleware provided by Express to parse JSON request bodies to javascript object
app.use(express.json());

// Import the router from ./router/auth-router
const router = require('./router/auth-router');
const connectDB = require('./utils/db');

// this means that when the user goes to the address: 'url/', it will respond with the given output
app.get('/',(req, res)=>{
    res.status(200).send("This is local host with port 3000")
})

// Mount the router on /api/auth: Refer documentation: Documentation.md [Mounting the Router on `/api/auth` Path]
app.use('/api/auth', router);

// This line defines the port number on which the server will listen for incoming requests. Here, the server will listen on port 3000.
const port = 3000;

connectDB().then(()=>{

    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`)
    })
})
// Start the server and listen on the specified port



















// -----------------------------------------------------DOCUMENTATION---------------------------------------------------------
/* 
1) steps to create express server :
    import express using : const express = require('express')
    const app = express()


2) Mounting the router on /api/auth path:
    When you mount the router on /api/auth, the routes defined in the router get prefixed with /api/auth. So:
    for eg:
        A request to http://localhost:3000/api/auth/ will match the / route in the router and respond with "Auth home".
        A request to http://localhost:3000/api/auth/login will match the /login route in the router and respond with "Login page".
        A request to http://localhost:3000/api/auth/register will match the /register route in the router and respond with "Register page".

    More details on mounting the router on given path:
        Think of the base path as an address, and the routes in the router as specific rooms within a building at that address. When you mount the router, you specify the address, and all routes within the router are accessed through that address:
            Address (Mounting Path): /api/auth
            Rooms (Routes):
            / -> /api/auth/
            /login -> /api/auth/login
            /register -> /api/auth/register
    Summary:
        Mounting the router on a path organizes your routes under a common base URL. It helps structure your application and makes it clear which routes belong to which parts of your application. In this example, all authentication-related routes are grouped under /api/auth


3) New documentation starts here:
*/














// deleted code here:

// :-------------------------------------------before adding the router :------------------------------------------------------------LECTURE - 4 (EXPRESS ROUTERS)
// When a client makes a GET request to the root path of your server, the callback function (req, res)is executed.req is an object representing the HTTP request,
// and res` is an object representing the HTTP response. 
// In this handler, the server responds with the string "This is abhishek's world from server" and a status code of 200 (OK).
// app.get('/', (req, res) => {
//     res.status(200).send(`This is abhishek's world from server`);
// })

// app.get('/user', (req, res) => {
//     res.status(200).send(`This is abhishek's user from server`);
// })

