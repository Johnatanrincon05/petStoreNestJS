import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { DetalleVenta } from './detalle-venta.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => User, (user) => user.ventas, { eager: true })
  cliente: User;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @OneToMany(() => DetalleVenta, (detalle) => detalle.venta, {
    cascade: true,
    eager: true,
  })
  detalleVenta: DetalleVenta[];
}
