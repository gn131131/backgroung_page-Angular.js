(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{65:function(module,exports,__webpack_require__){
/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.10
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(angular,window){"use strict";var regModules=["ng","oc.lazyLoad"],regInvokes={},regConfigs=[],modulesToLoad=[],realModules=[],recordDeclarations=[],broadcast=angular.noop,runBlocks={},justLoaded=[];angular.module("oc.lazyLoad",["ng"]).provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function($controllerProvider,$provide,$compileProvider,$filterProvider,$injector,$animateProvider){var modules={},providers={$controllerProvider:$controllerProvider,$compileProvider:$compileProvider,$filterProvider:$filterProvider,$provide:$provide,$injector:$injector,$animateProvider:$animateProvider},debug=!1,events=!1,moduleCache=[],modulePromises={};moduleCache.push=function(value){-1===this.indexOf(value)&&Array.prototype.push.apply(this,arguments)},this.config=function(config){angular.isDefined(config.modules)&&(angular.isArray(config.modules)?angular.forEach(config.modules,function(moduleConfig){modules[moduleConfig.name]=moduleConfig}):modules[config.modules.name]=config.modules),angular.isDefined(config.debug)&&(debug=config.debug),angular.isDefined(config.events)&&(events=config.events)},this._init=function(element){if(0===modulesToLoad.length){var elements=[element],names=["ng:app","ng-app","x-ng-app","data-ng-app"],NG_APP_CLASS_REGEXP=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,append=function(elm){return elm&&elements.push(elm)};angular.forEach(names,function(name){names[name]=!0,append(document.getElementById(name)),name=name.replace(":","\\:"),void 0!==element[0]&&element[0].querySelectorAll&&(angular.forEach(element[0].querySelectorAll("."+name),append),angular.forEach(element[0].querySelectorAll("."+name+"\\:"),append),angular.forEach(element[0].querySelectorAll("["+name+"]"),append))}),angular.forEach(elements,function(elm){if(0===modulesToLoad.length){var className=" "+element.className+" ",match=NG_APP_CLASS_REGEXP.exec(className);match?modulesToLoad.push((match[2]||"").replace(/\s+/g,",")):angular.forEach(elm.attributes,function(attr){0===modulesToLoad.length&&names[attr.name]&&modulesToLoad.push(attr.value)})}})}0!==modulesToLoad.length||(window.jasmine||window.mocha)&&angular.isDefined(angular.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");angular.forEach(modulesToLoad,function(moduleName){!function addReg(moduleName){if(-1===regModules.indexOf(moduleName)){regModules.push(moduleName);var mainModule=angular.module(moduleName);_invokeQueue(null,mainModule._invokeQueue,moduleName),_invokeQueue(null,mainModule._configBlocks,moduleName),angular.forEach(mainModule.requires,addReg)}}(moduleName)}),modulesToLoad=[],recordDeclarations.pop()};var stringify=function(obj){try{return JSON.stringify(obj)}catch(e){var cache=[];return JSON.stringify(obj,function(key,value){if(angular.isObject(value)&&null!==value){if(-1!==cache.indexOf(value))return;cache.push(value)}return value})}},hashCode=function(str){var i,len,hash=0;if(0==str.length)return hash;for(i=0,len=str.length;i<len;i++)hash=(hash<<5)-hash+str.charCodeAt(i),hash|=0;return hash};function _register(providers,registerModules,params){if(registerModules){var k,moduleName,moduleFn,tempRunBlocks=[];for(k=registerModules.length-1;0<=k;k--)if(moduleName=registerModules[k],angular.isString(moduleName)||(moduleName=getModuleName(moduleName)),moduleName&&-1===justLoaded.indexOf(moduleName)&&(!modules[moduleName]||-1!==realModules.indexOf(moduleName))){var newModule=-1===regModules.indexOf(moduleName);if(moduleFn=ngModuleFct(moduleName),newModule&&(regModules.push(moduleName),_register(providers,moduleFn.requires,params)),0<moduleFn._runBlocks.length)for(runBlocks[moduleName]=[];0<moduleFn._runBlocks.length;)runBlocks[moduleName].push(moduleFn._runBlocks.shift());angular.isDefined(runBlocks[moduleName])&&(newModule||params.rerun)&&(tempRunBlocks=tempRunBlocks.concat(runBlocks[moduleName])),_invokeQueue(providers,moduleFn._invokeQueue,moduleName,params.reconfig),_invokeQueue(providers,moduleFn._configBlocks,moduleName,params.reconfig),broadcast(newModule?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",moduleName),registerModules.pop(),justLoaded.push(moduleName)}var instanceInjector=providers.getInstanceInjector();angular.forEach(tempRunBlocks,function(fn){instanceInjector.invoke(fn)})}}function _registerInvokeList(args,moduleName){var invokeList=args[2][0],type=args[1],newInvoke=!1;angular.isUndefined(regInvokes[moduleName])&&(regInvokes[moduleName]={}),angular.isUndefined(regInvokes[moduleName][type])&&(regInvokes[moduleName][type]={});var onInvoke=function(invokeName,invoke){regInvokes[moduleName][type].hasOwnProperty(invokeName)||(regInvokes[moduleName][type][invokeName]=[]),function(potentialNew,invokes){var newHash,isNew=!0;invokes.length&&(newHash=signature(potentialNew),angular.forEach(invokes,function(invoke){isNew=isNew&&signature(invoke)!==newHash}));return isNew}(invoke,regInvokes[moduleName][type][invokeName])&&(newInvoke=!0,regInvokes[moduleName][type][invokeName].push(invoke),broadcast("ocLazyLoad.componentLoaded",[moduleName,type,invokeName]))};function signature(data){return angular.isArray(data)?hashCode(data.toString()):angular.isObject(data)?hashCode(stringify(data)):angular.isDefined(data)&&null!==data?hashCode(data.toString()):data}if(angular.isString(invokeList))onInvoke(invokeList,args[2][1]);else{if(!angular.isObject(invokeList))return!1;angular.forEach(invokeList,function(invoke,key){angular.isString(invoke)?onInvoke(invoke,invokeList[1]):onInvoke(key,invoke)})}return newInvoke}function _invokeQueue(providers,queue,moduleName,reconfig){var i,len,args,provider;if(queue)for(i=0,len=queue.length;i<len;i++)if(args=queue[i],angular.isArray(args)){if(null!==providers){if(!providers.hasOwnProperty(args[0]))throw new Error("unsupported provider "+args[0]);provider=providers[args[0]]}var isNew=_registerInvokeList(args,moduleName);if("invoke"!==args[1])isNew&&angular.isDefined(provider)&&provider[args[1]].apply(provider,args[2]);else{var callInvoke=function(fct){var invoked=regConfigs.indexOf(moduleName+"-"+fct);-1!==invoked&&!reconfig||(-1===invoked&&regConfigs.push(moduleName+"-"+fct),angular.isDefined(provider)&&provider[args[1]].apply(provider,args[2]))};if(angular.isFunction(args[2][0]))callInvoke(args[2][0]);else if(angular.isArray(args[2][0]))for(var j=0,jlen=args[2][0].length;j<jlen;j++)angular.isFunction(args[2][0][j])&&callInvoke(args[2][0][j])}}}function getModuleName(module){var moduleName=null;return angular.isString(module)?moduleName=module:angular.isObject(module)&&module.hasOwnProperty("name")&&angular.isString(module.name)&&(moduleName=module.name),moduleName}function moduleExists(moduleName){if(!angular.isString(moduleName))return!1;try{return ngModuleFct(moduleName)}catch(e){if(/No module/.test(e)||-1<e.message.indexOf("$injector:nomod"))return!1}}this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function($log,$rootElement,$rootScope,$cacheFactory,$q){var instanceInjector,filesCache=$cacheFactory("ocLazyLoad");function reject(e){var deferred=$q.defer();return $log.error(e.message),deferred.reject(e),deferred.promise}return debug||(($log={}).error=angular.noop,$log.warn=angular.noop,$log.info=angular.noop),providers.getInstanceInjector=function(){return instanceInjector||(instanceInjector=$rootElement.data("$injector")||angular.injector())},{_broadcast:broadcast=function(eventName,params){events&&$rootScope.$broadcast(eventName,params),debug&&$log.info(eventName,params)},_$log:$log,_getFilesCache:function(){return filesCache},toggleWatch:function(watch){watch?recordDeclarations.push(!0):recordDeclarations.pop()},getModuleConfig:function(moduleName){if(!angular.isString(moduleName))throw new Error("You need to give the name of the module to get");return modules[moduleName]?angular.copy(modules[moduleName]):null},setModuleConfig:function(moduleConfig){if(!angular.isObject(moduleConfig))throw new Error("You need to give the module config object to set");return modules[moduleConfig.name]=moduleConfig},getModules:function(){return regModules},isLoaded:function(modulesNames){var moduleLoaded=function(module){var isLoaded=-1<regModules.indexOf(module);return isLoaded=isLoaded||!!moduleExists(module)};if(angular.isString(modulesNames)&&(modulesNames=[modulesNames]),angular.isArray(modulesNames)){var i,len;for(i=0,len=modulesNames.length;i<len;i++)if(!moduleLoaded(modulesNames[i]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:getModuleName,_getModule:function(moduleName){try{return ngModuleFct(moduleName)}catch(e){throw(/No module/.test(e)||-1<e.message.indexOf("$injector:nomod"))&&(e.message='The module "'+stringify(moduleName)+'" that you are trying to load does not exist. '+e.message),e}},moduleExists:moduleExists,_loadDependencies:function(moduleName,localParams){var loadedModule,requires,diff,promisesList=[],self=this;if(null===(moduleName=self._getModuleName(moduleName)))return $q.when();try{loadedModule=self._getModule(moduleName)}catch(e){return reject(e)}return requires=self.getRequires(loadedModule),angular.forEach(requires,function(requireEntry){if(angular.isString(requireEntry)){var config=self.getModuleConfig(requireEntry);if(null===config)return void moduleCache.push(requireEntry);(requireEntry=config).name=void 0}if(self.moduleExists(requireEntry.name))return 0!==(diff=requireEntry.files.filter(function(n){return self.getModuleConfig(requireEntry.name).files.indexOf(n)<0})).length&&self._$log.warn('Module "',moduleName,'" attempted to redefine configuration for dependency. "',requireEntry.name,'"\n Additional Files Loaded:',diff),angular.isDefined(self.filesLoader)?void promisesList.push(self.filesLoader(requireEntry,localParams).then(function(){return self._loadDependencies(requireEntry)})):reject(new Error("Error: New dependencies need to be loaded from external files ("+requireEntry.files+"), but no loader has been defined."));if(angular.isArray(requireEntry)){var files=[];angular.forEach(requireEntry,function(entry){var config=self.getModuleConfig(entry);null===config?files.push(entry):config.files&&(files=files.concat(config.files))}),0<files.length&&(requireEntry={files:files})}else angular.isObject(requireEntry)&&requireEntry.hasOwnProperty("name")&&requireEntry.name&&(self.setModuleConfig(requireEntry),moduleCache.push(requireEntry.name));if(angular.isDefined(requireEntry.files)&&0!==requireEntry.files.length){if(!angular.isDefined(self.filesLoader))return reject(new Error('Error: the module "'+requireEntry.name+'" is defined in external files ('+requireEntry.files+"), but no loader has been defined."));promisesList.push(self.filesLoader(requireEntry,localParams).then(function(){return self._loadDependencies(requireEntry)}))}}),$q.all(promisesList)},inject:function(moduleName,argument_1,argument_2){var localParams=arguments.length<=1||void 0===argument_1?{}:argument_1,real=!(arguments.length<=2||void 0===argument_2)&&argument_2,self=this,deferred=$q.defer();if(angular.isDefined(moduleName)&&null!==moduleName){if(angular.isArray(moduleName)){var promisesList=[];return angular.forEach(moduleName,function(module){promisesList.push(self.inject(module,localParams,real))}),$q.all(promisesList)}self._addToLoadList(self._getModuleName(moduleName),!0,real)}if(0<modulesToLoad.length){var res=modulesToLoad.slice();!function loadNext(moduleName){moduleCache.push(moduleName),modulePromises[moduleName]=deferred.promise,self._loadDependencies(moduleName,localParams).then(function(){try{justLoaded=[],_register(providers,moduleCache,localParams)}catch(e){return self._$log.error(e.message),void deferred.reject(e)}0<modulesToLoad.length?loadNext(modulesToLoad.shift()):deferred.resolve(res)},function(err){deferred.reject(err)})}(modulesToLoad.shift())}else{if(localParams&&localParams.name&&modulePromises[localParams.name])return modulePromises[localParams.name];deferred.resolve()}return deferred.promise},getRequires:function(module){var requires=[];return angular.forEach(module.requires,function(requireModule){-1===regModules.indexOf(requireModule)&&requires.push(requireModule)}),requires},_invokeQueue:_invokeQueue,_registerInvokeList:_registerInvokeList,_register:_register,_addToLoadList:_addToLoadList,_unregister:function(modules){angular.isDefined(modules)&&angular.isArray(modules)&&angular.forEach(modules,function(module){regInvokes[module]=void 0})}}}],this._init(angular.element(window.document))}]);var bootstrapFct=angular.bootstrap;angular.bootstrap=function(element,modules,config){return regModules=["ng","oc.lazyLoad"],regInvokes={},regConfigs=[],modulesToLoad=[],realModules=[],recordDeclarations=[],broadcast=angular.noop,runBlocks={},justLoaded=[],angular.forEach(modules.slice(),function(module){_addToLoadList(module,!0,!0)}),bootstrapFct(element,modules,config)};var _addToLoadList=function(name,force,real){(0<recordDeclarations.length||force)&&angular.isString(name)&&-1===modulesToLoad.indexOf(name)&&(modulesToLoad.push(name),real&&realModules.push(name))},ngModuleFct=angular.module;angular.module=function(name,requires,configFn){return _addToLoadList(name,!1,!0),ngModuleFct(name,requires,configFn)},module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window),function(angular){"use strict";angular.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function($ocLazyLoad,$compile,$animate,$parse,$timeout){return{restrict:"A",terminal:!0,priority:1e3,compile:function(element){var content=element[0].innerHTML;return element.html(""),function($scope,$element,$attr){var model=$parse($attr.ocLazyLoad);$scope.$watch(function(){return model($scope)||$attr.ocLazyLoad},function(moduleName){angular.isDefined(moduleName)&&$ocLazyLoad.load(moduleName).then(function(){$animate.enter(content,$element),$compile($element.contents())($scope)})},!0)}}}}])}(angular),function(angular){"use strict";angular.module("oc.lazyLoad").config(["$provide",function($provide){$provide.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function($delegate,$q,$window,$interval){var useCssLoadPatch=!1,anchor=$window.document.getElementsByTagName("head")[0]||$window.document.getElementsByTagName("body")[0];return $delegate.buildElement=function(type,path,params){var el,loaded,deferred=$q.defer(),filesCache=$delegate._getFilesCache(),cacheBuster=function(url){var dc=(new Date).getTime();return 0<=url.indexOf("?")?"&"===url.substring(0,url.length-1)?url+"_dc="+dc:url+"&_dc="+dc:url+"?_dc="+dc};switch(angular.isUndefined(filesCache.get(path))&&filesCache.put(path,deferred.promise),type){case"css":(el=$window.document.createElement("link")).type="text/css",el.rel="stylesheet",el.href=!1===params.cache?cacheBuster(path):path;break;case"js":(el=$window.document.createElement("script")).src=!1===params.cache?cacheBuster(path):path;break;default:filesCache.remove(path),deferred.reject(new Error('Requested type "'+type+'" is not known. Could not inject "'+path+'"'))}el.onload=el.onreadystatechange=function(e){el.readyState&&!/^c|loade/.test(el.readyState)||loaded||(el.onload=el.onreadystatechange=null,loaded=1,$delegate._broadcast("ocLazyLoad.fileLoaded",path),deferred.resolve(el))},el.onerror=function(){filesCache.remove(path),deferred.reject(new Error("Unable to load "+path))},el.async=params.serie?0:1;var insertBeforeElem=anchor.lastChild;if(params.insertBefore){var element=angular.element(angular.isDefined(window.jQuery)?params.insertBefore:document.querySelector(params.insertBefore));element&&0<element.length&&(insertBeforeElem=element[0])}if(insertBeforeElem.parentNode.insertBefore(el,insertBeforeElem),"css"==type){var ua=$window.navigator.userAgent.toLowerCase();if(-1<ua.indexOf("phantomjs/1.9"))useCssLoadPatch=!0;else if(/iP(hone|od|ad)/.test($window.navigator.platform)){var v=$window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),iOSVersion=parseFloat([parseInt(v[1],10),parseInt(v[2],10),parseInt(v[3]||0,10)].join("."));useCssLoadPatch=iOSVersion<6}else if(-1<ua.indexOf("android")){var androidVersion=parseFloat(ua.slice(ua.indexOf("android")+8));useCssLoadPatch=androidVersion<4.4}else if(-1<ua.indexOf("safari")){var versionMatch=ua.match(/version\/([\.\d]+)/i);useCssLoadPatch=versionMatch&&versionMatch[1]&&parseFloat(versionMatch[1])<6}if(useCssLoadPatch)var tries=1e3,interval=$interval(function(){try{el.sheet.cssRules,$interval.cancel(interval),el.onload()}catch(e){--tries<=0&&el.onerror()}},20)}return deferred.promise},$delegate}])}])}(angular),function(angular){"use strict";angular.module("oc.lazyLoad").config(["$provide",function($provide){$provide.decorator("$ocLazyLoad",["$delegate","$q",function($delegate,$q){return $delegate.filesLoader=function(config,argument_1){var params=arguments.length<=1||void 0===argument_1?{}:argument_1,cssFiles=[],templatesFiles=[],jsFiles=[],promises=[],cachePromise=null,filesCache=$delegate._getFilesCache();$delegate.toggleWatch(!0),angular.extend(params,config);var pushFile=function(path){var m,file_type=null;if(angular.isObject(path)&&(file_type=path.type,path=path.path),cachePromise=filesCache.get(path),angular.isUndefined(cachePromise)||!1===params.cache){if(null!==(m=/^(css|less|html|htm|js)?(?=!)/.exec(path))&&(file_type=m[1],path=path.substr(m[1].length+1,path.length)),!file_type)if(null!==(m=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(path)))file_type=m[1];else{if($delegate.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!$delegate.jsLoader.hasOwnProperty("requirejs"))return void $delegate._$log.error("File type could not be determined. "+path);file_type="js"}"css"!==file_type&&"less"!==file_type||-1!==cssFiles.indexOf(path)?"html"!==file_type&&"htm"!==file_type||-1!==templatesFiles.indexOf(path)?"js"===file_type||-1===jsFiles.indexOf(path)?jsFiles.push(path):$delegate._$log.error("File type is not valid. "+path):templatesFiles.push(path):cssFiles.push(path)}else cachePromise&&promises.push(cachePromise)};if(params.serie?pushFile(params.files.shift()):angular.forEach(params.files,function(path){pushFile(path)}),0<cssFiles.length){var cssDeferred=$q.defer();$delegate.cssLoader(cssFiles,function(err){angular.isDefined(err)&&$delegate.cssLoader.hasOwnProperty("ocLazyLoadLoader")?($delegate._$log.error(err),cssDeferred.reject(err)):cssDeferred.resolve()},params),promises.push(cssDeferred.promise)}if(0<templatesFiles.length){var templatesDeferred=$q.defer();$delegate.templatesLoader(templatesFiles,function(err){angular.isDefined(err)&&$delegate.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?($delegate._$log.error(err),templatesDeferred.reject(err)):templatesDeferred.resolve()},params),promises.push(templatesDeferred.promise)}if(0<jsFiles.length){var jsDeferred=$q.defer();$delegate.jsLoader(jsFiles,function(err){angular.isDefined(err)&&($delegate.jsLoader.hasOwnProperty("ocLazyLoadLoader")||$delegate.jsLoader.hasOwnProperty("requirejs"))?($delegate._$log.error(err),jsDeferred.reject(err)):jsDeferred.resolve()},params),promises.push(jsDeferred.promise)}if(0!==promises.length)return params.serie&&0<params.files.length?$q.all(promises).then(function(){return $delegate.filesLoader(config,params)}):$q.all(promises).finally(function(res){return $delegate.toggleWatch(!1),res});var deferred=$q.defer(),err="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return $delegate._$log.error(err),deferred.reject(err),deferred.promise},$delegate.load=function(originalModule){var errText,originalParams=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],self=this,config=null,deferredList=[],deferred=$q.defer(),module=angular.copy(originalModule),params=angular.copy(originalParams);if(angular.isArray(module))return angular.forEach(module,function(m){deferredList.push(self.load(m,params))}),$q.all(deferredList).then(function(res){deferred.resolve(res)},function(err){deferred.reject(err)}),deferred.promise;if(angular.isString(module)?config=(config=self.getModuleConfig(module))||{files:[module]}:angular.isObject(module)&&(config=angular.isDefined(module.path)&&angular.isDefined(module.type)?{files:[module]}:self.setModuleConfig(module)),null===config)return errText='Module "'+(self._getModuleName(module)||"unknown")+'" is not configured, cannot load.',$delegate._$log.error(errText),deferred.reject(new Error(errText)),deferred.promise;angular.isDefined(config.template)&&(angular.isUndefined(config.files)&&(config.files=[]),angular.isString(config.template)?config.files.push(config.template):angular.isArray(config.template)&&config.files.concat(config.template));var localParams=angular.extend({},params,config);return angular.isUndefined(config.files)&&angular.isDefined(config.name)&&$delegate.moduleExists(config.name)?$delegate.inject(config.name,localParams,!0):($delegate.filesLoader(config,localParams).then(function(){$delegate.inject(null,localParams).then(function(res){deferred.resolve(res)},function(err){deferred.reject(err)})},function(err){deferred.reject(err)}),deferred.promise)},$delegate}])}])}(angular),function(angular){"use strict";angular.module("oc.lazyLoad").config(["$provide",function($provide){$provide.decorator("$ocLazyLoad",["$delegate","$q",function($delegate,$q){return $delegate.cssLoader=function(paths,callback,params){var promises=[];angular.forEach(paths,function(path){promises.push($delegate.buildElement("css",path,params))}),$q.all(promises).then(function(){callback()},function(err){callback(err)})},$delegate.cssLoader.ocLazyLoadLoader=!0,$delegate}])}])}(angular),function(angular){"use strict";angular.module("oc.lazyLoad").config(["$provide",function($provide){$provide.decorator("$ocLazyLoad",["$delegate","$q",function($delegate,$q){return $delegate.jsLoader=function(paths,callback,params){var promises=[];angular.forEach(paths,function(path){promises.push($delegate.buildElement("js",path,params))}),$q.all(promises).then(function(){callback()},function(err){callback(err)})},$delegate.jsLoader.ocLazyLoadLoader=!0,$delegate}])}])}(angular),function(angular){"use strict";angular.module("oc.lazyLoad").config(["$provide",function($provide){$provide.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function($delegate,$templateCache,$q,$http){return $delegate.templatesLoader=function(paths,callback,params){var promises=[],filesCache=$delegate._getFilesCache();return angular.forEach(paths,function(url){var deferred=$q.defer();promises.push(deferred.promise),$http.get(url,params).then(function(response){var data=response.data;angular.isString(data)&&0<data.length&&angular.forEach(angular.element(data),function(node){"SCRIPT"===node.nodeName&&"text/ng-template"===node.type&&$templateCache.put(node.id,node.innerHTML)}),angular.isUndefined(filesCache.get(url))&&filesCache.put(url,!0),deferred.resolve()}).catch(function(response){deferred.reject(new Error('Unable to load template file "'+url+'": '+response.data))})}),$q.all(promises).then(function(){callback()},function(err){callback(err)})},$delegate.templatesLoader.ocLazyLoadLoader=!0,$delegate}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var O=Object(this),len=O.length>>>0;if(0==len)return-1;var n=+fromIndex||0;if(Math.abs(n)===1/0&&(n=0),len<=n)return-1;for(k=Math.max(0<=n?n:len-Math.abs(n),0);k<len;){if(k in O&&O[k]===searchElement)return k;k++}return-1})}}]);