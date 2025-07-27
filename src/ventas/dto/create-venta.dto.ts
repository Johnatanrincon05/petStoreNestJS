import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsInt, ValidateNested } from 'class-validator';
import { CreateDetalleVentaDto } from './create-detalle-venta.dto';


export class CreateVentaDto {
  @IsInt()
  idCliente: number;

  @IsDateString()
  fecha: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDetalleVentaDto)
  detalleVenta: CreateDetalleVentaDto[];
}
