function formatDate(date) {
    const timeFromNow = dayjs(date).fromNow()
    if (timeFromNow.includes('hour') || timeFromNow.includes('month') || timeFromNow.includes('year')) {
        // capture time string and format with bullet separator, removing zone
        return dayjs(date).toString().replace(/(\d{2}):(\d{2}):(\d{2}) GMT/, '• $1:$2:$3')
    } else return timeFromNow
}
