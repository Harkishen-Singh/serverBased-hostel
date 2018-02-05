
<h1>Boys Hostel Software </h1>
<h2><u>Development Record</u></h2>
<h3>development V 1:</h3>
<ol>
  <li>Base design of the server</li>
    <li> added logIn page</li>
    <li> added admin page</li>
   <li> added signUP page</li>
    <li> added dashboard  for individual users which needs to be enhanced</li>
   <li> added error handling and reporting when any user enters an invalid registration number which is not in the mongodb record.</li>
    <li> Added counter page which would be used for entering the eating record of the user including the date and time.</li>
    <li> Added use of EJS to interact with server and shw the values sent by the server.</li>
    <li> Added record appeding when any user orders a meal, which needs to be entered by the admin in the url : “0.0.0.0:1133/entry”, provided u are runing on the local server on your computer.</li>
 </ol>
	
<h5>MOST IMPORTANT URL FOR EJS UNDERSTANDING : <a href="https://stackoverflow.com/questions/41369780/using-ajax-in-node-js-with-ejs" target="_blank">StackOverFlow</a>
<br/>MAIN CODE BELOW<br/>
<code><% for (var i = 0; i< order.length; i++) { %>
    <div id="champ">
        <span><%= order[i].id %></span>
        <span><%= order[i].name %></span>
        <span><%= order[i].drink %></span>
    </div>
		<% } %></code>
