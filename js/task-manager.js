      // Weekly Goal: Calculate the total weekly task goal for a user.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
            // Declare variables and values
            // Output message to console
            console.log("Checking status for: " + userName); 
 
            // Calculate weekly goal based on number of workdays (5) per week
            let weeklyGoal = dailyGoal * 5; 
 
            // Add bonusTasks to weeklyGoal. 
            let totalGoal = weeklyGoal  + Number(bonusTasks); 
 
            // Output results to web page
            let output = "User: " + userName + "<br>";
            output += "Total Weekly Goal: " + totalGoal;

            document.getElementById("goal-message").innerHTML = output; 
        }
        
const element = document.getElementById("goal-btn");
element.addEventListener("click", function(event) {
    event.preventDefault();
    let userName = document.getElementById("name-input").value;
    let dailyGoal = document.getElementById("goal-input").value;
    let bonusTasks = document.getElementById("bonus-input").value;

    weeklyGoal(userName, dailyGoal, bonusTasks);
});