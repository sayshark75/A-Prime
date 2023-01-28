export const TimeConverter = (timeString: string) => {
  let date = new Date(timeString).toDateString();
  let time = new Date(timeString).toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" });
  return date + " " + time;
};
