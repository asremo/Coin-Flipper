// TODO: Declare any global variables we need
let heads = 0
let tails = 0

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
   
    // Capturing the button click to flip
    document.getElementById('flip').addEventListener('click', () => {
        // Determine result by using Math.random which returns a random #
        // between 0 and 1, therefore it has a 50% chance to be below 0.5
        // which in our case is heads
        let flippedHeads = Math.random() < 0.5

        if (flippedHeads) 
        {
            document.getElementById('penny-image').setAttribute('src', 'assets/images/penny-heads.jpg')
            document.getElementById('message').textContent = 'You Flipped Heads!'

            heads++
        } else 
        {
            // some code when tails is flipped
            document.getElementById('penny-image').setAttribute('src', 'assets/images/penny-tails.jpg')
            document.getElementById('message').textContent = 'You Flipped Tails!'

            tails++
        }

        // Update the scoreboard

        // Calculate the total for the statistics
        let total = heads + tails

        // Variable to save the percentages
        let percentHeads = 0
        let percentTails = 0

        // Only calculate stats if we have at least 1 roll
        if (total > 0)
        {
            percentHeads = Math.round((heads / total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }
        
        // Update the scoreboard table
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = `${percentHeads}%`

        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = `${percentTails}%`
    })

    // Capturing the button click to clear
    document.getElementById('clear').addEventListener('click', () => {

        document.getElementById('message').textContent = `Let's get rolling!`
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = '0%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = '0%'       

    })




    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})