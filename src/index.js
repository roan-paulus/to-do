import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

import {
    toCamelCase
} from "../my_modules/string_functions";

import {
    dom
} from "../my_modules/dom.js";

let status = {isAdding: false};

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
localStorage.clear(); //for testing
            
if (Object.entries(localStorage).length === 0) {
    var allProjects = {};
} else {
    var allProjects = localStorage.getItem('allProjects');
    allProjects = JSON.parse(allProjects);
}

allProjects.vacation = vacation; //for testing

function getAllProjects() {
    return allProjects;
}

function getItem(projectName, itemName) {
    return allProjects[projectName][itemName];
}

function listenEditRemove(currProj, itemTitle) {
    const editButt = document.querySelector(
        "#" + itemTitle + "Edit");
    const removeButt = document.querySelector(
        "#" + itemTitle + "Remove"
    );

    editButt.addEventListener("click", (e) => {
        const currentItem = e.target.parentNode.id;
        dom.editMenu(currentItem);
        dom.removeItem(currentItem);
        delete allProjects[currProj][currentItem];

        listenAllWhenProject(currProj, 'edit');
    });

    removeButt.addEventListener("click", (e) => {
        const currentItem = e.target.parentNode.id
        delete allProjects[currProj][currentItem];
        dom.removeItem(currentItem);
    });
}

function listenAllWhenProject(currProj, mode) {
    const subbutt = document.querySelectorAll(".submit-item-edit");
    subbutt.forEach(button => {
        button.addEventListener("click", () => {
            const form = document.querySelector(".edit-form");
            if (form[0].value === 'Title') {
                dom.remEditMenu(".edit-form");
                dom.displayAddItem(allProjects[currProj]);
                listenAddItem(currProj);
            } else {
                const newItem = createItem(
                    form[0].value,
                    form[1].value,
                    form[2].value,
                    form[3].value
                );
                const itemTitle = toCamelCase(newItem.title);
                allProjects[currProj][itemTitle] = newItem;
                dom.displayItem(newItem);   
                dom.remEditMenu(".edit-form");

                if (mode !== 'edit') dom.displayAddItem(currProj);
    
                listenEditRemove(currProj, itemTitle);
            }
        });
    });
}

function listenEdit(currProj) {
    const editButtons = document.querySelectorAll(".editButtons");
    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const currentItem = e.target.parentNode.id;
            dom.editMenu(currentItem);
            dom.removeItem(currentItem);
            delete allProjects[currProj][currentItem];

            listenAllWhenProject(currProj, 'edit');
        });
    }); 
    
    const removeButtons = document.querySelectorAll(".removeButtons");
    removeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const currentItem = e.target.parentNode.id
            dom.removeItem(currentItem);
            delete allProjects[currProj][currentItem];
        });
    });
}

function listenAddItem(projectName) {
    const addButton = document.querySelector('#' + projectName + 'Add');

        const generateForm = function() {
            dom.addToProjectForm();
            listenAllWhenProject(projectName);
            dom.remProjAddButton(allProjects[projectName]);
        }
        
        addButton.addEventListener("click", generateForm);
}

function dropItems(e) {
    const currProj = e.target.parentNode.id;
    if (status[currProj] === undefined ||
    status[currProj] === "display") {
        dom.displayAllItems(allProjects[currProj]);
        status[currProj] = "remove";

        listenEdit(currProj);
        listenAddItem(currProj);
    
    } else {
        dom.removeAllItems(allProjects[currProj]);
        status[currProj] = "display";
    }
}

function listenProject() {
    const projectButtons = document.querySelectorAll(".projectButtons");
    projectButtons.forEach(project => {
        project.addEventListener("click", (e) => {
            dropItems(e);
        });
    });
}

function listenAddProject() {
    const addProject = document.querySelector("#add-project");
    addProject.addEventListener("click", () => {
        const dropSelectors = dom.dropForm();
        
        dropSelectors.submit.addEventListener("click", (e) => {
            const name = toCamelCase(e.target.previousSibling.value);
            if (name === "") {
                dom.unDropForm(dropSelectors.form);
            } else if (!(name === "")) {
                const newProject = createProject(name);
                allProjects[newProject.title] = newProject;
                dom.displayProject(newProject);
                dom.unDropForm(dropSelectors.form);
                
                const projectButton = document.querySelector(
                    '#' + newProject.title
                    );
                projectButton.addEventListener('click', (e) => {
                    dropItems(e);
                });

                const remButton = document.querySelector(
                    '#' + name + 'RemoveButt'
                );
                remButton.addEventListener('click', (e) => {
                    dom.removeProject(e.target.parentNode.id);
                    delete allProjects[e.target.parentNode.id];
                });
    
            } else {
                dom.unDropForm();
            }
        });
    
    });
}

function listenRemProject() {
    const projectRemButtons = document.querySelectorAll(
        '.projectRemButtons'
    );
    projectRemButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            dom.removeProject(e.target.parentNode.id);
            delete allProjects[e.target.parentNode.id];
        });
    });
}

function savePage() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

window.addEventListener('unload', savePage);

dom.displayAllProjects(allProjects);

listenProject();
listenRemProject();
listenAddProject();

export { getAllProjects, getItem };