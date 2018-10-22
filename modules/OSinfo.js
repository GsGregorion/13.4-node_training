var os = require('os');
var timeDevider = require('./time_units');

function getOSinfo() {
    var type = os.type(),
        release = os.release(),
        processor = os.cpus()[0].model,
        runningTime = os.uptime(),
        userInfo = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type='Windows';
    }
        
    console.log('System:', type, '\nRelease:', release, '\nProcessor:', processor);
    console.log('Running time:', timeDevider.print(runningTime));
    console.log('User name:', userInfo.username, '\nHome directory:', userInfo.homedir);
}

exports.print = getOSinfo;