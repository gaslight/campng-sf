describe("RecipesCtrl", function() {
  beforeEach(inject(function($controller, $httpBackend) {
    var fakeRecipes = [{ title: "Pancakes", description: "big and fluffy" }, {}, {}]
    $httpBackend.when('GET', '/recipes').respond(fakeRecipes);
    this.scope = {}
    this.controller = $controller("RecipesCtrl", {$scope: this.scope})
    $httpBackend.flush();
  }));

  describe("recipes", function() {
    it("is an array of 3 recipes", function() {
      expect(this.scope.recipes.length).toEqual(3);
    });
  });
});

describe("RecipeDetailCtrl", function() {
  beforeEach(inject(function($controller, $httpBackend) {
    var fakeRecipe = { title: "Pancakes", description: "big and fluffy" }
    $httpBackend.when('GET', '/recipes/1').respond(fakeRecipe);
    this.scope = {}
    this.routeParams = { recipeId: 1 }
    this.controller = $controller("RecipeDetailCtrl", {$scope: this.scope, $routeParams: this.routeParams})
    $httpBackend.flush();
  }));

  describe("currentRecipe", function() {
    it("is the first recipe", function() {
      expect(this.scope.currentRecipe.title).toEqual("Pancakes");
    });
  });
});
