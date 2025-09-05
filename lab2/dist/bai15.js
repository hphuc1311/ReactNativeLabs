"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delayAndReturn(value, ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), ms);
        });
    });
}
function runSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Start");
        const result1 = yield delayAndReturn("First res", 1000);
        console.log(result1);
        const result2 = yield delayAndReturn(27, 1000);
        console.log(result2);
        const result3 = yield delayAndReturn(true, 1000);
        console.log(result3);
        console.log("Done");
    });
}
runSequentially();
