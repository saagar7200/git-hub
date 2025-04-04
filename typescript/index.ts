// int y = 20
// let x = 10

// let x:number = 10

// x = ''

// let x

// x = 10

let x = 10;
// x=''
let y: string;
let bol: boolean;
let z: undefined;
let a: null;

let value: any;
value = 10;
value = "";
value = true;

// const add = () => {};

console.log("hello");

const numbers: Array<number> = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const numbers2: number[] = [1, 2, 3, 4, 5];

// tuples

const tuple: [number, string, boolean] = [1, "hello", true];

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

function add(a: number, b: number): number {
	return a + b;
}

add(10, 20);

function returnLastEl(arr: number[]): number {
	return arr[0];
}

returnLastEl([1, 2, 3, 4]);

// enum

enum Role {
	admin = "ADMIN",
	user = "USER",
	super_admin = "SUPER_ADMIN",
}

interface IUser {
	name: string;
	id: number;
	role: Role;
}

const user: IUser = {
	name: "Sagar",
	id: 1,
	role: Role.admin,
};
console.log(user);

// type

type ID = string | number;

type User = {
	name: string;
	id: ID;
	role?: Role;
};

// const person:User = {

// }

type Email = {
	email: string;
	department: string;
};

type Emp = User & Email;

const emp1: Emp = {
	name: "Sagar",
	id: "1",
	// role: Role.admin,
	email: "",
	department: "",
};

// emp1.name = "";

type Status = "success" | "failed";

let status1: Status;

status1 = "success";
status1 = "failed";

// generic

function getEl<T>(arr: T[]): T {
	return arr[0];
}

getEl<number>([1, 2, 3]);
getEl<string>(["1", "2", "3"]);
getEl<IUser>([user]);

// fuc(8) => [8]
// fuc('hello') => [hello]

// function wraper<T>(value: T | T[]): T[] {
// 	if (Array.isArray(value)) {
// 		return value;
// 	}
// 	return [value];
// }

// wraper(8); //[8]
// wraper<number>([10]); // [10]

interface Contetnt<T> {
	content: T;
}

const obj: Contetnt<string> = {
	content: "",
};

const obj1: Contetnt<number> = {
	content: 10,
};
