import { ProductSalesLineDto } from "./product-sales-line.dto"

export class OrderDto {
	productLines:ProductSalesLineDto[]
    amount:number
    modeOfPayment:number
}
