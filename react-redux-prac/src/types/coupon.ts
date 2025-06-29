export type CouponCode = "OFF10" | "OFF20" | "FIXED10" | "FIXED20";

export type Coupon = {
  code: CouponCode;
  name: string;
  type: "percent" | "fixed";
  value: number;
};
