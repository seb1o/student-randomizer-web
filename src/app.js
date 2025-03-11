import DataService from "./services/data-services.js";


const service = new DataService();
const studentData = service.getStudentsData();

const container = document.getElementById('students-container');

for (let i = 0; i < studentData.length; i++) {
    const student = studentData[i];

    const studentContainer = document.createElement('div');
    studentContainer.classList.add('student-container');

    const nameContainer = document.createElement('h3');
    const nameNode = document.createTextNode(student.name + ' ' + student.surname);
    nameContainer.appendChild(nameNode);

    const countryContainer = document.createElement('h4');
    const countryNode = document.createTextNode('Nazionalità: ' + student.nationality);
    countryContainer.appendChild(countryNode);

    const genderContainer = document.createElement('h5');
    const genderNode = document.createTextNode('Gender: ' + student.gender);
    genderContainer.appendChild(genderNode);

    const ageContainer = document.createElement('h5');
    const ageNode = document.createTextNode('Age: ' + (2025 - student.yob));
    ageContainer.appendChild(ageNode);

    studentContainer.appendChild(nameContainer);
    studentContainer.appendChild(countryContainer);
    studentContainer.appendChild(genderContainer);
    studentContainer.appendChild(ageContainer);

    container.appendChild(studentContainer);
}








/// to Do
//- aggiungere genere
//- aggiungere eta'
//- allineare le schede degli studenti a due a due
//- rendere il sito molto bello per il docente
//- ordinare gli studenti per ordine alfabettico di nome 

