/**
 * Created by johnwozniak on 1/4/16.
 */

console.log('starting node');

var storage = require('node-persist');
    storage.initSync();



//username and password takes one arguemnt account
// account has three attributes
        //account.username  Pasdfas
        //account.passowrd  User123
        //account.name  Facebook
function createAccount(account){
    var accounts = storage.getItemSync('accounts');

    //if accounts is undefined (use typeof)
        //set accounts = [];
    if(typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    //push on new account

    //return account
    return account;

}

function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function(account) {
        if(account.name === accountName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;

    // create var accounts use getItemSync


    //iterate over the array, return matching account, else undefined



}

 createAccount({
     name     : 'Facebook',
     username : 'jjwozn0977',
     password : 'Jw11590!'
 });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
