# Cabify Frontend-UI challenge
For the coding challenge you have to create a business card builder in React. You'll be given some custom premade CSS, an HTML markup (which you can modify) and a React application created with facebook's create-react-app.
To complete the challenge you need to create a form in react with the given HTML. You'll need to finish the following features in this order:
1. Create a custom Select component for the country codes missing select input. The component has the following requirements:
  * Clean HTML structure with the proper CSS styles
    * It must show the currently selected option.
    * It must have a blank first option.
      Example in plain HTML:
        <select>
          <option>Empty option</option>
        </select>
    * It must allow a selected option by default
      Example in plain HTML:
        <select>
          <option>Empty option</option>
          <option value="34">+34</option>
          <option value="52" selected>+52</option>
        </select>
2. The data from the form inputs must be reflected on the business card on the left. The data must be reflected in the card at the same time the user inputs data.
3. The submit button must stay disabled until the user fills all the data.
### Bonus points:
* Keyboard navigation inside the Select component
* Input validation
* The data must be submitted properly (don't worry about the request itself, only that the data is being submitted correctly)
### Note
* You can modify the HTML at will
* If you decide to use flags to enhance the select component you can get them from [here](https://github.com/madebybowtie/FlagKit)
## Running the app
```
yarn
yarn watch-css
yarn start
```
Now you can visit `localhost:3000` from your browser.
## Design files
* [Download the .sketch file](Frontend-challenge.sketch)
* [Download the .pdf file](Frontend-challenge.pdf)
