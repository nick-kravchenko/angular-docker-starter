export class Utils {
    static timeDifference(time) {
        const timeStamp = new Date(time),
              now = new Date(),
              secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
        if (secondsPast < 60) {
          return `${secondsPast} s`;
        }
        if (secondsPast < 3600) {
          return `${Math.round(secondsPast / 60)} m`;
        }
        if (secondsPast <= 86400) {
          return `${Math.round(secondsPast / 3600)} h`;
        }
        if (secondsPast > 86400) {
            const day = timeStamp.getDate();
            const month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(' ', '');
            const year = timeStamp.getFullYear() === now.getFullYear() ? '' :  ' ' + timeStamp.getFullYear();
            return `${day} ${month}${year}`;
        }
    }
}
