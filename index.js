const chalk = require('chalk');

class FriendlyDate extends Date {
    toFriendlyDateTime() {
        return `${this.toLocaleDateString()} ${this.toLocaleTimeString()}`;
    }
}

function GitHubPackagesPOC() {
    let timestamp = new FriendlyDate(FriendlyDate.now()).toFriendlyDateTime();
    console.log(`${chalk.bold.yellow(`${timestamp}`)} ${chalk.bold.italic.green('Great Success!!')}`);
}

module.exports = GitHubPackagesPOC;