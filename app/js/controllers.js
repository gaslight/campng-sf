//////////////////////////
// Controllers
//////////////////////////

angular.module("cookbook").controller("RecipesCtrl", function($scope, Recipe) {
  $scope.recipes = Recipe.all()
});

angular.module("cookbook").controller("RecipeDetailCtrl", function($scope, $routeParams, Recipe) {
  $scope.currentRecipe = {}
});
