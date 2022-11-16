export function formatDate(date){
    const new_date = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return new_date.toLocaleDateString('es-Es', options);
}