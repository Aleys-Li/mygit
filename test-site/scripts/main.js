let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg'){
        myImage.setAttribute('src','images/2.jpg');
    }
    else{
        myImage.setAttribute('src','images/1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    //prompt与 alert() 类似会弹出一个对话框
    let myName = prompt('请输入你的名字。');
    //将数据存储在浏览器中供后续获取。
    //这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，
    //并把 myName 变量复制给它。
    if(!myName || myName === null){
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = '你好，' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好，' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
