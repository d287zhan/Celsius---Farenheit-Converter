var readline = require('readline')
var isValid = false
var B = readline.createInterface(process.stdin, process.stdout)

B.question("Convert from C to F (1) or F to C (2) (Type C for 1 and F for 2): ", function(answer) {


    if ((answer.toUpperCase() !== 'F') && (answer.toUpperCase() !== 'C')) {
        //Current error case, currently, is just closing the program 
        console.log("Not valid :( BYE")
        B.close()

        //Consider error case, re-prompting user
        /* B.question("Invalid, Try again: ", function(answer){
         while(!isValid)
             if(answer.toUpperCase() === 'C' || answer.toUpperCase() === 'F'){
                 isValid = true
             }

         })*/
    }


    if (answer.toUpperCase() === 'F') {
        var cel = 0
        isValid = true
        B.setPrompt("Whats the temp in F (type exit to leave): ")
        B.prompt()

        B.on('line', function(num) {
            if (num.toLowerCase() === 'exit') {
                B.close()
            } else if (num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER) {
                cel = num
                console.log("That temp is %d in Celsius", ((cel - 32) * 5 / 9))
                B.setPrompt("You're not done yet, Enter another one: ")
                B.prompt()
            } else {
                console.log("Not a Valid Number: ")
            }
        })
    }

    if (answer.toUpperCase() === 'C') {
        var far = 0
        isValid = true
        B.setPrompt("Whats the temperature in C (type exit to leave): ")
        B.prompt()

        B.on('line', function(num) {
            if (num.toLowerCase() === 'exit') {
                B.close()
            } else if (num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER) {
                far = num
                console.log("That temp is %d in Farenheit", ((far * 9 / 5 + 32)))
                B.setPrompt("Keep Going ;) Enter another one: ")
                B.prompt()
            } else {
                console.log("That is not a valid number, Try again: ")
            }

        })
    }
})

B.on('close', function(end) {

    console.log("YOU DONE NOW :)")
    process.exit()

})