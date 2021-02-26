// TODO: 1. Add a `prevGuesses` property to the `game` object initialized to an empty array. COMPLETE

// TODO: 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*. Hint - use a template literal for the prompt message. COMPLETE

// TODO: 3. Ensure that the `getGuess` method returns a value that:
    // - Is a *number*, not a *string*.
    // - Is between `smallestNum` and `biggestNum`, inclusive.
    // - Hints:
    //     - This is a great use case for a `while` loop.
    //     - `parseInt` returns `NaN` if the string cannot be parsed into a number.
    // COMPLETE

// TODO: 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
    // - Hint: this is a great use for a while loop (or even a do...while loop!)

// TODO: 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
    // - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
    // - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
    // - Hints:
    //     - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may have not built your program to use any, that's ok if that's the case!)
    //     - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
    //     - The list of previous guesses can be generated using the array `join` method.
// TODO: 6. The `play` method should end (`return`) when the guess matches `secretNum`.



const game = {
    title: "Guess The Number", 
    biggestNum: 10, 
    smallestNum: 0, 
    numGuesses: 0, 
    previousGuesses: [], 
    getGuess() {
        let guess;
        while(isNaN(guess) || guess<this.smallestNum || guess> this.biggestNum){
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} ${this.secretNum}`));
        console.log("loop executed::" + guess)
        return guess;
        };
        
    },
    secretNum: null,
    play() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) +
            this.smallestNum;
        let currentGuess;
        do {
            currentGuess = this.getGuess()
            // if(currentGuess !== this.secretNum){
            this.previousGuesses.push(currentGuess)
            // }
            this.render() 
            if (currentGuess == this.secretNum){
                return
            }             
        }   while (true) 
            
    },
    render() {
        let lastGuess = this.previousGuesses.pop()
        this.previousGuesses.push(lastGuess)
        // [this.previousGuesses.length - 1];
        console.log(lastGuess);
        if (lastGuess === this.secretNum){
            alert(`Congrats! You guessed the number in ${this.previousGuesses.length} guesses!`)
        } if (lastGuess>this.secretNum) {
             alert(`Your guess is too high. Previous guesses: ${this.previousGuesses.join(",")}`)
        } if (lastGuess<this.secretNum) {
            alert(`Your guess is too low. Previous guesses: ${this.previousGuesses.join(",")}`)
        }
        
    }
};


game.play();




// while (this.getGuess() !== this.secretNum)