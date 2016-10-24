# FacebookApp
An Angular application to post into your Facebook profile

This is an application that it allows you to post into your Facebook Profile.
I built this application with **AngularJS, ngFacebook module, bootstrap Theme ( Cerulean ), Facebook app and Facebook SDK.**

For the first thing, you must create this project with angular-seed repository present in GitHub. For more informations, see my templateStore repository or follow the steps at this link: https://github.com/angular/angular-seed

When you have create angular-seed project, past my files and folders into your project and delete views1 and views2 folders.
Finally, when you installed Bootstrap with Bower, get source code of Cerulean theme at follow link: https://bootswatch.com/ and replace Bootstrap code with this.


To use this application, you must create a Facebook app at follow link: https://developers.facebook.com/
Insert your Facebook credentials for access into Developer Console and follow steps for create a new Facebook app.

When you will create a new Facebook application, you will obtain an ID. With this ID, you will must insert into app.js file where i have insert this string: " $facebookProvider.setAppId("YourIDApplication"); ". 

**MOST IMPORTANT: We use ngFacebook module into Angular Module for use and control SDK Facebook functions, we use ngFacebook object " $facebookProvider.setAppId(""); " to load this functions into your Facebook App and finally, the Facebook Application send request at your Facebook Profile.
For more information about ngFacebook module, please visit this repository: https://github.com/GoDisco/ngFacebook**

Start "npm start" command and call "localhost:8000" from your browser.

**Please download video demostration into "videoTrailer" directory.**
