function openNav() {
    document.getElementById("mySidebar").style.width = "25%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showDate() {
    thisDate = new Date();
    var thisWDay=thisDate.getDay();
    var thisDay=thisDate.getDate();
    var thisMonth=thisDate.getMonth();
    var thisYear=thisDate.getFullYear();
    var mName = new Array("January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October","November", "December");
    var wdName = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday");
    return wdName[thisWDay]+", "+mName[thisMonth]+" "+thisDay+", "+thisYear;
}

function showTime() {
  var hours=thisDate.getHours();
  var minutes=thisDate.getMinutes();
  ampm = hours >=12 ? " pm" : " am";
  hours = hours > 12 ? hours-12 : hours;
  minutes = minutes < 10 ? "0"+minutes : minutes;
  return hours + ":" + minutes + ampm;
}