class Validator{
    constructor (email){
        this.mail = email;
    }

    validate(){
        let pattern = /[A-z0-9_.]+@[A-z0-9]+\.[a-z]/;
        let result = this.mail.search(pattern);

        if (this.mail == ""){
            return "Please enter email address";
        }
        if (result == -1){
            return "Email Address is Wrong";
        }
        else {
            return "Email Address is Correct";
        }
    }
}

