let mixedMessage = () => {
    let random = Math.floor(Math.random()*9)
    
    let message =""
    switch (random) {
        case 1: return message ="Mercury";
        case 2: return message = "Venus";
        case 3: return message = "Earth";
        case 4: return message = "Mars";
        case 5: return message = "Jupiter";
        case 6: return message = "Saturn";
        case 7: return message = "Uranus";
        case 8: return message = "Neptun";
        case 9: return message = "Pluto";
        default: return message = "Sun";
    }
}

console.log(`You are on ${mixedMessage()}.`)
