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
  HasMany,
  Index,
} from 'sequelize-typescript'
import { User } from './User.model'
import { Comment } from './Comment.model'
import { Like } from './Like.model'

@Table({ modelName: 'Post', tableName: 'post' })
export class Post extends Model {
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
  title: string

  @Column
  content: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  id_user: string

  @BelongsTo(() => User)
  User: User

  @HasMany(() => Comment)
  Comments: Comment[]

  @HasMany(() => Like)
  Likes: Like[]
}
