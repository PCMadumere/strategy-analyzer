import type { Market } from "./market.js";

export type StrategySignal =
  | "LONG"
  | "SHORT"
  | "EXIT"
  | "NONE";

export interface StrategyDefinition {
  id: string;
  name: string;
  description: string;

  market: Market;

  parameters: Record<string, number | string | boolean>;
}

export interface StrategySignalResult {
  signal: StrategySignal;
  timestamp: number;
  reason?: string;
};