let n ="name";
let a ="age";

const user = {
    [n]: "Mike",
    [a]: 25,
    [5+1]: 6, //계산식도 가능하다.
};

const result = Object.keys(user); //key값이 배열로 변환시켜 반환한다.
const resultValues = Object.values(user); //property값이 배열로 변환시켜 반환한다.
const resultEntries = Object.entries(user);//key값과 property값을 같이 배열로 반환시켜준다. 반대의 결과(객체를 배열로)얻어야할 경우 "fromEntries"를 사용한다.

console.log("Computed-Proterty test");
console.log(user);

console.log("Object.keys");
console.log(result); 

console.log("Object.values");
console.log(resultValues); 

console.log("Object.entries");
console.log(resultEntries); 



//어떤게 key가 될지 모를때 유용하다.
function makeObj(key, val) {
    return {
        [key]: val,
    };
}

const obj = makeObj("sex", "male");

console.log(obj);


//객체를 복사할떄 

const user1 = {
    name: "Mike",
    age: 35,
};

const user2 = Object.assign({}, user1);
//{}기존에 있는거에 user1을 대입한다. 
user2.name ="codnr";

console.log("객체 복사 test");
console.log(user1);
console.log(user2);

