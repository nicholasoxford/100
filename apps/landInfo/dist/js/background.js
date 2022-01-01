/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(activeInfo.tabId, {
            message: 'update',
            url: tabs[0].url
        });
    });
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
        chrome.tabs.sendMessage(tabId, {
            message: 'update',
            url: changeInfo.url
        });
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'airQualityUpdate') {
        chrome.action.setBadgeText({ text: request.airQuality.toString() });
        // depending on the air quality, set the badge color
        let color = '#00FF00';
        if (request.airQuality <= 30) {
            color = '#00b908e0';
        }
        else if (request.airQuality <= 60) {
            color = '#fffb3de0';
        }
        else if (request.airQuality <= 90) {
            color = '#ffb300e0';
        }
        else if (request.airQuality <= 120) {
            color = '#ff0000e0';
        }
        chrome.action.setBadgeBackgroundColor({ color: color });
        sendResponse({ status: true });
    }
    return;
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5mby8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGFjdGl2ZUluZm8pIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhY3RpdmVJbmZvLnRhYklkLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiAndXBkYXRlJyxcbiAgICAgICAgICAgIHVybDogdGFic1swXS51cmxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICAgIC8vIHJlYWQgY2hhbmdlSW5mbyBkYXRhIGFuZCBkbyBzb21ldGhpbmcgd2l0aCBpdFxuICAgIC8vIGxpa2Ugc2VuZCB0aGUgbmV3IHVybCB0byBjb250ZW50c2NyaXB0cy5qc1xuICAgIGlmIChjaGFuZ2VJbmZvLnVybCkge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICAgICAgbWVzc2FnZTogJ3VwZGF0ZScsXG4gICAgICAgICAgICB1cmw6IGNoYW5nZUluZm8udXJsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09ICdhaXJRdWFsaXR5VXBkYXRlJykge1xuICAgICAgICBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IHJlcXVlc3QuYWlyUXVhbGl0eS50b1N0cmluZygpIH0pO1xuICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIGFpciBxdWFsaXR5LCBzZXQgdGhlIGJhZGdlIGNvbG9yXG4gICAgICAgIGxldCBjb2xvciA9ICcjMDBGRjAwJztcbiAgICAgICAgaWYgKHJlcXVlc3QuYWlyUXVhbGl0eSA8PSAzMCkge1xuICAgICAgICAgICAgY29sb3IgPSAnIzAwYjkwOGUwJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXF1ZXN0LmFpclF1YWxpdHkgPD0gNjApIHtcbiAgICAgICAgICAgIGNvbG9yID0gJyNmZmZiM2RlMCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5haXJRdWFsaXR5IDw9IDkwKSB7XG4gICAgICAgICAgICBjb2xvciA9ICcjZmZiMzAwZTAnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlcXVlc3QuYWlyUXVhbGl0eSA8PSAxMjApIHtcbiAgICAgICAgICAgIGNvbG9yID0gJyNmZjAwMDBlMCc7XG4gICAgICAgIH1cbiAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==