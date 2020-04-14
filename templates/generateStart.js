function generateStart(){
    //Holy shit! the ` needs to be on the same line as the return statement!
    return `    
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "stylesheet" href = "style.css">
        <title>Cards</title>
        </head>
        <body>
            <header class = "mainheader">
                <h1>My Team</h1>
            </header>
            <div class="allcards">

    `;
}

module.exports = generateStart;