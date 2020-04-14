function generateManager(manager){
    //Holy shit! the ` needs to be on the same line as the return statement!
    return `    
        <div class="card">
            <div class="container-top">
                <div class="content">
                    <div class="name">
                        ${manager.name}
                    </div>
                    <div class="role">
                        Manager
                    </div>
                </div>
            </div>
            <div class="container-bottom">
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
}

module.exports = generateManager;