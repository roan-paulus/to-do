import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

import {
    toCamelCase
} from "../my_modules/string_functions";

import {
   displayItem,
   displayAllItems,
   dropForm,
   unDropForm,
   displayProject
} from "../my_modules/dom.js"; 

const vacation = createProject("vacation");
const trip = createItem(
    "Trip",
    "Go to the airport, board the plane untill arrival",
    "20/11/2022",
    "High"
);
const shopping = createItem(
    "Shopping",
    "Go to some stores in town and look around",
    "21/11/2022",
    "Medium"
);
const goBackHome = createItem(
    "Go back home",
    "Go to the airport, board the plane untill we're back home",
    "28/11/2022",
    "High"
);
vacation.addItem(trip);
vacation.addItem(shopping);
vacation.addItem(goBackHome);

let allProjects = {}; //for storage, maybe save when page closes?
allProjects.vacation = vacation;

let submitButt;
const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", (e) => {
    const dropSelectors = dropForm();
    
    dropSelectors.submit.addEventListener("click", (e) => {
        const name = toCamelCase(e.target.previousSibling.value);
        if (!(name === "")) {
            const newProject = createProject(name);
            allProjects[newProject] = newProject;
            displayProject(newProject);
            unDropForm(dropSelectors.form);
        } else {
            unDropForm();
        }
    });

});

displayProject(vacation);