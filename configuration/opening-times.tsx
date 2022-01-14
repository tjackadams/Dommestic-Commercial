export interface OpeningTime {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  opens: string;
  closes: string;
}

export const openingTimes: OpeningTime[] = [
  {
    day: "Monday",
    opens: "9:00 am",
    closes: "5:00 pm",
  },
  {
    day: "Tuesday",
    opens: "9:00 am",
    closes: "5:00 pm",
  },
  {
    day: "Wednesday",
    opens: "9:00 am",
    closes: "5:00 pm",
  },
  {
    day: "Thursday",
    opens: "9:00 am",
    closes: "5:00 pm",
  },
  {
    day: "Friday",
    opens: "9:00 am",
    closes: "5:00 pm",
  },
  {
    day: "Saturday",
    opens: "9:00 am",
    closes: "2:00 pm",
  },
  {
    day: "Sunday",
    opens: "Closed",
    closes: "Closed",
  },
];
