import { Table, Column, Model, HasMany } from 'sequelize-typescript';
@Table({timestamps: true, paranoid: true, freezeTableName: true})
export class Headquarter extends Model<Headquarter> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  name: string;

  @HasMany(() => User)
  users: User[];
}