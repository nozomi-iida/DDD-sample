export type BusinessDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
export class ShiftPattern {
  constructor(
    public readonly id: number,
    public readonly userId: string,
    public readonly day: BusinessDay[],
    public readonly startAt: Date,
    public readonly endAt: Date,
  ) {}

  protected get isBreakRequired(): number {
    return (this.endAt.getTime() - this.startAt.getTime()) / 1000 / 60;
  }
}
