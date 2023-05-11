this.document.getElementById('para1').innerText = 'Welcome Champ ' +localStorage.getItem('storageName');
localStorage.removeItem('storageName');
localStorage.clear();

localStorage.setItem('cp',0)
const btn =this.document.getElementById('rollbtn');
btn.addEventListener('click',game)

function game()
{
    if(Number(localStorage.getItem('cp'))<=100)
    {
        var rd=random();
        document.getElementById('p1').innerText="Your dice value is = " +rd;
        var uservalue=Number(localStorage.getItem('cp'))+rd;
        if(uservalue>=100)
        {
            alert("Congratulations! You won the game.");
        }
        localStorage.setItem('cp', uservalue);
        checkPosition(Number(localStorage.getItem('cp')));
        document.getElementById('p2').innerText="Your current position value is = "+localStorage.getItem('cp');


        myPos = `d${localStorage.getItem('cp')}`;
        console.log(myPos,typeof(myPos));
        setInterval(blinker1,1000);
        function blinker1(){
            document.getElementById(myPos).style.backgroundColor = 'blue';
            document.getElementById(myPos).style.Color = 'black';
            document.getElementById(myPos).style.border = '1px  black';
        }
        setInterval(blinker2,2000);
        function blinker2(){
            document.getElementById(myPos).style.backgroundColor = 'aliceblue';
        }   

    }
}

    function random()
    {
        return(Math.floor(Math.random() * (6-1) + 1));
    }

    function checkPosition(uservalue)
    {
        console.log(uservalue)
        switch(uservalue)
        {      //ladder
            case 1:localStorage.setItem('cp',38); break;
            case 4:localStorage.setItem('cp',14);break;
            case 9:localStorage.setItem('cp',31);break;
            case 21:localStorage.setItem('cp',42);break;
            case 28:localStorage.setItem('cp',84); break;
            case 51:localStorage.setItem('cp',67);break;
            case 72:localStorage.setItem('cp',91);break;
            case 80:localStorage.setItem('cp',99);break;
            //snake
            case 17:localStorage.setItem('cp',7); break;
            case 54:localStorage.setItem('cp',34);break;
            case 62:localStorage.setItem('cp',19);break;
            case 64:localStorage.setItem('cp',60);break;
            case 87:localStorage.setItem('cp',36); break;
            case 93:localStorage.setItem('cp',73);break;
            case 95:localStorage.setItem('cp',75);break;
            case 98:localStorage.setItem('cp',79);break;
        }
    }





