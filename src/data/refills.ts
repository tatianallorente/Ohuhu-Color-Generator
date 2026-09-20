import type { RefillColor } from '@/types';
import refillsData from './refills.json';

export const refills = refillsData as RefillColor[];
export const refillColorCodes = new Set(refills.map((refill) => refill.code));
