export class CreateProductDto {
    productName:string;
    productReference: string;
    productCode?:string;
    productUrlImage?:string;
    productThreshold:number;
    productQuantity:number
}
