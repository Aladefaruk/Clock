let greeting= document.querySelector('.greet');
let time= document.querySelector('.time');
let body= document.querySelector('.body');



const setImage=()=>{
    var nowdate= new Date();


    var morning= new Date();
    morning.setHours(23);
    morning.setMinutes(59);

    var afternoon= new Date();
    afternoon.setHours(11);
    afternoon.setMinutes(59);

  

    var nighttime= new Date();
    nighttime.setHours(18);
    nighttime.setMinutes(30);

    
    if( nowdate < afternoon){
        greeting.innerHTML="<img src='sun-2.png'/> GOOD MORNING, IT'S CURRENTLY";
        body.style.backgroundImage= "url('morning.jpg')"

    }else if( nowdate> afternoon && nowdate< nighttime ){
        greeting.innerHTML="<img src='sun-2.png'/> GOOD AFTERNOON, IT'S CURRENTLY";
        body.style.backgroundImage= "url('morning.jpg')"
    }else if( nowdate > nighttime){
        greeting.innerHTML="<img src='moon.png'/> GOOD EVENING, IT'S CURRENTLY";
        body.style.backgroundImage= "url('night.jpg')"
    }
    console.log(nowdate)
};


const setTime=()=>{
    let today= new Date()

    let hours= today.getHours();
    let minutes= today.getMinutes();

    minutes= checkTime(minutes);

    time.innerHTML= hours + ":" + minutes + "<small class='gmt'>GMT</small>" ;

    let t= setTimeout(setTime, 500);
}
const checkTime=(i)=>{
    if(i<10){i="0" + i}
    return i
}

window.setInterval(setImage() ,2000)

