function walk(steps,footprintLeght,speed)
{
    let allMeters = steps*footprintLeght;
    let metrsInSec= speed/3.6;
    let time  = allMeters/metrsInSec;
    let addTime = Math.floor(allMeters/500);

    let minutes = Math.floor(time/60);
    let seconds = Number(time - (minutes*60)).toFixed(0);
    let hours = Math.floor(time/3600);
    minutes+=addTime;
    hours+= Math.floor(minutes/60);
    minutes = minutes%60;

    let formatedHours = hours<10 ? `0${hours}` : `${hours}`;
    let formatedMinutes = minutes<10 ? `0${minutes}` : `${minutes}`;
    let formatedSeconds = seconds<10 ? `0${seconds}` : `${seconds}`;
    console.log(`${formatedHours}:${formatedMinutes}:${formatedSeconds}`);

}
walk(4000, 0.60, 5);