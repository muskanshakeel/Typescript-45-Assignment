// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "muskan"

console.log(personName.toLowerCase()); //muskan

console.log(personName.toUpperCase()); //MUSKAN

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //Muskan