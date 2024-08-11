let hrs = document.getElementById("hrs");
      let min = document.getElementById("min");
      let sec = document.getElementById("sec");

      setInterval(() => {
        let currentTime = new Date();
        hrs.innerHTML =
          (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
        min.innerHTML =
          (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
        sec.innerHTML =
          (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
      }, 1000);

      const date = document.getElementById("date");
      const day = document.getElementById("day");
      const month = document.getElementById("month");
      const year = document.getElementById("year");

      const today = new Date();

      const weekDays = [
        "Sunday ,",
        "Monday ,",
        "Tuesday ,",
        "Wednesday ,",
        "Thursday ,",
        "Friday ,",
        "Saturday ,",
      ];
      const allMonths = [
        " January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      date.innerHTML = (today.getDate() < 10 ? "0" : " ") + today.getDate();
      day.innerHTML = weekDays[today.getDay()];
      month.innerHTML = allMonths[today.getMonth()];
      year.innerHTML = today.getFullYear();
