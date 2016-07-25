/**
 * Created by Вероника on 25.07.2016.
 */
"use strict";

// Функция принимает количество миллисекунд, через которое Promise
// переходит в состояние fullfield, возвращает новый Promise
export function timer(milliseconds){
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, milliseconds)
    })
}
