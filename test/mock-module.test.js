import { ProductService } from "../src/product-service"
import { getAllProduct, getProductById } from "../src/database";


jest.mock('../src/database')

test('mock modules getProductById', () => {
    getProductById.mockImplementation((id) => {
        return {id: id, name : 'product mock'}
    })
    const product = ProductService.findById(1);

    expect(product).toEqual({id: 1, name: "product mock"})
})

test('moack modules getAllProducts', () => {
    const products = [
        {
            id: 1, name : 'mock product 1'
        },
        {
            id: 1, name : 'mock product 1'
        }
    ]

    getAllProduct.mockReturnValue(products)

    expect(ProductService.findAll()).toEqual(products)
})