angular-car-registration
==============================

AngularJS Car Registration

To run the application you need to use a local web server to serve the files to your browser, 
opening the index.html directly from the file system will not work.

You have to setup a NodeJS local web server:

Step 1: Install the http-server package from npm

    Open a command prompt / command line window and enter the following:
    npm install -g http-server

Step 2: Start a web server from a directory containing static website files

    Change to the directory containing the project static web files:
    cd \projects\angular-car-registration

    Start the server with this command:
    http-server

    You should see something like the following:
    C:\projects\angular-car-registration>http-server
    Starting up http-server, serving ./
    Available on:
    http://192.168.0.5:8080
    http://127.0.0.1:8080
    Hit CTRL-C to stop the server

Step 3: Browse to your local website with a browser

    Open your browser and go to the address http://localhost:8080 or http://localhost:8081 and you should see your local website. 

