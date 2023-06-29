const DATA = [
    {
        name: "String Operations in File CLI",
        description: "String Operations in File CLI with Go language",
        languages: ["go"],
        type: ["cli"],
        link: "https://github.com/AbdelrahmanBayoumi/String-Operations-in-File-CLI"
    }, {
        name: "Library Management System CLI",
        description: "Library management system using Golang (HTTP Server) & (CLI Client)",
        languages: ["go"],
        type: ["cli", "web"],
        link: "https://github.com/AbdelrahmanBayoumi/library-management-system-cli"
    }, {
        name: "RSA Algorithm (Encryption & Decryption)",
        description: "Implementation of RSA Algorithm (Encryption - Decryption)",
        languages: ["python"],
        type: ["cli"],
        link: "https://github.com/AbdelrahmanBayoumi/RSA-Algorithm"
    }, {
        name: "Prayer Times",
        description: "Find on our website the daily prayer times for the city of Alexandria for today",
        languages: ["nodejs", "javascript", "css", "html"],
        type: ["web"],
        link: "https://github.com/AbdelrahmanBayoumi/Prayer-Times"
    }, {
        name: "Information Retrieval Models",
        description: "Implementation of IR Models with GUI, Using Python & Flask for back-end and HTML & CSS for front-end",
        languages: ["python", "html", "css"],
        type: ["web"],
        link: "https://github.com/AbdelrahmanBayoumi/IR-Models"
    }, {
        name: "Titanic - Machine Learning from Disaster",
        description: "Knowing from a training set of samples listing passengers who survived or did not survive the Titanic disaster, can our model determine based on a given test dataset not containing the survival information, if these passengers in the test dataset survived or not.",
        languages: ["Jupyter Notebook"],
        type: ["other"],
        link: "https://github.com/AbdelrahmanBayoumi/titanic-machine-learning-from-disasters"
    }, {
        name: "Stack Implementation",
        description: "Implement stack class in java Swing with GUI illustration",
        languages: ["java"],
        type: ["desktop app"],
        link: "https://github.com/AbdelrahmanBayoumi/Stack-Implementation-In-Java-Swing"
    }, {
        name: "Colors Database",
        description: "Colors Database App is a desktop application used to store colors in Hex Code and variable names to help Design with CSS",
        languages: ["java", "css"],
        type: ["desktop app"],
        link: "https://github.com/AbdelrahmanBayoumi/Colors-Database"
    }, {
        name: "PDF To Images",
        description: "Desktop Application for converting PDF file to Images",
        languages: ["java", "css"],
        type: ["desktop app"],
        link: "https://github.com/AbdelrahmanBayoumi/PDF-To-Image"
    }, {
        name: "Books Database",
        description: "Desktop application for (Store Books data - Display Books And Fields - Search for book by Title and Author and Publisher and Description)",
        languages: ["java", "css"],
        type: ["desktop app"],
        link: "https://github.com/AbdelrahmanBayoumi/Books-Database"
    }
]

function chooseType(type) {
    const projectsContainer = document.getElementById('projectsContainer');
    let htmlProjects = "";
    DATA.forEach(project => {
        if (!project.type.includes(type)) {
            return
        }
        console.log(project);
        let languageHTML = '';
        project.languages.forEach(language => {
            languageHTML += `<img src="assets/images/${language}.svg" alt="${language}">`;
        });
        htmlProjects += `
        <article class="project-box" onclick="window.open('${project.link}', '_blank');">
            <div class="project-container">
                <!-- <div class="project-image-container">
                    <img src="assets/images/project.png" alt="">
                </div> --->
                <div class="project-text">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
            </div>

            <div class="project-box-footer">
                <div>
                    <span> Link: </span>
                    <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i><span></span>
                    </a> 
                </div>
                <div class="project-tech">
                    ${languageHTML}
                </div>
            </div>
        </article>
    `
    });
    projectsContainer.innerHTML = htmlProjects;
}

chooseType("desktop app")