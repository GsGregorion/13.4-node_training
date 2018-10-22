//time must be provided in seconds
function timeUnitTransform(time) {
    var message;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60) - (hours * 60);
    var seconds = (time - (hours * 3600) - (minutes * 60)).toFixed(2);
    return message = 'time is ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
}

exports.print = timeUnitTransform;
