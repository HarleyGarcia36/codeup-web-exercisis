(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            return (Math.PI * Math.pow(this.radius,2));
        },

        logInfo: function (doRounding) {
            var myArea=this.getArea();
            if (doRounding){
                myArea = Math.round(myArea);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: "+myArea);
        }
    };


    // log info about the circle

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius=5;

    // log info about the circle

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();