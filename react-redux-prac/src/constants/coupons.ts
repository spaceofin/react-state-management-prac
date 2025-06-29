import type { Coupon } from "../types/coupon";

export const COUPONS: Coupon[] = [
  { code: "OFF10", name: "10% Off Coupon", type: "percent", value: 0.1 },
  { code: "OFF20", name: "20% Off Coupon", type: "percent", value: 0.2 },
  { code: "FIXED10", name: "10 Off Coupon", type: "fixed", value: 10 },
  { code: "FIXED20", name: "20 Off Coupon", type: "fixed", value: 20 },
];
