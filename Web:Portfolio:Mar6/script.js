<script>
  function updateTime() {
    // get current time in South Korea
    let now = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    let time = new Date(now);

    // format the time as HH:MM:SS
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    let formattedTime = hours + ":" + minutes + ":" + seconds;

    // update the time display
    document.getElementById("time").textContent = formattedTime;

    // update the time every second
    setTimeout(updateTime, 1000);
  }

  updateTime();
</script>
