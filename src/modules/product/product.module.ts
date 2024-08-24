import { Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductService } from "./product.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema, Product } from "src/schema/product.schema";

@Module({
    controllers : [ProductsController],
    providers : [ProductService],
    imports : [MongooseModule.forFeature([{name : Product.name, schema : ProductSchema}])],
})

export class ProductsModule {}