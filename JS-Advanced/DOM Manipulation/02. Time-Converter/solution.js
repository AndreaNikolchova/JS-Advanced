function attachEventsListeners() {
let daysBtn = document.getElementById('daysBtn');
let hoursBtn = document.getElementById('hoursBtn');
let minutesBtn = document.getElementById('minutesBtn');
let secondsBtn = document.getElementById('secondsBtn');

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds =document.getElementById('seconds')
daysBtn.addEventListener('click', function(){
    let daysValue =Number(days.value);
    hours.value = daysValue*24;
    minutes.value = Number(hours.value)*60;
    seconds.value = Number(minutes.value)*60;
});
hoursBtn.addEventListener('click', function(){
    let hoursValue =Number(hours.value);
    days.value = hoursValue/24;
    minutes.value = hoursValue*60;
    seconds.value = Number(minutes.value)*60;
});
minutesBtn.addEventListener('click', function(){
    let minutesValue =Number(minutes.value);
    hours.value = minutesValue/60;
    days.value = Number(hours.value)/24;
    seconds.value = minutesValue*60;
});
secondsBtn.addEventListener('click', function(){
    let secondsValue =Number(seconds.value);
    minutes.value = secondsValue/60;
    hours.value = Number(minutes.value)/60;
    days.value = Number(hours.value)/24;
});

}