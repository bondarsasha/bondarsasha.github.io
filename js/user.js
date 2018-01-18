document.addEventListener("DOMContentLoaded", ready);
function ready() {

    //var
    var start = document.getElementById('startGame');
    var second = document.getElementById('secondScreen');
    var win = document.getElementById('win');
    var hod = document.getElementById('hod');
    var playerOne = document.getElementById('playerOne');
    var playerTwo = document.getElementById('playerTwo');
    var restartAll = document.getElementById('restartAll');
    var result = document.getElementById('result');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var sendResult = document.getElementById('send-result');
    var restart = document.getElementById('restart');
    var myBtnAll = document.querySelectorAll('button.myBtn');
    var errorText = document.getElementById('error-text');
    var str ='';
    var count = 0;
    var left = 0;

    //ok
    sendResult.addEventListener('click', function() {
        var number1 = parseInt(num1.textContent, 10);
        var number2 = parseInt(num2.textContent, 10);
        var resultMy = parseInt(result.textContent, 10);
        var resultAll = number1 * number2;
        if(resultAll === resultMy){
            randomInteger1();
            randomInteger2();
            result.textContent = '?';
            errorText.style.opacity = '0';
            result.style.background = 'rgba(0,255,0,0.5)';
            str ='';
            count++;
            left=left+5;
            playerTwo.style.left = left+'%';
            if(left == 95){
                second.style.display = 'block';
                win.textContent = 'Молодец! Ты выиграл!';
                hod.textContent = 'Правильно ответил: '+count+' раз.';
                clearInterval(roundFinish);
            }
        }else{
            result.style.background = 'rgba(255,0,0,0.5)';
            errorText.style.opacity = '1';
            result.textContent = '?';
            str ='';
        }
    })


    for (var i = 0; i < myBtnAll.length; i++) {
        myBtnAll[i].addEventListener('click', function(event) {
            event.target.className = "enter myBtn click";
            var strEvent = event.target.textContent;
            str = str + strEvent;
            result.textContent = str;
            setTimeout(function() {
                event.target.className = "enter myBtn";
            }, 200)
        })
    }

    //start
    start.addEventListener("click", function() {
        this.removeEventListener('click', arguments.callee, false);
        getTime();
        goPlayerOne();
        randomInteger1();
        randomInteger2();
    })

    restart.addEventListener('click', function() {
        randomInteger1();
        randomInteger2();
    })

    //time
        var t = 90;
        var roundFinish;
    function getTime() {
        function roundTime() {
            t = t - 1;
            if(t <= 0) {
                clearInterval(roundFinish);
                playerOne.style.left = '93%';
                second.style.display = 'block';
                win.textContent = 'Плохо! Ты проиграл!';
                hod.textContent = 'Правильно ответил: '+count+' раз.';
                return;
            }
        }
        roundFinish = setInterval(function() {
            roundTime();
        },1000);
    }

    //playerOne
    function goPlayerOne() {
        playerOne.style.cssText = "transition: run 90s ease-in;-webkit-animation: run 90s linear;-moz-animation: run 90s linear;-ms-animation: run 90s linear;-o-animation: run 90s linear;"
    }
    //task
    var rand1;
    var rand2;
    function randomInteger1() {
        rand1 = 1 - 0.5 + Math.random() * (9 - 1 + 1)
        rand1 = Math.round(rand1);
        num1.textContent = rand1; 
    }
    function randomInteger2() {
        rand2 = 1 - 0.5 + Math.random() * (9 - 1 + 1)
        rand2 = Math.round(rand2);
        num2.textContent = rand2; 
    }

    //restart
    restartAll.addEventListener('click', function() {
        location.reload(true);
    })

}