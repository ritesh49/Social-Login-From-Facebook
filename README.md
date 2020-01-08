# Social-Login-From-Facebook
It is a  program in which login button connects to facebook and log in ths user using facebook . THen the data extracted from the Facebook is shown in the login page itself.

Their are many Node modules but i haven't upload all of them.
login.html--> in this inside script tag their is code for synchronously importing the facebook Js SDk into the code and . then the function fbLogin() gets called when 
the login button is clicked, which calls teh FB.api for retreiving data.
index.js--> This is the server Code with express Js which renders the Html inside the public folder.
