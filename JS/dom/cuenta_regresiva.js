const d= document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id)

    const countdownDate = new Date(limitDate).getTime();
    const countdownDate2 = new Date(limitDate);
    let countdownTempo = setInterval(()=>{
        // console.log("limitDate "+countdownDate);
        // console.log(countdownDate2.getHours());
        // console.log(countdownDate2.getMinutes());
        // console.log(countdownDate2.getSeconds());
        // console.log();
        let now = new Date().getTime();
        let now2 = new Date();
        // console.log("now "+now);
        // console.log(now2.getHours());
        // console.log(now2.getMinutes());
        // console.log(now2.getSeconds());
        let limitTime = countdownDate - now;
        // console.log("limitTime" + limitTime);
        // let days = ("0"+Math.floor(limitTime/(1000*60*60*24))).slice(-2);
        let days = Math.floor(limitTime/(1000*60*60*24));
        // console.log(days);
        let hours = ("0"+Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2);
        let minutes = ("0"+Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2);
        let seconds = ("0"+Math.floor((limitTime%(1000*60))/(1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`;

        if(limitTime<0){
            clearInterval(countdownTempo);

            $countdown.innerHTML=`<h3>${finalMessage}</h3>`
        }
    },1000);
}