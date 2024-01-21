const filterDates = (data, size, value) => {
    const currentDate = new Date();
    const cutoffDate = new Date(currentDate);
    cutoffDate.setDate(currentDate.getDate() - size); 
    return data.filter((item) => {
      const itemDate = new Date(item[value]);
      return itemDate >= cutoffDate && itemDate <= currentDate;
    });
  };

export default filterDates