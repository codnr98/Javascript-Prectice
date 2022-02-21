//constructor function
//생성자 함수는 보통 첫글자를 대문자로 하여 함수를 만들어 준다.
function Item(title, price){
    //this = {}

    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`);
    }

    // return this;
}


const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 5000);
 //new를 사용해서 함수를 호출하면 return 문 없이 객체를 반환시킬 수 있다.
console.log(item1, item2, item3);

item3.showPrice();