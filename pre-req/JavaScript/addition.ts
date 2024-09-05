class Addition{
     num1:number;
     num2:number;
     addition():number{
        return this.num1+this.num2;
    }
}
let obj1= new Addition();
obj1.num1 = 10;
obj1.num2 = 20;

let result = obj1.addition();
console.log(result);