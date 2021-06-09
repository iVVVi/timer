'use strict';

const currentTimer = new Timer({
    selector: '.currentTimer'
});

console.log( currentTimer );
console.log( currentTimer.__proto__ === Timer.prototype );