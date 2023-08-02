import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Length } from 'class-validator';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  link: string;

  @Column()
  image: string;
  //valid URL link

  @Column()
  price: number;
  //rounded ,00

  @Column()
  raised: number;
  //rounded ,00

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @Column()
  @Length(1, 1024)
  description: string;

  @Column()
  offers: string[];
  //массив ссылок на заявки скинуться от других пользователей

  @Column()
  copied: number;
  //целое десятичное
}
