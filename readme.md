# JavaScript Challenge

This project consists of 4 files. 

1. `index.html`
2. `style.css`
3. `form-validation.js`
4. `table.js`

## index.html

The javascript files and CSS file along with jquery files are linked first.

The title 'Users' is given.

`onload` is used in the `<body>` tag to call the `getText()` function which loads the data into the table from the given URL at load or reload of the page.

The form is created using the `<form>` tag and all fields to be entered are created.

In the next div, the table headers are created.

## style.css

All styling elements are declared in this file.

## form-validation.js

This file is contains the function used to validate the data entered in the form.

A new method `phoneUS` is created to be used in the jQuery validator to check the format of phone number entered in the form. 

In the function, the validation rules for each field attribute is mentioned and then the validation error messages.

## table.js

A variable `file` is initialized with the given URL. 

Then the `getText()` function is declared.

The fetch API is used to fetch the data from the given URL and is saved as an object in `myObject`. The text from this object is saved into `myText` and is then further parsed as a JSON object and stored in `parsedJSON`.

The data is then appended into the table by using a loop where each element of the JSON object is stored into the table under the right columns.