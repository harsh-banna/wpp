var today = new Date();
var day = today.getDay();
var daylist=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log("todayis."+daylist[day]+".");
var hour = today.getHours();
var minute = today.getMinutes();
var second =today.getSeconds();

var prepand = (hour >= 12)?"pm":"am";
hour=(hour >= 12)?hour-12:hour;
if (hour === 0 && prepand === 'pm'){
    if(minute === 0&&second === 0){
        hour=12;
        prepand='noon';
    }else{
        hour = 12;
        prepand = 'pm';
    }
}

if(hour === 0 &&prepand === 'am'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'midnight';
    }else{
        hour = 12;
        prepand = 'am';
    }
}

console.log ("current time"+hour+prepand+":"+minute+":"+second);