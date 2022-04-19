import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {Request} from 'express';

@Injectable()
export class AuthService {
    constructor(
        protected jwtService: JwtService
    ) {

    }

    async user(request: Request): Promise<string> {
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verifyAsync(cookie)
        return data['id']
    }
}
