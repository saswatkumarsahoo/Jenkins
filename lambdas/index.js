exports.handler = function(event, context, callback) {
  console.log("Hello World from->"+event.key);

callback(null, "Hello World from->"+event.key);  
}

console.log("Hello");