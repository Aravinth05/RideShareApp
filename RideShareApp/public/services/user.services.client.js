(function(){
    angular
        .module("RideShareApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            logout: logout,
            register: register,
            findAllUsers: findAllUsers,
            updateUser: updateUser
           
        };
        return api;
     
        function logout() {
            return $http.post("/api/logout");
        }

        function updateUser(userId, user) {
            return $http.put('/api/user/'+userId, user);
        }

        function findAllUsers() {
            return $http.get("/api/user");
        }

        function register(user) {
            return $http.post("/api/register", user);
        }

        function login(user) {
            return $http.post("/api/login", user);
        }
    }
})();