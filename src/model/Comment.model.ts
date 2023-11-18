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
import { User } from './User.model'
import { Post } from './Post.model'

@Table({ modelName: 'Comment', tableName: 'comment' })
export class Comment extends Model {
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
  text: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  id_user: string

  @BelongsTo(() => User)
  User: User

  @ForeignKey(() => Post)
  @Column({
    type: DataType.UUID,
  })
  id_post: string

  @BelongsTo(() => Post)
  Post: Post
}
