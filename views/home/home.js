angular.module("myapp").controller("homeCtrl",function($scope,$http){

    $http.get("json/hot_products.json").success(function(data){
        $scope.products=data;
    });

        //下拉刷新
        $scope.refresh=function(){
            //向服务器端请求新的数据，替换掉现有的数据
            $http.get("json/data.json").success(function(data){
                $scope.products=data;
            }).finally(function(){
                //通知框架，刷新结束，停止显示图标
                $scope.$broadcast("scroll.refreshComplete");
            })
        };


        $scope.loadMore=function(){
            $http.get("json/data.json").success(function(data){
                //使用Array的原型方法push,等价于$scope.products.push(data)
                Array.prototype.push.apply($scope.products,data);
            }).finally(function(){
                //通知框架，加载结束，停止显示图标
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
        }
});