import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string): string {
    return process.env[key] || this.getDefaultConfig(key);
  }

  private getDefaultConfig(key: string): string {
    const defaultConfig: Record<string, string> = {
      JWT_SECRET: 'your-secret-key',
      JWT_EXPIRES_IN: '1h',
      DB_HOST: 'localhost',
      DB_PORT: '3306',
      DB_USERNAME: 'root',
      DB_PASSWORD: 'password',
      DB_DATABASE: 'ecommerce',
    };

    return defaultConfig[key] || '';
  }

  getJwtSecret(): string {
    return this.get('JWT_SECRET');
  }

  getJwtExpiresIn(): string {
    return this.get('JWT_EXPIRES_IN');
  }

  getDatabaseConfig() {
    return {
      host: this.get('DB_HOST'),
      port: parseInt(this.get('DB_PORT'), 10),
      username: this.get('DB_USERNAME'),
      password: this.get('DB_PASSWORD'),
      database: this.get('DB_DATABASE'),
    };
  }
}
