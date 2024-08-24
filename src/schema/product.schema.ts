import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Product {
    @Prop({required : true, index : true, maxlength : 15})
    product_id : Number

    @Prop({required : true, maxlength : 255})
    product_name : String

    @Prop({required : true, maxlength: 15})
    category_id : Number
}

export const ProductSchema = SchemaFactory.createForClass(Product)