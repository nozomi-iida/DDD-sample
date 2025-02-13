export type WeekDayValue =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export class WeekDay {
  constructor(public readonly value: WeekDayValue) {}
  get weekDayToNumber(): number {
    switch (this.value) {
      case "Monday":
        return 1;
      case "Tuesday":
        return 2;
      case "Wednesday":
        return 3;
      case "Thursday":
        return 4;
      case "Friday":
        return 5;
      case "Saturday":
        return 6;
      case "Sunday":
        return 7;
      default:
        throw new Error("Invalid day");
    }
  }
}
