import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('product')

export class ProductsController {
    @Get('/:id')
    getProduct() {
        return 'get 1'
    }
    @Post()
    createProduct() {
        return 'create 1'
    }
    @Put('/:id')
    updateProduct() {
        return 'update 1'
    }
}