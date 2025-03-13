import Student from "../model/student.js"


export default class DataService {
    constructor() { }

    // useResponse(response){
    //     const jsonPromise = response.json();
    //     jasonPromise.then((json) => console.log(json))
    //     jsonPromise.catch((error) => console.log(error))

    // }



    // handleError(response){
    //     console.log('brutta storia', response)
    // }

    async getStudentsData() {
        //   const responsePromise = fetch("../../assets/students.json");
        //   responsePromise.then(this.useResponse)
        //   responsePromise.catch(this.handleError)
        // data.sort((a, b) => a.name.localeCompare(b.name))

        //     return data;
        // const orderData = this.sortStudentData
       const studentsPromise = fetch("/assets/students.json")
            .then(resp => resp.json())
            .then(jsonData => {
                const students = this.createStudentsFromData(jsonData)
                console.log(students);
                return students;
            })
            .catch(error => console.log(error))


        
        return studentsPromise

    }

    getStudentsByName() {
        return this.getStudentsData().then(students => {
            const studentsClone = students.slice()
            studentsClone.sort((s1, s2) => s1.compareByName(s2))
        return studentsClone;
        });
        
        
    }

    getStudentsByAge(){
       return this.getStudentsData().then(students => {
        const studentsClone = students.slice();

        studentsClone.sort((s1, s2) => s1.compareByAge(s2));

        return studentsClone;
       });

        
    }


   async getShuffledStudents() {
        const students = await this.getStudentsData();
        const studentsClone = students.slice()
        const shuffledStudent = this.shuffleArray(studentsClone);
        return shuffledStudent;
    }

    shuffleArray(array) {
        // const newArray = array.slice()
        // newArray.sort(() => Math.random()- 0.5);
        // return newArray

        // const cloneArray = array.slice()
        // const newArray = [];

        // while (cloneArray.length > 0) {

        //     const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));

        // const randomStudent = cloneArray[randomIndex];
        // newArray.push(randomStudent);

        // cloneArray.splice(randomIndex, 1);
        // const randomStudent = cloneArray.splice(randomIndex, 1)[0];
        // newArray.push(randomStudent);
        const cloneArray = array.slice()
        const newArray = []

        while (cloneArray.length > 0) {

            const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));

            const randomStudent = cloneArray[randomIndex];

            newArray.push(randomStudent);

            cloneArray.splice(randomIndex, 1);

        }

        return newArray
    }

    createStudentsFromData(data) {
        const students = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i]
            const newStudent = new Student(element.name, element.surname, element.yob, element.gender, element.nationality, element.marks)
            students.push(newStudent)
        }
        return students
    }

    // sortStudentData(data){
    //     data.sort(s1, s2 => {
    //         const name1 = s1.name;
    //         const name2 = s2.name;

    //         return name1.localeCompare(name2);
    //     })
    //     return data
    // }

}
