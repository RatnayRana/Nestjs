import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController {
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req:Request & {user:any}){
        console.log(req.user); // Logs only the authenticated user information
        return req.user; 
    }
}
