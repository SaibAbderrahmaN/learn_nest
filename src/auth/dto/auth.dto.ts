import { IsString, IsInt , IsEmail ,IsNotEmpty} from 'class-validator';


export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email:String;
    @IsNotEmpty()
    @IsString()
    password:String
}