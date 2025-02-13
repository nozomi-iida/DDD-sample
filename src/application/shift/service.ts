import { Shift, ShiftStatus } from "@/domain/shift/model";
import { ShiftRepository } from "@/domain/shift/repository";

export class ShiftService {
  constructor(private readonly shiftRepository: ShiftRepository) {}
  public async register(
    params: {
      userId: number;
      status: ShiftStatus;
      startAt: Date;
      endAt: Date;
    }[],
  ): Promise<void> {
    const shifts = params.map((param) => {
      return new Shift(param.userId, param.status, param.startAt, param.endAt);
    });

    await this.shiftRepository.register(shifts);
    const { firstDay, lastDay } = ShiftService.getShiftDateRange(shifts);
    const isNew = await this.shiftRepository.isExist(firstDay, lastDay);
    if (isNew) {
      // TODO: 新規シフトが登録されたLINE通知を送信する
    } else {
      // TODO: 既存シフトが更新されたLINE通知を送信する
    }
  }

  private static getShiftDateRange(shifts: Shift[]): {
    firstDay: Date;
    lastDay: Date;
  } {
    return shifts.reduce(
      (acc, shift) => {
        if (shift.startAt < acc.firstDay) {
          acc.firstDay = shift.startAt;
        }
        if (shift.endAt > acc.lastDay) {
          acc.lastDay = shift.endAt;
        }
        return acc;
      },
      { firstDay: shifts[0].startAt, lastDay: shifts[0].endAt },
    );
  }
}
