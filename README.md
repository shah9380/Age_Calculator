---

# Age Calculator

This is a simple web-based age calculator that allows you to input your date of birth and calculates your age in years, months, and days. It's a useful tool for quickly determining your age.

## How to Use

1. Open the web page in your browser.
2. Select your birthdate using the date input field.
3. Click the "Calculate" button to calculate your age.
4. Your age will be displayed in years, months, and days below the "Calculate" button.

## Technologies Used

- **HTML**: Provides the structure of the web page, including the date input field and result display.
- **CSS**: Styles the user interface, making it visually appealing.
- **JavaScript**: Powers the age calculation and updates the result in real-time.

## Screenshot

![AgeCalculator](https://github.com/shah9380/Age_Calculator/assets/130676464/b381cda4-3880-4adc-a4b8-8e33e64ec065)


## How It Works

The JavaScript code in `script.js` calculates the age by taking your birthdate and the current date into account. It then computes the difference in days, divides it into years, months, and days, and displays the result in the designated boxes on the web page.

The age calculation is done as follows:
```javascript
const dob = document.getElementById("Date").value;
const currentDate = new Date();
const birthDate = new Date(dob);

const ageInMilliSeconds = currentDate - birthDate;
const ageInSeconds = ageInMilliSeconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;

const years = Math.floor(ageInDays / 365);
const months = Math.floor((ageInDays % 365) / 30);
const leftdays = Math.floor(ageInDays % 30);
```

## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use or modify this code for your projects!

--- 
