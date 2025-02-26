/* eslint-disable @typescript-eslint/no-explicit-any */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';
// Remove if not used:
// type LogMessage = string | number | boolean | object;

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message} ${
      data ? JSON.stringify(data, null, 2) : ''
    }`;
  }

  info(message: string, data?: any) {
    if (this.isDevelopment) {
      console.info(this.formatMessage('info', message, data));
    }
  }

  warn(message: string, data?: any) {
    if (this.isDevelopment) {
      console.warn(this.formatMessage('warn', message, data));
    }
  }

  error(message: string, error?: any) {
    console.error(this.formatMessage('error', message, error));
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      console.debug(this.formatMessage('debug', message, data));
    }
  }
}

export const logger = Logger.getInstance(); 