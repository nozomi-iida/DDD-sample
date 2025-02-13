import { ShiftStatus } from "@/domain/shift/model";

export interface ManagerRepository {
  confirmShifts: (shiftId: nu) => Promise<void>;
}
