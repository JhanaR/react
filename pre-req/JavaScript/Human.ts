class Human{
    //data
    public name:string;
    private age:number;
    private maritalStatus : boolean;
    private  height:number ;
    //functions
    //constructor
    constructor(name:string,age:number,maritalStatus:boolean,height:number){
            this.name = name ;
            this.age = age;
            this.maritalStatus = maritalStatus;
            this.height = height;
    }
    public showInfo(){
        console.log(" Name ",this.name);
        console.log(" Age ",this.age);
        console.log(" Marital Status ",this.maritalStatus);
        console.log(" Height ",this.height);

    }
    public eating(item : string):void{
        //Ram love to eat cookies
        console.log(this.name,' love to eat ',item);
    }
    public sleeping(hours:number):void{
       console.log(this.name,' love to sleep ',hours,'hours per day');
    }
    public walking(kms:number):void{
       console.log(this.name,' love to walk ',kms,' per day');
    }
}
let humanObject = new Human('sachin',33,true,6.3);
humanObject.name="krishna";
//let humanObject1 = new Human('kumar',35,false,5.6);
humanObject.showInfo();
humanObject.eating('pizza');
humanObject.sleeping(8);
humanObject.walking(5);
//humanObject1.showInfo();