# Registration-Form

## Goal:

The purpose of this project is to design and display a registration form.

### Technologies and programming languages ​​used:

Html, Css, JavaScript, Bootstrap.

## Requirements

-One background image
- One form with text, select, radio button, submit button
- Styling will be like above but you can add more if you see the need
- Create a responsive menu with above links. Links need to go a page but pages can be empty 
- Email and phone will be validated by javascript/jquery. Phone number must be a Turkish number. You can make a drop down of area codes, but nor hard coded
- company and subject drop downs will be retrieved from a mock io that you will create via https://designer.mocky.io/ . There should be at least 10 items in each drop down
- all fields are required and must be checked via JS on submit 
- on submit, form needs to be routed to a new page that will just say 'Form is submitted'. No processing needed at this time

## Perform

#### HTML
I have created a significant portion of my code using Bootstrap, which has provided me with a great deal of convenience. I
began by establishing the necessary connections in the HTML section. Then, I created a menu on the page. However, the menus 
are not active. Subsequently, I created a registration form. I presented a form for the user to enter their first name,
last name, select a company name, email, phone, and a subject. I made the form elements mandatory using the "required"
attribute. I couldn't write JavaScript to validate the phone number, so instead, I wrote the area codes in Turkey in HTML, 
and I added a dropdown list for selection. I added a restriction for entering a maximum of 7 digits for the phone number. 
For the "Are you a beginner?" question, I added two radio buttons for the user to choose from, with both buttons initially 
selected. Users can select either "yes" or "no." At the end of the form, I added a "register" button. Clicking on this 
button will submit the form. I created a separate file for submitting the form, named "submit.html." The purpose of this 
file is that after the user fills out all the fields in the form and clicks the register button, they will be redirected to
a page displaying only 'Form is submitted.'

#### CSS
I wrote CSS code to specify the style of the website I created. The purpose of writing this was to determine the overall 
layout of the page and the appearance of the form.

#### JavaScript
I created Mocky endpoints for the Company and Subject dropdowns. The purpose of the JavaScript code I wrote is to fetch 
data from the Mocky API and populate the Company and Subject dropdowns.
