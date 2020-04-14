function generateEngineer(Engineer){
    //Holy shit! the ` needs to be on the same line as the return statement!
    return `    
        <div class="card">
            <div class="container-top">
                <div class="content">
                    <div class="name">
                        ${Engineer.name}
                    </div>
                    <div class="role">
                        Engineer
                    </div>
                </div>
            </div>
            <div class="container-bottom">
                <p>ID: ${Engineer.id}</p>
                <p>Email: ${Engineer.email}</p>
                <p>GitHub: ${Engineer.github}</p>
            </div>
        </div>
    `;
}

module.exports = generateEngineer;