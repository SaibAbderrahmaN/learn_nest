import { Controller,Get,UseGuards,Req} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport"

@Controller('user')
export class UserController {
    @UseGuards(AuthGuard('jwt'))
    @Get("/me")
    getMe(@Req() req:Request){
        console.log({user : req})
        return "user info "
    }
}
