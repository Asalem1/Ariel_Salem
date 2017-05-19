angular.module('website', [
  'website.home',
  'website.projects',
  'website.about',
  'ngRoute',
  // 'formly',
  // 'formlyBootstrap'
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
  .when('/about', {
    templateUrl: 'partials/about/about.html',
    controller: 'projectsController'
  })
  .otherwise('/', {
    redirectTo: '/'
  });
})
