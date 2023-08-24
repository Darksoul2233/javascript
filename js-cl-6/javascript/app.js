// var ShoppingCart = [


//     {
//         Product: 'JengaClassic',
//         Price: '12.99',
//         Quantity: '1',
//     },

//     {
//         Product: 'Eco Dot',
//         Price: '29.99',
//         Quantity: '3',
//     },

//     {
//         Product: 'FireStick',
//         Price: '15.99',
//         Quantity: '2',
//     }

// ]

// console.log(ShoppingCart);
// for (var a = 0; a < ShoppingCart.length; a++) {

//     document.write(ShoppingCart[a].Product + " " + ShoppingCart[a].Price + " " + ShoppingCart[a].Quantity + "<br>");
// }


// var StudentsInfo = [


//     Student1 = {
//         Name: 'Ali',
//         Age: '17',
//         Registration_Number: '13213',
//         Course: "Data Science",
//         FavProgramming_languages: ["Java", "python", "C++", "JavaScript", "C#",],

//         Subjects: {

//             S1: "English",
//             S1: "Urdu",
//             S1: "Maths",
//             S1: "Physics",
//             S1: "Computer Science",

//         }
//     },

//     Student2 = {
//         Name: 'Ahmad',
//         Age: '20',
//         Registration_Number: '13131',
//         Course: "Web Dev",
//         FavProgramming_languages: ["Java", "python", "C++", "JavaScript", "C#",],

//         Subjects: {

//             S1: "English",
//             S1: "Urdu",
//             S1: "Maths",
//             S1: "Physics",
//             S1: "Computer Science",

//         }

//     },

//     Student3 = {
//         Name: 'Farhan',
//         Age: '22',
//         Registration_Number: '13134',
//         Course: "Web Dev",
//         FavProgramming_languages: ["Java", "python", "C++", "JavaScript", "C#",],

//         Subjects: {

//             S1: "English",
//             S1: "Urdu",
//             S1: "Maths",
//             S1: "Physics",
//             S1: "Computer Science",

//         }
//     }
// ]

// console.log();

var studentsInfo = [
    {
        Name: 'Ali',
        Age: '17',
        Registration_Number: '13213',
        Course: "Data Science",
        FavProgramming_languages: ["Java", "Python", "C++", "JavaScript", "C#"],
        Marks: {
            English: 85,
            Urdu: 70,
            Maths: 90,
            Physics: 75,
            Computer_Science: 80
        }
    },
    {
        Name: 'Ahmad',
        Age: '20',
        Registration_Number: '13131',
        Course: "Web Dev",
        FavProgramming_languages: ["Java", "Python", "C++", "JavaScript", "C#"],
        Marks: {
            English: 75,
            Urdu: 80,
            Maths: 60,
            Physics: 85,
            Computer_Science: 70
        }
    },
    {
        Name: 'Farhan',
        Age: '22',
        Registration_Number: '13134',
        Course: "Web Dev",
        FavProgramming_languages: ["Java", "Python", "C++", "JavaScript", "C#"],
        Marks: {
            English: 90,
            Urdu: 95,
            Maths: 80,
            Physics: 70,
            Computer_Science: 85
        }
    }
];

console.log(studentsInfo[2].Marks.English);
console.log(studentsInfo[1].FavProgramming_languages[0]);

// // Function to display student information
// function displayStudentInfo(student) {
//     console.log("Name:", student.Name);
//     console.log("Age:", student.Age);
//     console.log("Registration Number:", student.Registration_Number);
//     console.log("Course:", student.Course);
//     console.log("Favorite Programming Languages:", student.FavProgramming_languages.join(", "));
    
//     console.log("Marks:");
//     for (const subject in student.Marks) {
//         console.log(`${subject}: ${student.Marks[subject]}`);
//     }
    
//     console.log("-------------------------------");
// }

// // Display information for each student
// studentsInfo.forEach(student => {
//     displayStudentInfo(student);

//     // Display the first and last favorite programming languages
//     console.log("First Favorite Programming Language:", student.FavProgramming_languages[0]);
//     console.log("Last Favorite Programming Language:", student.FavProgramming_languages[student.FavProgramming_languages.length - 1]);

//     // Display marks of any 2 subjects
//     console.log("Marks of English:", student.Marks.English);
//     console.log("Marks of Maths:", student.Marks.Maths);

//     console.log("===================================");
// });

