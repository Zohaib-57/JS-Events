function setCity(){
      let cityName;
      let zipEntered = document.getElementById("zip").value;
      switch(zipEntered){
        case "68101":
          cityName = "Chicago";
          break;
          case "65000":
          cityName = "Tokyo";
          break;
          case "25000":
          cityName = "Peshawer";
          break;
          case "56909":
          cityName = "New York";
          break;
      }
      document.getElementById("city").value = cityName;
    }