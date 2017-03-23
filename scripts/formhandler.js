(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement === 0) {
            throw new Error('Could not find element with selector:' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            console.log(data);
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            //console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };


    FormHandler.prototype.addInputHandler = function (fn) {
        console.log('Setting input handler for form');

        //console.log(this.$formElement);
        console.log(this);


        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
            var emailAddress = event.target.value;
            //console.log(fn(emailAddress));
            var message = '';
            console.log('emails');
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            }
            else {
                message = emailAddress + ' is not an authorized email address!';
                event.target.setCustomValidity(message);
                console.log(fn(emailAddress));
            }
        });

        console.log('Going to set new listeners here...');


        this.$formElement.on('input', '[name="coffee"]', function (event) {
            var coffee = event.target.value;
            var message2 = '';
            var slider = $('#strengthLevel').val();

            console.log('coffee');
            //console.log(slider);

            if (fn(coffee, slider)) {
                event.target.setCustomValidity('');
                //console.log('hi');

            }
            else {
                message2 = coffee + ' is being selected';
                event.target.setCustomValidity(message2);
                console.log(fn(coffee, slider));
            }
        });

        console.log(fn);


        this.$formElement.on('input', '[name="strength"]', function (event) {
            var rating = event.target.value;
            var message3 = '';
            var order = $('#coffeeOrder').val();

            console.log('rating');
            console.log(order);

            if (fn(order, rating)) {
                event.target.setCustomValidity('');
            }
            else {
                message3 = rating + ' is being selected...';
                event.target.setCustomValidity(message3);
                console.log(fn(order, rating));
            }
        });





    };

    App.FormHandler = FormHandler;
    window.App = App;

})(window);
