const formatDate = (date, includeTime = false) => {
    const dateObj = new Date(date);
  
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
    const year = dateObj.getFullYear();
    
    let formattedDate = `${day}/${month}/${year}`;
  
    if (includeTime) {
      const hours = dateObj.getHours().toString().padStart(2, '0');
      const minutes = dateObj.getMinutes().toString().padStart(2, '0');
      formattedDate += ` - ${hours}:${minutes}`;
    }
  
    return formattedDate;
  };

  export default formatDate