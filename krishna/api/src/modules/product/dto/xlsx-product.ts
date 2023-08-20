import { ApiProperty } from "@nestjs/swagger";

export type ProductType = {
    productName: string;
    productReference ?: string;
    productCode: string;
    productUrlImage?: string;
    productThreshold?: number;
    productQuantity: number;
}

export class ProductImport {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
  }