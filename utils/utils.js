export const formatDateTime = (dateString, format = 'DD-MM-YYYY HH:mm') => {
  const options = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',

    // Include day, month, and year formatting
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  const dateObj = new Date(dateString)
  return dateObj.toLocaleString('en-US', options)
}
