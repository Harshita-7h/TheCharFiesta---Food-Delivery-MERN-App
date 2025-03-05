The Char Fiesta is a personal project developed using the MERN Stack, where users can easily sign up and log in with their credentials. Once logged in, users can select their food preferences (Veg or Non-Veg) and add their chosen items to the cart.
The food items added to the cart are visible when the "My Cart" button is clicked. From there, users can proceed to a dummy checkout page, where they can confirm their order. Once confirmed, all the items in the cart are marked as ordered, and the order is reflected on the "My Orders" page.
Both the food items and their respective categories, as well as the signed-up users’ data, are securely stored in MongoDB Atlas.

Setting Up and Running the Application
Backend Setup:
1.	Open your terminal and navigate to the 'backend' folder.
2.	Run the following command to start the server: ‘nodemon .\index.js’.
Frontend Setup:
1.	Open a new terminal window, navigate to the 'frontend' folder, and run: ‘npm start’.

Required Software and Packages
To run The Char Fiesta app, the following software and packages need to be installed:
1.	Visual Studio Code – Code editor for development.
2.	Node.js – JavaScript runtime environment.
3.	React App – Create the frontend using npx create-react-app myapp.
4.	Install necessary packages for the backend: ‘npm install express mongoose nodemon’.
5.	Install additional packages for authentication: ‘npm install bcryptjs jsonwebtoken’.
6.	MongoDB Community Server – Install MongoDB on your local machine.
7.	MongoDB Database Tools – Install MongoDB tools for database management.
8.	MongoDB Atlas Account – Create an account and set up a MongoDB cluster on MongoDB Atlas for database hosting.

Once the setup is complete, you’ll have a fully functional application allowing users to interact with the system, add food items to their cart, and place orders—all while storing data securely in MongoDB Atlas.
