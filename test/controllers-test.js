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

describe("RecipeNewCtrl", function() {
  beforeEach(inject(function($controller) {
    this.scope = {}
    this.controller = $controller("RecipeNewCtrl", {$scope: this.scope})
  }));

  describe("submit", function() {
    it("posts the recipe to /recipes", inject(function($httpBackend) {
      $httpBackend.expect('POST', '/recipes', {ingredients: [], title: "Test"}).respond("cool")
      this.scope.currentRecipe.title = "Test"
      this.scope.submit()
      $httpBackend.flush()
    }));
  });

  describe("addIngredient", function() {
    it("adds an ingredient", function() {
      var newIngredient = {title: "Sugar"};
      this.scope.addIngredient(newIngredient);
      expect(this.scope.currentRecipe.ingredients.length).toEqual(1);
      expect(this.scope.currentRecipe.ingredients[0].title).toEqual("Sugar");
    });
  });

  describe("removeIngredient", function() {
    it("removes an ingredient", function() {
      testIngredients = [{title: "Sugar"}, {title: "Water"}];
      this.scope.currentRecipe.ingredients = testIngredients
      this.scope.removeIngredient(testIngredients[0]);
      expect(this.scope.currentRecipe.ingredients).toEqual([{title: "Water"}]);
    });
  });
});
