import { IsDefined,IsBoolean, IsNumberString, IsNumber } from 'class-validator'

export class ProductDto {
    @IsNumber()
    id: Number;

}