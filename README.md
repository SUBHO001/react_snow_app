## Summary

Hosting a ReactJS app on ServiceNow as the backend. Using the the OOB incident table to display records on the UI side.

https://dev101615.service-now.com/api/424420/react_app_incidents

admin
bwN4cqX3yQOT

## Create React App
Use CRA to setup a Reat template fast - https://reactjs.org/docs/create-a-new-react-app.html

`npx create-react-app my-app`

Run in the local host `npm start` Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Complete the app and test it in the local host

## Package the Appication
Before building the app, we want to modify packaging options — the primary goal is to have just 3 files (html/js/css). You still can use OOB settings, it just produces more files and you will need to update more dependencies when deploying to ServiceNow. So, for now, changing OOB settings as described below.

Copy "build-no-split.js" file to the root folder of your React application.
Update package.json with the following: "build": "node build-no-split.js"3. 
Run `npm install rewire`

And now you are ready to build the application:
`npm run build`

We need 3 files:

1. index.html — main .html file for our application
2. /static/js/main.<hash>.js — js bundle file
3. /static/css/main.<hash>.css — combined CSS file

## Getting the incident data

Used Axios npm package to do a REST get call to the incident table. [Axios](https://www.npmjs.com/package/axios)
Used Rewire for packaging. [Rewire](https://www.npmjs.com/package/rewire)

Tried using session token to use in production, but did not work. Need to used OAuth service to set it up. 

## Setup the ServiceNow Scripted Rest API

Create a Scripted Rest API. Make 2 resources 1 entry point and another resources. Upload the packaged code as attachment and using script in the Scripted REST Resource throw the contents of the attachment to the browser to render it.

Within the index.html call the .css and .js with proper path and also use '%20' in the end. ServiceNow does not take .css and .js as path parameters.

Scripts->
![Entry point](https://github.com/SUBHO001/react_snow_app_1/blob/master/Snaps/Entry%20point%20code.JPG)
![Resources](https://github.com/SUBHO001/react_snow_app_1/blob/master/Snaps/Resource%20code.JPG)

Work in progress->
![landing page](https://github.com/SUBHO001/react_snow_app_1/blob/master/Snaps/landing%20page.JPG)


## References
[Modern web development in ServiceNow: React, Vue, and Angular](https://www.youtube.com/watch?v=YA9kOuobdzA)

[React application in ServiceNow](https://pishchulin.medium.com/react-application-in-servicenow-8bdbb1e69c0c)

[React in ServiceNow applications (advanced)](https://pishchulin.medium.com/react-in-servicenow-applications-advanced-3e1966fbb817)

[React in ServiceNow: how to access the data](https://pishchulin.medium.com/react-in-servicenow-how-to-access-the-data-a8cc4fae3912)



