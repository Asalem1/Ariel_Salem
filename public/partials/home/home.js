angular.module('website.home', [])

.controller('homeController', function($scope, $location) {
  // toggles Cooking tab visibility in the nav bar
  // Recipes.visible();

  // // Get request made to get info
  // Recipes.getRecipes()
  // .then(function(data) {
  //   $scope.recipes = data;
  // });

  // // updates current recipe and redirects to cooking page upon click
  // $scope.updateCurrentRecipe = function(recipe) {
  //   Recipes.setCurrentRecipe(recipe);
  //   $location.path('/cooking');
  //   }
});
