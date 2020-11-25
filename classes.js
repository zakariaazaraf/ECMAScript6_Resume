class User {

    // DECLARING THE CONSTRUCTOR
    constructor (name, email){ 
        this.name = name;
        this.email = email;
    }

    // DECLARING THE METHODS
    getEmail (){
        return this.email;
    }

    getName(){
        return this.name;
    }

}

// EXPOTING THE CLASS USER
export default User ;