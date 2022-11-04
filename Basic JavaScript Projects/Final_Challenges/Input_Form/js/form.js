function validateForm() { //this defines what the validateForm function does
    let x = document.forms["information"]["fName"]["lName"]["pNumber"].value; // x equals to the forms element in the html doc;specifies which fields within that form
   // these fields are identified by the 'name=' attribute within the input element
    
    if (x == "") { //if statement says: if X (the form specified above) equals to nothing, then
      alert("Name must be filled out"); //alert the user the message listed here
      return false; 
    }
  }