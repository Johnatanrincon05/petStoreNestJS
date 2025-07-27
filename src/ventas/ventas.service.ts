import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';
import { DetalleVenta } from './entities/detalle-venta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Venta)
    private ventasRepository: Repository<Venta>,
    @InjectRepository(User)
    private clientesRepository: Repository<User>,
  ) {}
  async create(dto: CreateVentaDto): Promise<Venta> {
    const cliente = await this.clientesRepository.findOneBy({
      id: dto.idCliente,
    });
    if (!cliente) {
      throw new Error('Cliente not found');
    }

    const venta = new Venta();
    venta.fecha = new Date(dto.fecha);
    venta.cliente = cliente;
    venta.detalleVenta = [];
    venta.total = 0;

    for (const d of dto.detalleVenta) {
      const detalle = new DetalleVenta();
      const producto = await this.productsRepository.findOneBy({
        id: d.productoId,
      });
      if (!producto) {
        throw new Error(`Producto with id ${d.productoId} not found`);
      }
      detalle.producto = producto;
      detalle.cantidad = d.cantidad;
      detalle.precioUnitario = d.precioUnitario;
      venta.total += detalle.cantidad * detalle.precioUnitario;
      venta.detalleVenta.push(detalle);
    }

    return this.ventasRepository.save(venta);
  }

  findAll() {
    return `This action returns all ventas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
