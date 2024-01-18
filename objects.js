// singleton - ensures single instance in a class throughout lifetime of application
const mySym = Symbol("keys")
const Jsuser = {
    name : "Manish",
    batch : "2023-27",
    "branch" : "CSE",
    emailId : "test@gmail.com",
    CGPA : 8,
    mySym: "mykeys",

}
console.log(Jsuser.name);
console.log(Jsuser["branch"]);
console.log(mySym);
console.log(typeof Jsuser.mySym);
// Bye bye for today will meet you tommorow