(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{23:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _note_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);__webpack_exports__.default=angular.module("apps.note",[_note_controller__WEBPACK_IMPORTED_MODULE_0__.default.name])},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("apps.note.controller",[]).controller("NoteCtrl",["$scope","$http","DATA_BASE",function($scope,$http,DATA_BASE){$scope.notes=DATA_BASE.note.notes,$scope.note=$scope.notes[0],$scope.notes[0].selected=!0,$scope.colors=["primary","info","success","warning","danger","dark"],$scope.createNote=function(){var note={content:"",color:$scope.colors[Math.floor(3*Math.random())],date:Date.now()};$scope.notes.push(note),$scope.selectNote(note)},$scope.deleteNote=function(note){$scope.notes.splice($scope.notes.indexOf(note),1),note.selected&&($scope.note=$scope.notes[0],$scope.notes.length&&($scope.notes[0].selected=!0))},$scope.selectNote=function(note){angular.forEach($scope.notes,function(note){note.selected=!1}),$scope.note=note,$scope.note.selected=!0}}])}}]);