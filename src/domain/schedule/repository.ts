import { Schedule } from "./model";

export interface ScheduleRepository {
  findByStoreId: (storeId: number) => Promise<Schedule[]>;
}
