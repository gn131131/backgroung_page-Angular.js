(window.webpackJsonp=window.webpackJsonp||[]).push([[11,27],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.table.grid.controller",[]).controller("GridDemoCtrl",["$scope","$http",function($scope,$http){$scope.filterOptions={filterText:"",useExternalFilter:!0},$scope.totalServerItems=0,$scope.pagingOptions={pageSizes:[250,500,1e3],pageSize:250,currentPage:1},$scope.setPagingData=function(data,page,pageSize){var pagedData=data.slice((page-1)*pageSize,page*pageSize);$scope.myData=pagedData,$scope.totalServerItems=data.length,$scope.$$phase||$scope.$apply()},$scope.getPagedDataAsync=function(pageSize,page,searchText){setTimeout(function(){var data;__webpack_require__.e(38).then(__webpack_require__.t.bind(null,16,3)).then(function(jsonData){if(searchText){var ft=searchText.toLowerCase();data=jsonData.default.filter(function(item){return-1!=JSON.stringify(item).toLowerCase().indexOf(ft)}),$scope.setPagingData(data,page,pageSize)}else $scope.setPagingData(jsonData.default,page,pageSize)})},100)},$scope.getPagedDataAsync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage),$scope.$watch("pagingOptions",function(newVal,oldVal){newVal!==oldVal&&newVal.currentPage!==oldVal.currentPage&&$scope.getPagedDataAsync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage,$scope.filterOptions.filterText)},!0),$scope.$watch("filterOptions",function(newVal,oldVal){newVal!==oldVal&&$scope.getPagedDataAsync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage,$scope.filterOptions.filterText)},!0),$scope.gridOptions={data:"myData",enablePaging:!0,showFooter:!0,totalServerItems:"totalServerItems",pagingOptions:$scope.pagingOptions,filterOptions:$scope.filterOptions}}])},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _grid_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);__webpack_exports__.default=angular.module("app.table.grid",[_grid_controller__WEBPACK_IMPORTED_MODULE_0__.default.name])}}]);