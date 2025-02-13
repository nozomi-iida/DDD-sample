import { User } from "@/domain/user/model";

export class Manager extends User {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly storeId: string,
  ) {
    super(id, name, storeId);
  }
}
