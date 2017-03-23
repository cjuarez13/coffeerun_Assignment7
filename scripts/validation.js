(function (window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function (coffee, strength) {
            var wpatt = /decaf/.test(coffee);

            //console.log(wpatt);

            if (wpatt && strength > 20) {return false;}
            else {return true;}


            // if (strength < 20) {return false;}
            // else {return true;}
          // var wpatt = /decaf/;
          // if (coffe === wpatt && s)

            //return /decaf/.test(coffee);

            // This regular expression is an object and has a test method.
            // You can pass a string to the test method, and it will return a Boolean
            // – true if the regular expression matches the string and false if not
        }
    };


//Add another fuction to your Validation module.
// ***Look up how to add methods to objects****
//  It should accept two arguments: a string and an integer.
//  If the string contains the word “decaf” and the integer is greater than 20,
//  the function should return false. Add listeners for the coffee order text field
//  and for the caffeine strength slider.
//  Trigger the custom validation for whichever field is currently being edited
//  and caused the validation failure


    App.Validation = Validation;
    window.App = App;
})(window);
