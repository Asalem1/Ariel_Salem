angular.module('website', [
  'website.home',
  'website.projects'
])

.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home/home.html',
    controller: 'homeController'
  })
  .when('/projects', {
    templateUrl: 'partials/projects/projects.html',
    controller: 'projectsController'
  })
  .otherwise('/', {
    redirectTo: '/'
  });
})