import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.offers)
  user: number;
  //содержит id желающего скинуться

  @Column()
  item: string;

  @Column()
  amount: number;
  //округляется до двух знаков после запятой

  @Column()
  hidden: boolean;
  //default = false
}
