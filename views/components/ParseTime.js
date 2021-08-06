// Helper function for displaying time
const parseTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridiem = "AM";

  if (hours >= 12) {
    meridiem = "PM";
  }

  hours = (hours + 12) % 12;
  let hoursString = hours != 0 ? hours.toString() : "12";

  if (hoursString.length == 1) {
    hoursString = "0" + hoursString;
  }

  let minutesString = minutes.toString();
  if (minutesString.length == 1) {
    minutesString = "0" + minutesString;
  }

  return hoursString + ":" + minutesString + " " + meridiem;
};

export default parseTime;
