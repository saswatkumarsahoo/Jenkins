exports.handler = function(event, context, callback) {
  console.log("Hello World from->"+event.key);

callback("Error !!!!!!", "Hello World from->"+event.key);  
}

console.log("Hello");