(function() {
    angular.module("RideShareApp")
        .config(function($routeProvider, $httpProvider) {
            $routeProvider
           
              .when('/map', {
                  templateUrl: 'views/profile/profile.view.html',
                  controller: 'ProfileCtrl',
                  resolve: {
                     loggedin: checkLoggedin
                  }
              })
              .when('/login', {
            templateUrl: 'views/login/login.view.html',
            controller: 'LoginCtrl',
                 })
              .when('/register', {
                  templateUrl: 'views/register/register.view.html',
                  controller: 'RegisterCtrl',
                  
                })
              .when('/profile', { 
            templateUrl: 'views/profile/edit_profile/profile.view.html',
            controller: 'EditProfileCtrl',
            resolve: {
                loggedin: checkLoggedin
            }
        })
              .otherwise({
                  redirectTo: '/login'
              });
        });
    

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();
    
        $http.get('/api/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
            // User is Not Authenticated
            else
            {
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                $location.url('/login');
            }
        });
        
        return deferred.promise;
    };
    

  
})();

