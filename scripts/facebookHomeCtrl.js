myApp.controller("facebookHomeCtrl", function ($scope,$facebook) {

    loadData();

    $scope.ifIsLogged = false;

    $scope.login = function () {

        //login into my Facebook Profile
        $facebook.login().then(function()   {
            $scope.ifIsLogged = true;
            loadData();
            
        })
    };

    $scope.logout = function () {

        $facebook.logout().then(function () {
            $scope.ifIsLogged = false;
            loadData();
        });
    };

    //function that load my data into my Facebook Profile
    function loadData() {
        
        //Ajax call into my Facebook Profile and i require this informations
        $facebook.api("/me?fields=first_name,last_name,email,gender,locale,link").then(function (response) {

            $scope.welcomeMessage = "Welcome: " + response.first_name + " " + response.last_name;
            $scope.infoProfile = response;

            //Require Photo path profile into my Facebook Profile
            $facebook.api("/me/picture").then(function (response) {
                $scope.picture = response.data.url;

                //require my posts into my Facebook Profile
                $facebook.api("/me/posts").then(function (response) {

                    $scope.posts = response.data;

                })
            });
        },
        //if promise of my Ajax call will be negative, show this message into the view
         function (err) {

             $scope.welcomeMessage = "Please Log in";
         });
    };

    $scope.toPost = function () {

        var post = $scope.myPost;

        //request all posts of my Facebook Profile
        $facebook.api("/me/feed", "post", { message: post }).then(function(response)   {
        
            loadData();
        
        })

    };

});
