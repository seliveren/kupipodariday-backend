import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.wishlists)
  user: number;
  //id cоздавшего список?

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  @Length(0, 1500)
  description: string;

  @Column()
  image: string;

  @Column()
  items: string[];
  //содержит набор ссылок на подарки
}
