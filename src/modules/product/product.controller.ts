import { BadRequestException, Body, Controller, Get, Param, Post, Put, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductDto } from "./product.dto";
import { ProductService } from "./product.service";
import { ResponeData } from "src/global/globalClass";
import { HttpStatus, statusCode } from "src/global/globalEnum";
import { Product } from "src/schema/product.schema";

@Controller('product')

export class ProductsController {

    constructor(private readonly productService: ProductService) { }

    @Get('/:id')
    async getProduct(@Param('id') id: string): Promise<ResponeData<Product>> {
        try {
            return new ResponeData<Product>(await this.productService.getProduct(id), statusCode.SUCCESS, HttpStatus.SUCCESS)
        } catch {
            new BadRequestException('error')
        }

    }
    @Post()
    createProduct(@Body() body: ProductDto): string {
        console.log(body)
        return 'create 1'
    }
    @Put('/:id')
    updateProduct() {
        return 'update 1'
    }
}