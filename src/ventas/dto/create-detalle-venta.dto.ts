import { IsInt, Min } from 'class-validator';

export class CreateDetalleVentaDto {
  @IsInt()
  productoId: number;

  @IsInt()
  @Min(1)
  cantidad: number;

  @Min(0)
  precioUnitario: number;
}