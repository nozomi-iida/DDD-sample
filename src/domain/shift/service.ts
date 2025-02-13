import { ScheduleRepository } from "../schedule/repository";
import { Shift } from "./model";

export class ShiftDomainService {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}

  async approve(params: { shift: Shift; storeId: number }): Promise<Shift> {
    const isValidShift = await this.isValidShift(params.shift, params.storeId);
    if (!isValidShift) {
      throw new Error("Invalid shift");
    }
    const approvedShift = new Shift(
      params.shift.id,
      params.shift.employeeId,
      "APPROVED",
      params.shift.startAt,
      params.shift.endAt,
    );
    return approvedShift;
  }

  private async isValidShift(shift: Shift, storeId: number): Promise<boolean> {
    const schedules = await this.scheduleRepository.findByStoreId(storeId);
    const shiftDateSchedule = schedules.find((schedule) => {
      return schedule.weekDay.weekDayToNumber === shift.startAt.getDay();
    });
    if (!shiftDateSchedule) {
      return false;
    }
    if (
      !shiftDateSchedule.startAt ||
      shift.startAt < shiftDateSchedule.startAt
    ) {
      return false;
    }
    if (!shiftDateSchedule.endAt || shift.endAt > shiftDateSchedule.endAt) {
      return false;
    }
    return true;
  }
}
