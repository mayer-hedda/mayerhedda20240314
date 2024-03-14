export class LoginUser{
    public username!: string;
    public password!: string;
    private isLoggedIn!: boolean;

    constructor(username: string = "", password: string = ""){
        this.username = username;
        this.password = password;
    }

    login(){
        this.isLoggedIn = true;
    }

    logout(){
        this.isLoggedIn = false;
    }
}