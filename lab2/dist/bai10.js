"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printRepose = printRepose;
function printRepose(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Promise success");
            }
            else {
                reject("Promise failure");
            }
        }, 1000);
    });
}
