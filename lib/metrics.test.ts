import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCheeseYield, calculateRejectRate, validateMilkQuality, computeSupplierShare } from './metrics';

test('calculateCheeseYield correctly computes mozzarella yield percentage', () => {
  // 500L milk with 42.2kg cheese output
  const yieldPct = calculateCheeseYield(500, 42.2);
  // 42.2 / (500 * 1.03) * 100 ~ 8.19%
  assert.ok(yieldPct > 8.0 && yieldPct < 8.5);
  
  // Zero volume edge case
  assert.equal(calculateCheeseYield(0, 50), 0);
});

test('calculateRejectRate accurately measures defect percentage below 1% threshold', () => {
  // 227L reject out of 64,750L processed = 0.350%
  const rejectPct = calculateRejectRate(227, 64750);
  assert.equal(rejectPct, 0.351);

  // Zero processed
  assert.equal(calculateRejectRate(10, 0), 0);
});

test('validateMilkQuality correctly routes grades based on fat and SNF thresholds', () => {
  // Tier 1 premium cheese grade
  const t1 = validateMilkQuality(4.2, 8.5, true);
  assert.equal(t1.passed, true);
  assert.equal(t1.grade, 'Tier 1');

  // Tier 2 drinking milk grade
  const t2 = validateMilkQuality(3.4, 8.0, true);
  assert.equal(t2.passed, true);
  assert.equal(t2.grade, 'Tier 2');

  // Substandard due to alcohol test failure
  const subAlcohol = validateMilkQuality(4.5, 8.8, false);
  assert.equal(subAlcohol.passed, false);
  assert.equal(subAlcohol.grade, 'Substandard');

  // Substandard due to low SNF
  const lowSnf = validateMilkQuality(3.2, 7.1, true);
  assert.equal(lowSnf.passed, false);
  assert.equal(lowSnf.grade, 'Substandard');
});

test('computeSupplierShare correctly divides volumes across cooperatives', () => {
  const suppliers = [
    { name: 'Karya Nugraha', volumeLiters: 32000, fatPercent: 4.1, snfPercent: 8.3, alcoholTestPass: true },
    { name: 'Kemuning', volumeLiters: 20000, fatPercent: 3.8, snfPercent: 8.1, alcoholTestPass: true },
    { name: 'Larasati', volumeLiters: 12750, fatPercent: 3.9, snfPercent: 8.2, alcoholTestPass: true }
  ];

  const shares = computeSupplierShare(suppliers);
  assert.equal(shares.length, 3);
  const totalPct = shares.reduce((sum, s) => sum + s.sharePct, 0);
  // Total share should sum to ~100%
  assert.ok(Math.abs(totalPct - 100) < 0.5);
  assert.equal(shares[0].name, 'Karya Nugraha');
  assert.equal(shares[0].sharePct, 49.4);
});
