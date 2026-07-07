module.exports =
class LoginPages{

    constructor(page){
        this.page=page;

        //Locators
        this.usernameInput = "#email1"
    this.passwordInput = "#password1"
this.loginButton = "button[type='submit']"
//Update this locator if your application shows a different error message for invalid credentials
this.errorMessage = ".errorMessage"
    
}

    async enterUsername(username){
        await this.page.fill(this.usernameInput, username)
    }

    async enterpassword(password)
    {
        await this.page.type(this.passwordInput, password)
    }

    async clickLoginButton()
    {
        await this.loginButton.click()
    }

    async loginToApplication(username, password)
    {
        await this.enterUsername(username)
        await this.enterpassword(password)
        
    }
    async clickLoginButton()
    {
        await this.page.click(this.loginButton)

    }


    async getErrorMessage()
    {
        return await this .page.locator(this.errorMessage).textContent()
    }
}
