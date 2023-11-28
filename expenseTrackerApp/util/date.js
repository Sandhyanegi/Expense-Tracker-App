export function getFormattedDate(date){
    return date.toISOString().slice(0,10);
}

// export function getDateMinusDays(date, days){
//     return new Date(date.getFullYear(),date.getMonth(),date.getDate() - days);
// }

export function getDateMinusDays(date, days) {
    try {
        const result = new Date(date); // Create a new Date object to avoid mutating the original

        result.setDate(result.getDate() - days); // Subtract days from the date

        if (isNaN(result.getTime())) {
            throw new Error('Invalid Date');
        }

        return result;
    } catch (error) {
        console.error('Error in getDateMinusDays:', error);
        return null; // or handle the error case as needed
    }
}

