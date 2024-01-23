function calculateAverage(arr) {
    // Ensure the array is not empty
    if (!arr.length) {
      return "Array cannot be empty.";
    }
  
    // Calculate the average
    const average = arr.reduce((sum, value) => sum + value, 0) / arr.length;
  
    // Round down to the nearest integer
    const roundedAverage = Math.floor(average);
  
    return roundedAverage;
  }
  
  // Example usage:
  const grades = [85, 90, 78, 92, 88];
  const result = calculateAverage(grades);
  console.log("Average:", result);
  