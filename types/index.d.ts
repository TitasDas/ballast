export type Carried = { id: string; label: string; tokens: number; sentAt: number }
export type Trim = { id: string; path: string; cutTokens: number; sentAt: number }

declare module 'claude-code' {
  interface PluginState {
    ballast: {
      rulesOn: boolean
      trimOn: boolean
      isCollapsed: boolean
      verdict: string
      carried: Shaped<Carried[]>
      trims: Shaped<Trim[]>
      requests: number
      contextTokens: number
      window: number
      scale: number
      pending: number
      lastOutput: number
    }
  }
}
