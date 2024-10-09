
let count_h = 0;
let count_g = 0;

document.getElementById("home-el").innerText = count_h;
document.getElementById("game-el").innerText = count_g;

function action1()
{
    count_h += 1;
    document.getElementById("home-el").innerText = count_h;
    console.log('action');
}

function action2()
{
    count_h += 2;
    document.getElementById("home-el").innerText = count_h;
    console.log('action');
}

function action3()
{
    count_h += 3;
    document.getElementById("home-el").innerText = count_h;
    console.log('action');
}

function action4()
{
    count_g += 1;
    document.getElementById("guest-el").innerText = count_g;
    console.log('action');
}

function action5()
{
    count_g+= 2;
    document.getElementById("guest-el").innerText = count_g;
    console.log('action');
}

function action6()
{
    count_g += 3;
    document.getElementById("guest-el").innerText = count_g;
    console.log('action');
}