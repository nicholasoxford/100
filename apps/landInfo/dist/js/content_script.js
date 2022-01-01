/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content_script.tsx":
/*!********************************!*\
  !*** ./src/content_script.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // listen for messages sent from background.js
        if (request.message === 'update') {
            var traderJoesList = [];
            var plantHardiness = {};
            var airquality = {};
            if (request.url.includes('zillow.com')) {
                var geoInfo = checkScriptJSONZillow(request.url);
            }
            else {
                var geoInfo = checkScriptJSON();
            }
            console.log('geoInfo', geoInfo);
            if (geoInfo.longitude && geoInfo.latitude) {
                var response = yield fetch('https://us-east-1.aws.data.mongodb-api.com/app/landinfo-jpfgc/endpoint/landinfo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        latitude: geoInfo.latitude,
                        longitude: geoInfo.longitude,
                        address: geoInfo.address
                    })
                });
                let json = yield response.json();
                const parseJson = JSON.parse(json);
                for (const iterator of parseJson.traderJoes) {
                    traderJoesList.push(JSON.parse(iterator));
                }
                plantHardiness = parseJson.plant;
                airquality = parseJson.airQuality.data;
            }
            // set list of closests Trader Joes
            chrome.storage.local.set({ traderJoes: traderJoesList }, function () { });
            // Set plant hardiness scale
            chrome.storage.local.set({ plantHardiness: plantHardiness }, function () { });
            // set are quality, and send a message to the background script to update tab icon
            chrome.storage.local.set({ airQuality: airquality }, function () { });
            yield chrome.runtime.sendMessage({
                message: 'airQualityUpdate',
                airQuality: (_a = airquality.aqi) !== null && _a !== void 0 ? _a : ''
            });
        }
    });
});
function checkScriptJSON() {
    var info = document.querySelectorAll('script[type="application/ld+json"]');
    var geoInfo = {};
    for (var i = 0; i < info.length; i++) {
        const json = JSON.parse(info[i].innerHTML);
        if (json.geo) {
            geoInfo.longitude = json.geo.longitude;
            geoInfo.latitude = json.geo.latitude;
        }
        if (json.address) {
            geoInfo.address = json.address;
        }
    }
    return geoInfo;
}
function checkScriptJSONZillow(url) {
    var info = document.querySelectorAll('script[type="application/ld+json"]');
    var geoInfo = {};
    for (var i = 0; i < info.length; i++) {
        const json = JSON.parse(info[i].innerHTML);
        if (json.url === url) {
            if (json.geo) {
                geoInfo.longitude = json.geo.longitude;
                geoInfo.latitude = json.geo.latitude;
            }
            if (json.address) {
                geoInfo.address = json.address;
            }
        }
    }
    return geoInfo;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content_script.tsx"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0NBQW9DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCLGlCQUFpQjtBQUNwRjtBQUNBLHVDQUF1QyxnQ0FBZ0MsaUJBQWlCO0FBQ3hGO0FBQ0EsdUNBQXVDLHdCQUF3QixpQkFBaUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVRXhGQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZm8vLi9zcmMvY29udGVudF9zY3JpcHQudHN4Iiwid2VicGFjazovL2xhbmRpbmZvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGFuZGluZm8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2xhbmRpbmZvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBsaXN0ZW4gZm9yIG1lc3NhZ2VzIHNlbnQgZnJvbSBiYWNrZ3JvdW5kLmpzXG4gICAgICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICB2YXIgdHJhZGVySm9lc0xpc3QgPSBbXTtcbiAgICAgICAgICAgIHZhciBwbGFudEhhcmRpbmVzcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGFpcnF1YWxpdHkgPSB7fTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcygnemlsbG93LmNvbScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdlb0luZm8gPSBjaGVja1NjcmlwdEpTT05aaWxsb3cocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGdlb0luZm8gPSBjaGVja1NjcmlwdEpTT04oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW9JbmZvJywgZ2VvSW5mbyk7XG4gICAgICAgICAgICBpZiAoZ2VvSW5mby5sb25naXR1ZGUgJiYgZ2VvSW5mby5sYXRpdHVkZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwczovL3VzLWVhc3QtMS5hd3MuZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2xhbmRpbmZvLWpwZmdjL2VuZHBvaW50L2xhbmRpbmZvJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBnZW9JbmZvLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBnZW9JbmZvLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGdlb0luZm8uYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBqc29uID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlSnNvbiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwYXJzZUpzb24udHJhZGVySm9lcykge1xuICAgICAgICAgICAgICAgICAgICB0cmFkZXJKb2VzTGlzdC5wdXNoKEpTT04ucGFyc2UoaXRlcmF0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxhbnRIYXJkaW5lc3MgPSBwYXJzZUpzb24ucGxhbnQ7XG4gICAgICAgICAgICAgICAgYWlycXVhbGl0eSA9IHBhcnNlSnNvbi5haXJRdWFsaXR5LmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgbGlzdCBvZiBjbG9zZXN0cyBUcmFkZXIgSm9lc1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdHJhZGVySm9lczogdHJhZGVySm9lc0xpc3QgfSwgZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIC8vIFNldCBwbGFudCBoYXJkaW5lc3Mgc2NhbGVcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHBsYW50SGFyZGluZXNzOiBwbGFudEhhcmRpbmVzcyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgLy8gc2V0IGFyZSBxdWFsaXR5LCBhbmQgc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgc2NyaXB0IHRvIHVwZGF0ZSB0YWIgaWNvblxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgYWlyUXVhbGl0eTogYWlycXVhbGl0eSB9LCBmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgeWllbGQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdhaXJRdWFsaXR5VXBkYXRlJyxcbiAgICAgICAgICAgICAgICBhaXJRdWFsaXR5OiAoX2EgPSBhaXJxdWFsaXR5LmFxaSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGNoZWNrU2NyaXB0SlNPTigpIHtcbiAgICB2YXIgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXScpO1xuICAgIHZhciBnZW9JbmZvID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGluZm9baV0uaW5uZXJIVE1MKTtcbiAgICAgICAgaWYgKGpzb24uZ2VvKSB7XG4gICAgICAgICAgICBnZW9JbmZvLmxvbmdpdHVkZSA9IGpzb24uZ2VvLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIGdlb0luZm8ubGF0aXR1ZGUgPSBqc29uLmdlby5sYXRpdHVkZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoanNvbi5hZGRyZXNzKSB7XG4gICAgICAgICAgICBnZW9JbmZvLmFkZHJlc3MgPSBqc29uLmFkZHJlc3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdlb0luZm87XG59XG5mdW5jdGlvbiBjaGVja1NjcmlwdEpTT05aaWxsb3codXJsKSB7XG4gICAgdmFyIGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIl0nKTtcbiAgICB2YXIgZ2VvSW5mbyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShpbmZvW2ldLmlubmVySFRNTCk7XG4gICAgICAgIGlmIChqc29uLnVybCA9PT0gdXJsKSB7XG4gICAgICAgICAgICBpZiAoanNvbi5nZW8pIHtcbiAgICAgICAgICAgICAgICBnZW9JbmZvLmxvbmdpdHVkZSA9IGpzb24uZ2VvLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICBnZW9JbmZvLmxhdGl0dWRlID0ganNvbi5nZW8ubGF0aXR1ZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoanNvbi5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgZ2VvSW5mby5hZGRyZXNzID0ganNvbi5hZGRyZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnZW9JbmZvO1xufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb250ZW50X3NjcmlwdC50c3hcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=