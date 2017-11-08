window.onload = function(){
    __main()
    food()
    console.log('====================================');
    console.log('start');
    console.log('====================================');
    
}
function $(element){
    document.getElementById(element)
}
function food(){
    var map = $('map')
    var nof = document.getElementById('numberOfFood')
    // var x = parseInt(Math.random() * 10) * 50;
    // var y = parseInt(Math.random() * 10) * 50;
    // var food = document.createElement('div2')
    // food.style.left = x + 'px';
    // food.style.top = y + 'px';
    // map.appendChild(food)
    var count = 0;
    setInterval(function(){
        count = count + 1;
        nof.innerHTML = '<p>当前实物数量为:<strong>' + count + '</strong></p>'
        console.log('====================================');
        console.log(count);
        console.log('====================================');

        var x = parseInt(Math.random() * 10) * 50;
        var y = parseInt(Math.random() * 10) * 50;
        var food = document.createElement('div2')
        food.style.left = x + 'px';
        food.style.top = y + 'px';
        map.appendChild(food)
    },1000)
    
}
var __main =  function (){  
    var snake = document.getElementById('div')
    var btn = document.getElementById('btn')
    var btn1 = document.getElementById('btn1')
    var score = document.getElementById('score')
    var speed = 10;
    // var timer = setInterval(function(){
    //     speed = speed + 10
    //     console.log('====================================');
    //     console.log(speed);
    //     console.log('====================================');
    // },1000/30)
    function one( ) {
            speed = speed + 10
            score.innerHTML = '<p>当前速度为:<strong>'+speed+'</strong></p>'
            if (speed > 120) {
                alert('你的速度太大啦.')
                speed = 10
                return speed
            }
        }
    function two( ) {
        speed = speed - 10
        score.innerHTML = '<p>当前速度为:<strong>'+speed+'</strong></p>'
        if (speed < 0) {
            alert('你的速度太小啦.')
            speed = 10
            return speed
        }
    }
    btn1.addEventListener('click',two,false)
    btn.addEventListener('click',one,false)

    document.onkeydown = function (ev){
        var oEvent = ev||event;
        var number = oEvent.keyCode;
        const control = [37,38,39,40]
        
       

        switch (number) {
            case control[0]:
                    snake.style.left = snake.offsetLeft - speed + 'px';
                break;
            case control[1]:
                snake.style.top = snake.offsetTop - speed + 'px';
                break;
            case control[2]:
                snake.style.left = snake.offsetLeft + speed + 'px';
                break;
            case control[3]:
                snake.style.top = snake.offsetTop + speed + 'px';
                break;
            default:
                break;
        }
        switch (number) {
            case 65:
                snake.style.left = snake.offsetLeft - 20 + 'px';
                break;
            case 87:
                snake.style.top = snake.offsetTop - 20 + 'px';
                break;
            case 68:
                snake.style.left = snake.offsetLeft + 20 + 'px';
                break;
            case 83:
                snake.style.top = snake.offsetTop + 20 + 'px';
                break;
            default:
                break;
        }
    }
}