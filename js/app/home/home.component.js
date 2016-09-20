

angular.module("home").component("home", {
    templateUrl: '/home/testexam/Documents/AngularJsCode (copy)/js/app/home/home.template.html',
    controller: function homeController($http) {
        var self = this;
        $http.get('/home/testexam/Documents/AngularJsCode (copy)/data/cart.json').then(function(response) {
            self.phones = response.data;
        });

    }
});