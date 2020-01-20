const createStudentComponent = () => {
    return `
        <div class="student">
            <h1>Alejandro Font</h1>
            <section>Day cohort 27</section>
            <aside>
                Wore pants that were too short for his legs.
                Was an incredible friend to his teammates.
            </aside>
        </div>
    `
};

// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container");

// Update its contents with the return value of the function
studentContainer.innerHTML = createStudentComponent();