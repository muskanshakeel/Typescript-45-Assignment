"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let moreGuest = ["muskan", "arisha", "areefa",];
console.log("Great news! i found bigger dinner table\n");
//adding more guests
moreGuest.unshift("saba");
moreGuest.splice(moreGuest.length / 2, 0, "ayesha");
moreGuest.forEach(moreGuest => {
    console.log(`Dear ${moreGuest}, would you like to have dinner with me?`);
});
console.log("sadly, i can only invite 2 people for dinner now\n");
while (moreGuest.length > 2) {
    let removeGuest = moreGuest.pop();
    console.log(`so sorry ${removeGuest}, i can't invite you for the dinner\n`);
}
;
moreGuest.forEach(guests => {
    console.log(`Dear ${guests}, you are still invited to dinner.\n`);
});
moreGuest.pop();
moreGuest.pop();
console.log(moreGuest);
