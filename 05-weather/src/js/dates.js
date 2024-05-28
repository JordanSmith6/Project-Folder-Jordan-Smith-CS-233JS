// Utility functions that manipulate JS dates

// returns a JS date object based on a unix timestamp and the timezone offset
export function getDate(date) {

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

}

// returns a string that represents the day of the week based on a JS date object
export function getWeekday(date) {
    const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = date.getDay();
    return dayNames[weekday];
}