function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  
  async function asyncCall() {
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  console.log('calling');
  asyncCall();
  