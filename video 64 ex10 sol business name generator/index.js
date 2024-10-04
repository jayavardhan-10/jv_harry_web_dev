/* Create a business name generator by combining list of adjectives
and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let first, second, third

//for first element
let rdmnum = Math.random()
if (rdmnum < 0.33) {
    first = "Crazy"
}
else if (rdmnum > 0.33 && rdmnum < 0.66) {
    first = "Amazing"
}
else {
    first = "Fire"
}

//for 2nd element
let rdmnum2 = Math.random()
if (rdmnum2 < 0.33) {
    second = "Engine"
}
else if (rdmnum2 > 0.33 && rdmnum2 < 0.66) {
    second = "Foods"
}
else {
    second = "Garments"
}

//for 3rd element
let rdmnum3 = Math.random()
if (rdmnum3 < 0.33) {
    third = "Bros"
}
else if (rdmnum3 > 0.33 && rdmnum3 < 0.66) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
