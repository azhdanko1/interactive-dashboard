 # Interactive Productivity Dashboard Project
 ### *This project is a web-based dashboard built for WEB-115 (Web Markup and Scripting) to demonstrate interactive JavaScript features.*
 
 ## TODO: Future Enhancements List
- [X] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals
### This tool measures your weekly task goals my multiplying your daily goal by 5 and adding an additional bonus provided by the user.

## Imperial/Metric Converter
This tool allows the user to convert imperial units to metric units and back. You may convert inch/foot to a centimeter, a yard to a meter, and a mile to a kilometer. If you want, you may go the other way around!

### Logic & Pseudocode
BEGIN Metric Converter

DISPLAY “Insert a value”
INPUT value

DISPLAY "Select a conversion type:"
DISPLAY "1. Inch to Centimeter (in to cm)"
DISPLAY "2. Foot to Centimeter (ft to cm)"
DISPLAY "3. Yard to Meter (yd to m)"
DISPLAY "4. Mile to Kilometer (mi to km)"
DISPLAY "5. Centimeter to Inch (cm to in)"
DISPLAY "6. Centimeter to Foot (cm to ft)"
DISPLAY "7. Meter to Yard (m to yd)"
DISPLAY "8. Kilometer to Mile (km to mi)"

INPUT type

SET output to “”

SWITCH type 
CASE 1: 
	SET output to (value * 2.54) + “cm”
	BREAK
CASE 2: 
	SET output to (value * 30.48) + “cm”
	BREAK
CASE 3: 
	SET output to (value * 0.91) + “m”
	BREAK
CASE 4: 
	SET output to (value * 1.61) + “km”
	BREAK
CASE 5: 
	SET output to (value * 0.39) + “in”
	BREAK
CASE 6: 
	SET output to (value * 0.0328) + “ft”
	BREAK
CASE 7: 
	SET output to (value * 1.09) + “yd”
	BREAK
CASE 8: 
	SET output to (value * 0.62) + “mi”
	BREAK
DEFAULT
	SET output to “Conversion unsuccessful, try again”

DISPLAY output

END