import Vue from 'vue'

module.exports = {
    formatDate: (input) => {
        var date = new Date(input),
            formater = 'YYYY-MM-DD HH:mm';
        return formater.replace(/Y{4}/g, date.getFullYear())
            .replace(/M{2}/g, date.getMonth() + 1)
            .replace(/D{2}/g, date.getDate())
            .replace(/HH/g, date.getHours())
            .replace(/mm/g, date.getMinutes())
            .replace(/ss/g, date.getSeconds())
    }
}
