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
import { Post } from './Post.model'
import { Comment } from './Comment.model'
import { Like } from './Like.model'

@Table({ modelName: 'User', tableName: 'user' })
export class User extends Model {
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
  username: string

  @Column
  email: string

  @HasMany(() => Post)
  Posts: Post[]

  @HasMany(() => Comment)
  Comments: Comment[]

  @HasMany(() => Like)
  Likes: Like[]
}
