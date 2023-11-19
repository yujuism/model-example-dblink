import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Sequelize,
  HasMany,
  Index,
} from 'sequelize-typescript'
import { Employee } from './Employee.model'
import { Project } from './Project.model'

@Table({ modelName: 'Department', tableName: 'department' })
export class Department extends Model {
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

  @HasMany(() => Employee)
  Employees: Employee[]

  @HasMany(() => Project)
  Projects: Project[]
}
