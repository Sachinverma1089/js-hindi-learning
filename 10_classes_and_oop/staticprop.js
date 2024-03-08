class User{
    constructor(username){
        this.username=username
    }

    logME(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `12`
    }
}

const sachin = new User("sachin")
// console.log(sachin.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)

        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId());
