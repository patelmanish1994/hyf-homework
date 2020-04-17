
//Create two arrays called firstWords, secondWords. 
//The arrays should have 10 elements containing strings of possible startup names.
//Some examples could be: "Easy", "Awesome", "Corporate".
//Create a variable called startupName that will contain created startup name.
//Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. 
//An example could be: "The startup: "Easy Corporation" contains 16 characters"

//Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.

//const randomNumber = Math.floor(Math.random() * 10) + 0

const firstWords=['Easy',
                   'Awesome',
                    'Indian',
                    'Rich',
                    'Corporation',
                    'Ashok',
                    'Fire',
                    'Marvel',
                    'System',
                    'Fantastic'];

const secondWords=['Dad',
                   'Express',
                    'The',
                    'United',
                    'Solution',
                    'Creatives',
                    'Trust',
                    'Ignited',
                    'Brothers',
                    'Style'];

for (let i= 0; i<=10; i++) 

{
    const randomNumber1=Math.floor(Math.random() * 10) + 0;

    let firstWord = firstWords[randomNumber1];

    const randomNumber2 = Math.floor(Math.random() * 10) + 0;

    let secondWord = secondWords[randomNumber2];

    const startupName= firstWord + secondWord;

    console.log(`\"The startup: \"${startupName}\" contains ${(startupName.length)} characters\"`);

    
}
