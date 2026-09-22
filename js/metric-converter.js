// Metric Converter

// Ask user for the value
// var value = prompt("Insert a value");

// // Show conversion options
// var menu = "Select a conversion type:\n" +
//            "1. Inch to Centimeter (in to cm)\n" +
//            "2. Foot to Centimeter (ft to cm)\n" +
//            "3. Yard to Meter (yd to m)\n" +
//            "4. Mile to Kilometer (mi to km)\n" +
//            "5. Centimeter to Inch (cm to in)\n" +
//            "6. Centimeter to Foot (cm to ft)\n" +
//            "7. Meter to Yard (m to yd)\n" +
//            "8. Kilometer to Mile (km to mi)";

// var type = prompt(menu);


function convert(value, type) {
    var output = "";

    if (type == "1") {
        output = (value * 2.54) + "cm";
    } else if (type == "2") {
        output = (value * 30.48) + "cm";
    } else if (type == "3") {
        output = (value * 0.91) + "m";
    } else if (type == "4") {
        output = (value * 1.61) + "km";
    } else if (type == "5") {
        output = (value * 0.39) + "in";
    } else if (type == "6") {
        output = (value * 0.0328) + "ft";
    } else if (type == "7") {
        output = (value * 1.09) + "yd";
    } else if (type == "8") {
        output = (value * 0.62) + "mi";
    } else {
        output = "Conversion unsuccessful, try again";
    }
    
    document.getElementById("convert-message").innerHTML = output; 
}
const element2 = document.getElementById("conversion-btn");
element2.addEventListener("click", function(event) {
    event.preventDefault();
    let value = parseFloat(document.getElementById("value-input").value);
    let type = document.getElementById("conversion").value;

    convert(value, type);
});

