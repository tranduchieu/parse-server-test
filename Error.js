import Parse from 'parse/node';

var Note = Parse.Object.extend('Note');
var query = new Parse.Query(Note);
query.get("aBcDeFgH", {
  success: function(results) {
    // This function will *not* be called.
    console.log("Everything went fine!");
  },
  error: function(model, error) {
    // This will be called.
    // error is an instance of Parse.Error with details about the error.
    if (error.code === Parse.Error.OBJECT_NOT_FOUND) {
      console.error("Uh oh, we couldn't find the object!");
    }
  }
});
