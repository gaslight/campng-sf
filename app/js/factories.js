//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function() {
  var recipes = {
    all: function(){
      return []
    }
  }

  return recipes
});
