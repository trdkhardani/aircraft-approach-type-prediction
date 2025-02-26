class DateTimeUtils {
    static formatDateTimeNoSecs(dateTimeString){
        const date = new Date(dateTimeString).toUTCString();
        const splittedDate = date.split('');
        
        // remove seconds and "GMT" substrings
        const joinedDate = splittedDate.reverse().slice(7).reverse().join("")

        return joinedDate
    }

    static modifyHours(dateTimeString, hours, hours2 = 0){
        const datetime = new Date(dateTimeString);
        datetime.setHours(datetime.getHours() + hours + hours2)
        
        return datetime;
    }
}

module.exports = DateTimeUtils;