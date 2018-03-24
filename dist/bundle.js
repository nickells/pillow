/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"dist/styles.css\">\n  <meta id=\"vp\" name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n<div id=\"grid\">\n  <section class=\"container\">\n    <div class=\"card\">\n      <figure class=\"front\"></figure>\n      <figure class=\"back\"></figure>\n    </div>\n  </section>\n</div>\n\n<script src=\"dist/bundle.js\"></script>\n<script src=\"http://localhost:35729/livereload.js\"></script>\n\n</body>\n</html>"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// require index.html so livereload will watch it
const index = __webpack_require__(0) // eslint-disable-line no-unused-vars

const $mom = document.getElementsByClassName('container')[0]
const $grid = document.getElementById('grid')

const $containers = [$mom]

for (let i = 1; i < 64; i++) {
  const $clone = $mom.cloneNode(true)
  $containers.push($clone)
  $grid.appendChild($clone)
}

let $lastCard

function makeFlippable($container){
  const $card = $container.children[0]
  let lastFlip = 'left'// 'left' or 'right'
  $container.addEventListener('mousemove', (e) => {
    if (e.movementX > 0) {
      if (lastFlip === 'right') return
      $card.style.transform = 'rotateY(180deg)'
      lastFlip = 'right'
    } else {
      if (lastFlip === 'left') return
      $card.style.transform = 'rotateY(0deg)'
      lastFlip = 'left'
    }
    if ($lastCard) $lastCard.style.zIndex = '0'
    $container.style.zIndex = '1'
    $lastCard = $container
  })

//   $container.addEventListener('mousemove', (e) => {
//     const deg = (e.offsetX / e.target.clientWidth) * 180
//     $card.style.transform = `rotateY(${deg}deg)`
//   })
}
// isFlipped = true

$containers.forEach(makeFlippable)


/***/ })
/******/ ]);