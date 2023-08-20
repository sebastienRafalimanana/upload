import { Test, TestingModule } from '@nestjs/testing';
import { ProductSalesLineService } from './product-sales-line.service';

describe('ProductSalesLineService', () => {
  let service: ProductSalesLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSalesLineService],
    }).compile();

    service = module.get<ProductSalesLineService>(ProductSalesLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
