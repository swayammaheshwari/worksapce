function outerFunction() {
    try {
      innerFunction();
    } catch (error) {
      // Catch the error thrown by innerFunction
      console.error('Error caught in outerFunction:', error);
      // Further handling or logging can be done here
    }
  }
  
  function innerFunction() {
    // Simulating an error being thrown in innerFunction
    throw new Error('Error from innerFunction');
  }
  
  // Call the outerFunction
  outerFunction();
  