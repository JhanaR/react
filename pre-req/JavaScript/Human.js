var Human = /** @class */ (function () {
    //functions
    //constructor
    function Human(name, age, maritalStatus, height) {
        this.name = name;
        this.age = age;
        this.maritalStatus = maritalStatus;
        this.height = height;
    }
    Human.prototype.showInfo = function () {
        console.log(" Name ", this.name);
        console.log(" Age ", this.age);
        console.log(" Marital Status ", this.maritalStatus);
        console.log(" Height ", this.height);
    };
    Human.prototype.eating = function (item) {
        //Ram love to eat cookies
        console.log(this.name, ' love to eat ', item);
    };
    Human.prototype.sleeping = function (hours) {
        console.log(this.name, ' love to sleep ', hours, 'hours per day');
    };
    Human.prototype.walking = function (kms) {
        console.log(this.name, ' love to walk ', kms, ' per day');
    };
    return Human;
}());
var humanObject = new Human('sachin', 33, true, 6.3);
var humanObject1 = new Human('kumar', 35, false, 5.6);
humanObject.showInfo();
humanObject.eating('pizza');
humanObject.sleeping(8);
humanObject.walking(5);
//humanObject1.showInfo();
