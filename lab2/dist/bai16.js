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
function delayAndReturnBai16(value, ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), ms);
        });
    });
}
function runInParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Start");
        const [result1, result2, result3] = yield Promise.all([
            delayAndReturnBai16("First result", 1000),
            delayAndReturnBai16(42, 2000),
            delayAndReturnBai16(true, 1500),
        ]);
        console.log(result1);
        console.log(result2);
        console.log(result3);
        console.log("Done");
    });
}
runInParallel();
