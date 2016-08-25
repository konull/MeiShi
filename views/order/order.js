angular.module("myapp").controller("orderCtrl",function($scope,$http){
        $scope.products=[
            {name:"淘宝商品1",desc:"这是一件物美价廉的商品",imgsrc:"images/des_01.jpg"},
            {name:"淘宝商品2",desc:"这是一件物美价廉的商品",imgsrc:"images/des_01.jpg"},
            {name:"淘宝商品3",desc:"这是一件物美价廉的商品",imgsrc:"images/des_01.jpg"},
            {name:"淘宝商品4",desc:"这是一件物美价廉的商品",imgsrc:"images/des_01.jpg"}
        ];

        $scope.data={
            showDelete:false,
            showReorder:false
        };

        $scope.delete=function(obj){
            //找到元素的索引值
            var index=$scope.products.indexOf(obj);

            //删除该索引处的元素
            $scope.products.splice(index,1);//从索引号开始删几个
        };
        $scope.reOrder=function(obj,form,to){
            //先将该元素从from处删除
            $scope.products.splice(form,1);

            //再将该元素插入到to处
            $scope.products.splice(to,0,obj)
        };

        $scope.edit=function(obj){
            alert(obj.name);
        };

        $scope.share=function(obj){
            alert(obj.desc);
        };

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