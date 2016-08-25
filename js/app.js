var myapp=angular.module("myapp",["ionic"]);

//配置路由
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    $ionicConfigProvider.backButton.text("");//清除返回图标的文字内容
    $ionicConfigProvider.backButton.previousTitleText("");//清除返回图标的文字内容

    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });

    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,//抽象的
        templateUrl:"views/tabs/tabs.html"
    });

    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });

    $stateProvider.state("tabs.detail",{
        url:"/detail",
        views:{"tab-home":{templateUrl:"views/detail/detail.html"}}
        //将指定的模板页面插入到名为tab-homer ionNavView中
    });

    $stateProvider.state("tabs.classify",{
        url:"/classify",
        views:{"tab-classify":{templateUrl:"views/classify/classify.html",controller:"homeCtrl"}}
    });

    $stateProvider.state("tabs.order",{
        url:"/order",
        views:{"tab-order":{templateUrl:"views/order/order.html",controller:"orderCtrl"}}
    });

    $stateProvider.state("tabs.about",{
        url:"/about",
        views:{"tab-about":{templateUrl:"views/about/about.html"}}
    });


    //默认路由
    $urlRouterProvider.otherwise("/tour");

});