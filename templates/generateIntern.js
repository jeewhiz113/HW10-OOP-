function generateIntern(Intern){
    //Holy shit! the ` needs to be on the same line as the return statement!
    return `    
    <div class="card">
        <div class="container-top">
            <div class="content">
                <div class="name">
                    ${Intern.name}
                </div>
                <div class="role">
                    Intern
                </div>
            </div>
        </div>
        <div class="container-bottom">
            <p>ID: ${Intern.id}</p>
            <p>Email: ${Intern.email}</p>
            <p>School: ${Intern.school}</p>
        </div>
    </div>
`;
}

module.exports = generateIntern;