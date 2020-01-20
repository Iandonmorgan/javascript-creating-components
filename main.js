const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

const element = (html, name, classes) => {
    return `<${html} class="${classes}">${name}</${html}>`
}

const createStudentComponent = (student) => {
    let status = "";
    if (student.score >= 60) {
        status += "xx-large passing"
    } else {
        status += "xx-large failing"
    };
        return `
    <div id="student">
        ${element("h1", student.name, status)}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`
}

const aside = (student) => {
    return `<aside class="pushRight">${student.info}</aside>`;
}

const studentContainer = document.querySelector("#container");

for (const student of students) {
    studentContainer.innerHTML += createStudentComponent(student);
}