// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id ="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn= false

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Taufiq",
            lastname:"Khan"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)
const obj1 ={1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};
const obj3 ={5:"e",6:"f"};

// const obj4 =Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2,...obj3}

// console.log(obj4)

const users =[
    {
        name:"Taufiq"
    },
    {
        name:"Taufiq"
    },
    {
        name:"Taufiq"
    },
    {
        name:"Taufiq"
    }
]

// console.log(users[1].name)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course ={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Taufiq"
}

// course.courseInstructor;

const {courseInstructor: instructor} =course;
// console.log(courseInstructor)
console.log(instructor);

// {
//     "courseName":"js in hindi",
//     "price":"999",
//     "courseInstructor":"Taufiq"
// }

[
    {},
    {},
    {}
]