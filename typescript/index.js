// int y = 20
// let x = 10
// let x:number = 10
// x = ''
// let x
// x = 10
var x = 10;
// x=''
var y;
var bol;
var z;
var a;
var value;
value = 10;
value = "";
value = true;
// const add = () => {};
console.log("hello");
var numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4, 5];
// tuples
var tuple = [1, "hello", true];
// interface
// interface IUser {
// 	name: string;
// 	userName?: string;
// 	age: number;
// 	id: number;
// }
// const user: IUser = {
// 	name: "Sagar",
// 	userName: "",
// 	age: 20,
// 	id: 1,
// };
// function
function add(a, b) {
    return a + b;
}
add(10, 20);
function returnLastEl(arr) {
    return arr[0];
}
returnLastEl([1, 2, 3, 4]);
// enum
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["super_admin"] = "SUPER_ADMIN";
})(Role || (Role = {}));
var user = {
    name: "Sagar",
    id: 1,
    role: Role.admin,
};
console.log(user);
