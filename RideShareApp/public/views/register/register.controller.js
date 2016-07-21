(function()
{
    angular
        .module("RideShareApp")
        .controller("RegisterCtrl", RegisterCtrl);
        
    function RegisterCtrl($scope, $location, $rootScope, UserService)
    {
        $scope.register = register;

        function register(user)
        {
                UserService
                    .register(user)
                    .then(
                        function(response) {
                                 $location.url("/login");
                           
                        },
                        function(err) {
                            $scope.error = err;
                        }
                    );
             
        }

        $scope.login = login;
        function login()
        {
            $location.url("/login");
        }
    }
})();
