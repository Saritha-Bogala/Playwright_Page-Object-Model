module.exports =
class LogOut{

    constructor(page){
        this.page = page;
        this.SignOutButton = "//button[text()='Sign Out']"
    }

    async clickSignOutButton(){
        await this.page.click(this.SignOutButton)
    }
}