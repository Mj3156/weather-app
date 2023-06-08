
const vowelCount = (string) =>
{
    let count = 0

    for (let i = 0; i < string.length; i++){
       
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            count++
        }
      
    }
    console.log(count , string)
}

vowelCount("mehul")