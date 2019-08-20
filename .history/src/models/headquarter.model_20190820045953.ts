import { Table, Column, Model, HasMany } from "sequelize-typescript";
@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export class Headquarter extends Model<Headquarter> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({unique:true})
  name: string;

  @Column
  status: boolean;
}
