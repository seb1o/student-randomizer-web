import DataService from "./services/data-services.js";
import Student from "./model/student.js";
const service = new DataService();


function getStudents() {
    const studentsPromise = service.getStudentsData();
    studentsPromise.then(studentsData => render(studentsData))
}

function orderByName() {
    const studentsPromise = service.getStudentsByName();
    studentsPromise.then(studentsData => render(studentsData))
}

function orderByAge() {
    const studentsPromise = service.getStudentsByAge();
    studentsPromise.then(studentData => render(studentData));
}

async function  shuffle() {
    const studentData = await service.getShuffledStudents();
    render(studentData);
}

window.orderByName = orderByName;
window.orderByAge = orderByAge;
window.shuffle = shuffle;
window.getStudents = getStudents
// const studentData = service.getShuffledStudents();
// render(studentData);

function render(studentsData) {
    const container = document.getElementById('students-container');
    container.innerHTML = '';
    for (let i = 0; i < studentsData.length; i++) {
        const student = studentsData[i];

        const studentContainer = document.createElement('div');
        studentContainer.classList.add('student-container');

        const nameContainer = createTextElement('h3', student.name + ' ' + student.surname);
        const countryContainer = createTextElement('span', 'Nazionalità: ' + student.nationality);
        const genderContainer = createTextElement('span', 'Genere: ' + student.gender);
        const ageContainer = createTextElement('span', 'Età: ' + student.getAge());

        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(countryContainer);
        studentContainer.appendChild(genderContainer);
        studentContainer.appendChild(ageContainer);

        container.appendChild(studentContainer);
    }
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}

/// to Do
//- aggiungere genere
//- aggiungere eta'
//- allineare le schede degli studenti a due a due
//- rendere il sito molto bello per il docente
//- ordinare gli studenti per ordine alfabettico di nome

