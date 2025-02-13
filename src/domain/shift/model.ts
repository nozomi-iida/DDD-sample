export type ShiftStatus = "REQUEST" | "DRAFT" | "APPROVED";

export class Shift {
  readonly id: number;

  constructor(
    readonly id: number,
    readonly employeeId: number,
    readonly status: ShiftStatus,
    readonly startAt: Date,
    readonly endAt: Date,
  ) {
    if (startAt > endAt) {
      throw new Error("startAt must be less than endAt");
    }

    this.id = 0;
  }

  get duration(): number {
    return (this.endAt.getTime() - this.startAt.getTime()) / 1000 / 60;
  }
  get needsRest(): boolean {
    return this.duration >= 360;
  }
  isValid(): boolean {
    return this.duration >= 60;
  }
}
