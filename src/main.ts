import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';



async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	app.enableCors({
	origin: ['http://localhost:3000', 'https://www.google.com'],
	methods: ['POST', 'PUT', 'DELETE', 'GET'],
	});
	const configService = app.get(ConfigService);
	await app.listen(configService.get('port'));
	console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
