declare module 'xmlrpc' {
  export function createSecureClient(options: {
    host: string;
    port: number;
    path: string;
  }): {
    methodCall(method: string, params: any[], callback: (error: any, value: any) => void): void;
  };
} 