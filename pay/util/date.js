export function getFormattedDate(date) {
    if (typeof date === 'string') {
        date = new Date(date);
      }
    return date.toISOString().slice(0,10);
}

export function getDateMinusDay(date, days) {
    if (typeof date === 'string') {
        date = new Date(date);
      }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}