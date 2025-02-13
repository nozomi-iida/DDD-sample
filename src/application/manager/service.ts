import { ScheduleRepository } from "@/domain/schedule/repository";
import { ShiftRepository } from "@/domain/shift/repository";
import { ShiftDomainService } from "@/domain/shift/service";

export class ManagerService {
  constructor(
    private readonly shiftRepository: ShiftRepository,
    private readonly scheduleRepository: ScheduleRepository,
  ) {}
  async approveShift(params: {
    shiftId: number;
    startAt: Date;
    endAt: Date;
  }): Promise<void> {
    const shift = await this.shiftRepository.find(params.shiftId);
    await new ShiftDomainService(this.scheduleRepository).approve({
      shift,
      storeId: 0,
    });
  }
}
