const converter = require('swagger2openapi');

// Define your Swagger object
const swagger = {
  // Your Swagger definition goes here
};

let options = {};
//options.patch = true; // fix up small errors in the source definition
//options.warnOnly = true; // Do not throw on non-patchable errors
converter.convertObj(swagger, options, function(err, convertedObj) {
  if (err) {
    console.error('Error converting Swagger to OpenAPI:', err);
  } else {
    // Converted OpenAPI object
    console.log('Converted OpenAPI:', convertedObj);
    // Handle the converted OpenAPI object as needed
  }
});
