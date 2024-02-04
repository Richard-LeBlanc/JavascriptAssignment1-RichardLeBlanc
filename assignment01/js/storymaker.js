// Assignment 1 | COMP1073 Client-Side JavaScript
/*Author: Richard Leblanc
  Student Number: 200 182 873
  Building the logic behind the See-N-Say Storymaker.
*/
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");
const resetButton = document.querySelector("#reset");

// Constants for p tag to display query selectors
const noun1Paragraph = document.querySelector("#chosenNoun1");
const verbParagraph = document.querySelector("#chosenVerb");
const adjectiveParagraph = document.querySelector("#chosenAdjective");
const noun2Paragraph = document.querySelector("#chosenNoun2");
const settingParagraph = document.querySelector("#chosenSetting");


// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");
const storyParagraph = document.querySelector("#story");

// Variables for pre-defined arrays
// I used the traditional story entries from the book
const people = ["The turkey", "Mom", "The dog", "My teacher", "My elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const things = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes."];

// Variables for count to grab array elements
let peopleCount = 0;
let verbsCount = 0;
let adjectivesCount = 0;
let thingsCount = 0;
let placesCount = 0;

/* Functions
-------------------------------------------------- */
// access the array holding the phrase using a modulo to keep it in bounds, and just increment the counts 
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Paragraph.textContent = people[peopleCount % 6];
    // if-else to change count setting
    ++peopleCount;
}

function verb_on_click() {
    verbParagraph.textContent = verbs[verbsCount % 6];
    ++verbsCount;
}

function adjective_on_click() {
    adjectiveParagraph.textContent = adjectives[adjectivesCount % 6];
    ++adjectivesCount;
}

function noun2_on_click() {
    noun2Paragraph.textContent = things[thingsCount % 6];
    ++thingsCount;
}

function setting_on_click() {
    settingParagraph.textContent = places[placesCount % 6];
    ++placesCount;
}

// concatenate the user story and display
function playback_on_click() {
    // adding spaces to keep things clean 
    storyParagraph.textContent = noun1Paragraph.textContent + " " + verbParagraph.textContent + " " + adjectiveParagraph.textContent + " " + noun2Paragraph.textContent + " " + settingParagraph.textContent;
}
let signatureCount = 0;
// grabbing random element from arrays, concatenate and display
// I used floor division to keep values in bounds of 0-5 and append the values to the story paragraph 
function random_on_click() {
    const randomNoun1 = people[Math.floor(Math.random() * 6)];
    const randomVerb = verbs[Math.floor(Math.random() * 6)];
    const randomAdjective = adjectives[Math.floor(Math.random() * 6)];
    const randomNoun2 = things[Math.floor(Math.random() * 6)];
    const randomSetting = places[Math.floor(Math.random() * 6)];

    storyParagraph.textContent = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;
    
    // create a new element to display my name and studentnumber if it has not been done already
    if (signatureCount == 0){
        const signature = document.createElement("p");
        signature.textContent = "Name: Richard LeBlanc Student Number:200182873";
        signature.classList.add("signature")
        document.querySelector("section:last-of-type").appendChild(signature);
        ++signatureCount;
    }
    
}

function reset_on_click() {
    //reset list counters then clear all paragraphs from the page, and reset signature count so it can be called during the 
    //click of random button.
    peopleCount = verbsCount = adjectivesCount = thingsCount = placesCount = 0;
    
    for (const paragragh of document.querySelectorAll("p")){
        paragragh.textContent = '';
    }
    signatureCount = 0;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);