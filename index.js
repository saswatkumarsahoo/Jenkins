exports.handler = function(event, context, callback) {
  console.log("Hello World from->"+event.key);

callback(null, event);  
}

console.log("Hello");