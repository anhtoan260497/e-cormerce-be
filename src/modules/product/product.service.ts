import { Inject, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ProductSchema, Product } from "src/schema/product.schema";


@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private readonly productModel : Model<Product>) {}

    async getProduct(id : Number | String) : Promise<Product> {
        const data = await this.productModel.findOne({product_id : id})
        return data
    }
}