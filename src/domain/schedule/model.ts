import { WeekDay, WeekDayValue } from "../valueObject/day";

export class Schedule {
  public readonly weekDay: WeekDay;

  constructor(
    public readonly id: number,
    public readonly storeId: number,
    private readonly weekDayValue: WeekDayValue,
    public readonly startAt?: Date,
    public readonly endAt?: Date,
  ) {
    this.weekDay = new WeekDay(weekDayValue);
  }
}
