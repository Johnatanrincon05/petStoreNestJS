import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { DetalleVenta } from './entities/detalle-venta.entity';
import { Venta } from './entities/venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Venta, DetalleVenta, User])],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
