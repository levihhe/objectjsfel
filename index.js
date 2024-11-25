import input from "file:///j:/12.c/webprog/input.js"


function TimeTable() {
    const TimeTable = [
        {name: "Hétfő" , classes: ["Angol","Ofő","Tesi","Tesi","Informatika"]},
        {name: "Kedd", classes: ["Informatika", "Angol", "Matematika", "Nyelvtan", "Informatika"]},
        {name: "Szerda", classes: ["Történelem", "Irodalom", "Matematika", "Angol", "Angol"]},
        {name: "Csütörtök", classes: ["Irodalom","Történelem","Matematika","Angol","Informatika"]},
        {name: "Péntek", classes: ["Történelem", "Irodalom","Angol","Tesi","Informatika"]}
    ]
    
    console.log("Órarend: ");
    TimeTable.forEach(day => {
        console.log(`Nap: ${day.name} \n Órák: ${day.classes.join(", ")}`);
    });
}


TimeTable();


async function manageStudents() {
    const students = [];

    const studentNumber = parseInt(await input("Hány adatot szeretnél megadni?"));
    for (let i = 0;i<studentNumber;i++) {
        const name = await input("Név:");
        const email = await input("E-mail:");
        students.push({name,email});
    }

    console.log("Tanulók adatai: ")
    students.forEach(student => {
        console.log(`Neve: ${student.name} \n E-mail: ${student.email}`);
    });
}
manageStudents();


