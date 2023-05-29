import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aplication.app',
  appName: 'app-movil',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
