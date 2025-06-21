export type ConfigService = {
  getConfig: () => Record<string, unknown>
  getProperty: <T = string>(key: string) => T
}
