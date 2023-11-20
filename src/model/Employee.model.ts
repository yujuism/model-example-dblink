import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Sequelize,
  Index,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'
import { Department } from './Department.model'
import { Task } from './Task.model'

@Table({ modelName: 'Employee', tableName: 'employee' })
export class Employee extends Model {
  @Index({ unique: true })
  @Column({
    type: DataType.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
    allowNull: false,
    primaryKey: true,
  })
  id: string

  @CreatedAt
  @Column({
    defaultValue: Sequelize.literal('now()'),
    allowNull: true,
  })
  created_at: Date

  @UpdatedAt
  @Column({
    allowNull: true,
  })
  updated_at: Date

  @DeletedAt
  deleted_at: Date

  @Index
  @Column
  code: string

  @Column
  name: string

  @Column
  email: string

  @ForeignKey(() => Department)
  @Column({
    type: DataType.UUID,
  })
  department_id: string

  @BelongsTo(() => Department)
  Department: Department

  @HasMany(() => Task)
  Tasks: Task[]
}
