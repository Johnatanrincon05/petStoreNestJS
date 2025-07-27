import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { VentasModule } from './ventas/ventas.module';
import { Venta } from './ventas/entities/venta.entity';
import { DetalleVenta } from './ventas/entities/detalle-venta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'petstore',
      entities: [User, Product, Venta, DetalleVenta],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    VentasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
