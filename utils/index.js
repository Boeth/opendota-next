export const getTimeInMS = (timestamp) => {
    let timeString = (timestamp - (timestamp %= 60)) / 60 + (9 < timestamp ? ':' : ':0') + timestamp
    return (
        timeString
    )
}

export const getTimeFromNow = (timestamp) => {
    let now = Math.floor(Date.now() / 1000)
    let difference = parseInt(timestamp) - now
    let mod = Math.abs(difference), timeString = '';
    if (mod < 60 * 60) {
        timeString = Math.floor(mod / 60) + ' minutes'
    } else {
        if (mod > 60 * 60 * 24) {
            let days = Math.floor(mod / (3600 * 24));
            timeString = days + ' days ';
        } else {
            timeString = Math.floor(mod / 3600) + ' hours'
        }
    }
    if (difference < 0) {
        timeString += ' ago';
    } else {
        timeString += ' from now';       
    }
    return timeString
}

const round = (n, precision) => {
    let prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec; 
}

export const formatNumber = (n) => {
    let base = Math.floor(Math.log(Math.abs(n))/Math.log(1000));
    let suffix = 'kmb'[base-1];
    return suffix ? round(n/Math.pow(1000,base),1)+suffix : ''+n;
}

