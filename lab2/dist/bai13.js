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
function bai13() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = yield fakeApi();
            console.log("Kết quả:", result);
        }
        catch (error) {
            console.error("Có lỗi xảy ra:", error.message);
        }
    });
}
function fakeApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Dữ liệu trả về từ server");
            }
            else {
                reject(new Error("Server bị lỗi"));
            }
        }, 1000);
    });
}
bai13();
