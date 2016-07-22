var myApp = angular.module("myApp", ["ngRoute", "ngFacebook"]);

myApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/home", {

        templateUrl: "views/home.html",
        controller: "facebookHomeCtrl"

    })

    .otherwise({ redirectTo: "/home" });
}])

    //configure ngFacebook module
.config(["$facebookProvider", function ($facebookProvider) {

    //Configure ngFacebook with $facebookProvider object
    //all sdk functions that use with ngFacebook, will be executed into Facebook application
    $facebookProvider.setAppId("YourIDApplication");

    //all sdk function that use with ngFacebook, have this permissions
    $facebookProvider.setPermissions("email, public_profile, user_posts, publish_actions, user_photos");

}])
//my Angular Module will load Facebook SDK
.run(function ($rootScope) {

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});
