(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.dashboard.controller",[]).controller("FlotChartDemoCtrl",["$scope","$templateCache",function($scope,$templateCache){$scope.d=[[1,6.5],[2,6.5],[3,7],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7],[11,6.8],[12,7]],$scope.d0_1=[[0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7]],$scope.d0_2=[[0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3]],$scope.d1_1=[[10,120],[20,70],[30,70],[40,60]],$scope.d1_2=[[10,50],[20,60],[30,90],[40,35]],$scope.d1_3=[[10,80],[20,40],[30,30],[40,20]],$scope.d2=[];for(var i=0;i<20;++i)$scope.d2.push([i,Math.sin(i)]);$scope.d3=[{label:"iPhone5S",data:40},{label:"iPad Mini",data:10},{label:"iPad Mini Retina",data:20},{label:"iPhone4S",data:12},{label:"iPad Air",data:18}],$scope.refreshData=function(){$scope.d0_1=$scope.d0_2},$scope.getRandomData=function(){var data=[];for(0<data.length&&(data=data.slice(1));data.length<12;){var y=(0<data.length?data[data.length-1]:50)+10*Math.random()-5;y<0?y=0:100<y&&(y=100),data.push(y)}for(var res=[],i=0;i<data.length;++i)res.push([i+1,data[i]]);return res},$scope.d4=$scope.getRandomData()}])}}]);