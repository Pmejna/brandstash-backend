import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'You just arrived to BrandStash API v1!';
  }
}
