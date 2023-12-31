import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class PingExecuterDto {
    @IsUrl()
    @IsString()
    @IsNotEmpty()
    host: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    count: number;
}
