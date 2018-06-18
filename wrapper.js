//This is a wrapper function that wraps every js module in modular javascript
//You will not need to add this, this is automatically added at runtime
(function (exports, module, require, __filename, __dirname) {

    function helloWorld(name) {

        return "Hello " + name;
    }

    function printPaths() {
        //gives you the path to the current file
        console.log(__filename);
        //gives you the current directory
        console.log(__dirname);
    }


    module.exports.hello = helloWorld;
    module.exports.printPaths = printPaths;

});