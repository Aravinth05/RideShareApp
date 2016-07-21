(function()
{
    angular
        .module("RideShareApp")
        .controller('EditProfileCtrl', EditProfileCtrl);
    
    function EditProfileCtrl($scope, UserService)
    {
        $scope.update = update;

        function update(user)
        {
            alert(user._id);
            UserService
                .updateUser(user._id, user)
                .then( 
                    
                    function(response) {
                    $scope.users = response.data;
                       
                    },
                    function(err) {
                        $scope.error = err;
                    }
                );
        }

       
    }
})();
