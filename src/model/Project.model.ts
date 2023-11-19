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
import { Department } from './Department.model'

@Table({ modelName: 'Project', tableName: 'project' })
export class Project extends Model {
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

  @ForeignKey(() => Department)
  @Column({
    type: DataType.UUID,
  })
  department_id: string

  @BelongsTo(() => Department)
  Department: Department
}
