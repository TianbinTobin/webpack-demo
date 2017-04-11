/**
 * Created by Tianbin on 2017/4/10.
 */
var greeter = require('../css/greeter.css');

module.exports = function() {
    var greet = document.createElement('div');
    greet.setAttribute('class',greeter.root);
    greet.textContent = "Hi there and greetings!Change~~~";
    return greet;
};