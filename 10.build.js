(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("apps.contact.controller",[]).controller("ContactCtrl",["$scope","$http","$filter","DATA_BASE",function($scope,$http,$filter,DATA_BASE){$scope.items=DATA_BASE.contact.items,angular.forEach($scope.items,function(item){item.avatar=$scope.commonImages.a0}),$scope.item=$filter("orderBy")($scope.items,"first")[0],$scope.item.selected=!0,$scope.filter="",$scope.groups=[{name:"工作"},{name:"家庭"},{name:"朋友"},{name:"队友"},{name:"小组"}],$scope.createGroup=function(){var group={name:"New Group"};group.name=$scope.checkItem(group,$scope.groups,"name"),$scope.groups.push(group)},$scope.checkItem=function(obj,arr,key){var i=0;return angular.forEach(arr,function(item){if(0==item[key].indexOf(obj[key])){var j=item[key].replace(obj[key],"").trim();i=j?Math.max(i,parseInt(j)+1):1}}),obj[key]+(i?" "+i:"")},$scope.deleteGroup=function(item){$scope.groups.splice($scope.groups.indexOf(item),1)},$scope.selectGroup=function(item){angular.forEach($scope.groups,function(item){item.selected=!1}),$scope.group=item,$scope.group.selected=!0,$scope.filter=item.name},$scope.selectItem=function(item){angular.forEach($scope.items,function(item){item.selected=!1,item.editing=!1}),$scope.item=item,$scope.item.selected=!0},$scope.deleteItem=function(item){$scope.items.splice($scope.items.indexOf(item),1),$scope.item=$filter("orderBy")($scope.items,"first")[0],$scope.item&&($scope.item.selected=!0)},$scope.createItem=function(){var item={group:"Friends",avatar:$scope.commonImages.a0};$scope.items.push(item),$scope.selectItem(item),$scope.item.editing=!0},$scope.editItem=function(item){item&&item.selected&&(item.editing=!0)},$scope.doneEditing=function(item){item.editing=!1}}])}}]);