(window.webpackJsonp=window.webpackJsonp||[]).push([[7,22],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _imagecrop_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);__webpack_exports__.default=angular.module("app.form.imagecrop",[_imagecrop_controller__WEBPACK_IMPORTED_MODULE_0__.default.name])},7:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.form.imagecrop.controller",[]).controller("ImgCropCtrl",["$scope",function($scope){$scope.myImage="",$scope.myCroppedImage="",$scope.cropType="circle";angular.element(document.querySelector("#fileInput")).on("change",function(evt){var file=evt.currentTarget.files[0],reader=new FileReader;reader.onload=function(evt){$scope.$apply(function($scope){$scope.myImage=evt.target.result})},reader.readAsDataURL(file)})}])}}]);