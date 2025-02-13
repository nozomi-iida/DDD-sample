import { ShiftStatus } from "@prisma/client";
import { Shift } from "@/domain/shift/model";

export interface ShiftRepository {
  list: (query: { status: ShiftStatus }) => Promise<Shift[]>;
  find: (id: number) => Promise<Shift>;
  register: (shift: Shift[]) => Promise<void>;
  isExist: (startAt: Date, endAt: Date) => Promise<boolean>;
}
