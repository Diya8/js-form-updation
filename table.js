var file = "https://jsonplaceholder.typicode.com/users";
async function getText(file,selector) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  var parsedJSON = JSON.parse(myText);

   for (var i=0;i<myText.length;i++) {
         var row = $('<tr/>'); 
         //alert("hello1");
         row.append($('<td/>').html(parsedJSON[i].id));
         //alert("hello2");
         row.append($('<td/>').html(parsedJSON[i].name));
         row.append($('<td/>').html(parsedJSON[i].username));
         row.append($('<td/>').html(parsedJSON[i].email));
         //var val = (parsedJSON[i].address.street).concat(", ",parsedJSON[i].address.suite,", ",parsedJSON[i].address.city,", ",parsedJSON[i].address.zipcode);
         row.append($('<td/>').html((parsedJSON[i].address.street).concat(", ",parsedJSON[i].address.suite,", ",parsedJSON[i].address.city,", ",parsedJSON[i].address.zipcode)));
         //row.append($('<td/>').html((parsedJSON[i].address.street).concat(", ",parsedJSON[i].address.suite,", ",parsedJSON[i].address.city,", ",parsedJSON[i].address.zipcode));
         row.append($('<td/>').html(parsedJSON[i].phone));
         row.append($('<td/>').html(parsedJSON[i].website));
         row.append($('<td/>').html(parsedJSON[i].company.name));
         $(selector).append(row);
    }
}