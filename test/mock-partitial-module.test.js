import { getAllProduct } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock('../src/database.js', () => {
    const originalModule = jest.requireActual('../src/database.js');

    return {
        __esModule: true,
        ...originalModule,
        getAllProduct: jest.fn()
    }
})

test('mock modules getAllProduct', () => {
    const products = [
        {
            id: 1, name : 'mock product 1'
        },
        {
            id: 1, name : 'mock product 1'
        }
    ]

    getAllProduct.mockReturnValue(products);

    expect(ProductService.findAll()).toEqual(products)
})

test.failing('mock module getProductById ', () => {
  ProductService.findById(1)
})
