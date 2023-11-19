import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Sequelize,
  BelongsTo,
  ForeignKey,
  Index,
} from 'sequelize-typescript'
import { Project } from './Project.model'
import { Employee } from './Employee.model'

@Table({ modelName: 'Task', tableName: 'task' })
export class Task extends Model {
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

  @Column
  name: string

  @ForeignKey(() => Project)
  @Column({
    type: DataType.UUID,
  })
  project_id: string

  @BelongsTo(() => Project)
  Project: Project

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.UUID,
  })
  employee_id: string

  @BelongsTo(() => Employee)
  Employee: Employee
}
