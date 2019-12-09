class NameValidator extends Validator {
    constructor (input) {
       super(input);
     if(!isNaN(input))
     {
         alert("Numbers are not a valid input in this field")
     }  
    }
 }