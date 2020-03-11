/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 17:04:34
 */
"use strict";

import "./vendor/flexble/base.css";
import "./vendor/flexble/flexible";

import "./style.css";

import oclazyload from "oclazyload";

import run from "./js/run";
import config from "./js/config";
import router from "./js/router";

import appCtrl from "./js/controllers/app/app.controller";

// 'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngSanitize',
//     'ngTouch',
//     'ngStorage',
//     'ui.load',
//     'ui.jq',
//     'ui.validate',

angular.module('app', ['ui.router', oclazyload, 'ui.bootstrap']).run(run).config(config).config(router).controller('AppCtrl', appCtrl);