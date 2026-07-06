module.exports =
class LoginPages{

    constructor(page){
        this.page=page;
        this.usernameInput = "#email1"
    this.passwordInput = "#password1"
this.loginbutton = "button[type='submit']"}

    async loginToApplication(username, password)
    {
        await this.page.fill(this.usernameInput, username)
        await this.page.fill(this.passwordInput, password)
        await this.page.click(this.loginbutton)
    }
}
