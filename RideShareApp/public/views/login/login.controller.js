(function()
{
    angular
        .module("RideShareApp")
        .controller("LoginCtrl", LoginCtrl);
    
    function LoginCtrl($scope, $location, $rootScope, UserService)
    {
        $scope.login = login;

        function login(user)
        {
            if(user)
            UserService
                .login(user)
                .then(
                    function(response)
                    {
                        $rootScope.currentUser = response.data;
                        $location.url("/map");
                    },
                    function(err) { 
                        $scope.error = err;
                    }
                );
        }

        $scope.register = register;
        function register()
        {
            $location.url("/register");
        }
    }
  
})();
