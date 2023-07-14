type UserAccount = {
    username: string;
    password: string;
    savings: number;
};

class CashMachine {
    private currentUser?: UserAccount;

    get accountInfo() {
        if(this.currentUser === undefined) {
            return 'Current user has not login';
        }
        const {username, savings} = this.currentUser;
        return `${username} has savings: \$${savings}`;
    }
}