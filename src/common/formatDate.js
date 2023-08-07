export default function formatDate(timestamp) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const date = new Date(timestamp);
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    return formattedDate;
}