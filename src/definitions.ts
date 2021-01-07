declare module '@capacitor/core' {
  interface PluginRegistry {
    ExitAppIosPlugin: ExitAppIosPluginPlugin;
  }
}

export interface ExitAppIosPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
