exports.handler = function(event, context, callback) {
  console.log("Hello "+event.key);

callback(null, event);  
}

console.log("Hello");