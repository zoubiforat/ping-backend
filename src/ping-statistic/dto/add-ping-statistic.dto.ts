import { IsNotEmpty, IsUrl, IsString, IsNumber, IsPositive, IsInt } from "class-validator";

export class AddPingStatisticDto {
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
