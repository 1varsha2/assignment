const getData = async()=>{
    try {
      fetch("http://corridor.cloud.wavemakeronline.com/EmployeesAPI/services/HRAPI/Employee",
      {
        
  
      })
      .then(r => r.json())
      .then(json => {
       console.log(json);
      })
    } 
    catch (error) {
      console.error(error);
    }
  }