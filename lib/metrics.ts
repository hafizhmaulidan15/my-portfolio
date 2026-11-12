/**
 * Core operational calculation and validation functions for dairy floor operations
 */

export interface MilkBatch {
  rawMilkLiters: number;
  cheeseOutputKg: number;
  rejectLiters: number;
}

/**
 * Calculates cheese yield percentage from raw milk input and cheese output
 * Standard target is ~10% (e.g. 500L milk yields ~42-50kg mozzarella)
 */
export function calculateCheeseYield(rawMilkLiters: number, cheeseOutputKg: number): number {
  if (rawMilkLiters <= 0) return 0;
  const yieldPct = (cheeseOutputKg / (rawMilkLiters * 1.03)) * 100;
  return Number(yieldPct.toFixed(2));
}

/**
 * Calculates operational reject rate percentage against quality threshold
 */
export function calculateRejectRate(rejectLiters: number, totalProcessedLiters: number): number {
  if (totalProcessedLiters <= 0) return 0;
  const rate = (rejectLiters / totalProcessedLiters) * 100;
  return Number(rate.toFixed(3));
}

/**
 * Validates if intake milk meets SNF (Solid-Non-Fat) and Fat QC minimums
 * Indonesian SNF standard: >= 7.8%, Fat: >= 3.0%
 */
export function validateMilkQuality(fat: number, snf: number, alcoholPass: boolean): {
  passed: boolean;
  grade: 'Tier 1' | 'Tier 2' | 'Substandard';
  notes: string;
} {
  if (!alcoholPass) {
    return {
      passed: false,
      grade: 'Substandard',
      notes: 'Failed alcohol coagulation test. Acidity too high.'
    };
  }

  if (fat >= 4.0 && snf >= 8.2) {
    return {
      passed: true,
      grade: 'Tier 1',
      notes: 'Premium cheese-grade milk suitable for Mozzarella and Cheddar.'
    };
  }

  if (fat >= 3.0 && snf >= 7.8) {
    return {
      passed: true,
      grade: 'Tier 2',
      notes: 'Standard pasteurized drinking milk grade.'
    };
  }

  return {
    passed: false,
    grade: 'Substandard',
    notes: 'Below SNF or Fat minimum standard. Reject batch.'
  };
}
