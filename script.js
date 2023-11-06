


function calculateAge(){
    const dob = document.getElementById("Date").value;
    const currentDate = new Date();
    const birthDate = new Date(dob);

    const ageInMilliSeconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliSeconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays%365) / 30);
    const leftdays = Math.floor(ageInDays % 30);


    if(years>=0 && months>=0 && leftdays>=0 ){
        document.getElementById("Years").innerHTML = years;
        const monthsDisplay = document.getElementById("Months");
         monthsDisplay.innerText = months;
            const daysDisplay = document.getElementById("Days");
        daysDisplay.innerText = leftdays;
    }
}

console.log("yes");