//function to be executed on load of page
function digitized() {
  //Date() constructor for current system of date
  var time =  new Date(),
   hour = time.getHours(),
  minute = time.getMinutes(),
   second = time.getSeconds();

   minute =Ticking(minute);
   second = Ticking(second);

   document.getElementById('time').innerHTML = hour +":"+ minute;
   document.getElementById('time_second').innerHTML = second;

   if(hour > 12) {
    document.getElementById('time_hour').innerHTML = 'PM';
} else {
  document.getElementById('time_hour').innerHTML ='AM';
}
  //calling the function every intervalllllllllllllllll
  var display
  display = setInterval('digitized()', 1000);
}
function Ticking(ticVal) {
  if(ticVal < 10) {
    ticVal = "0" +ticVal;
  }
  return ticVal;
}
window.onload=digitized; 