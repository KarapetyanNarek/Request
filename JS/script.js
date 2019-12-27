'use strict';

// let inputDram = document.getElementById('dram'),
//     inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd'),
//     inputGel = document.getElementById('gel');


// inputDram.addEventListener('input', function() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'JS/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputRub.value = (inputDram.value / data.rub).toFixed(2);
//             inputUsd.value = (inputDram.value / data.usd).toFixed(2);
//             inputGel.value = (inputDram.value / data.gel).toFixed(2);
//         } else {
//             console.log("Don't request");
//         }
//     })

// })


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();
                        
                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")


});