var sec=0;
var min=0;
var hr=0;
var interval;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit);
    }else{
        return(digit);
    }
}

function start(){
    ponto();
    interval=setInterval(ponto,1000);
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    sec=0;
    min=0;
    document.querySelector('#ponto').innerHTML='00:00:00';
}

function ponto(){
    sec++
    if(sec==60){
        min++;
        sec=0
        if(min==60){
            hr++
            min=0
        }
    }
    document.querySelector('#ponto').innerHTML=twoDigits(hr)+ ':' +twoDigits(min)+ ':' +twoDigits(sec);
}