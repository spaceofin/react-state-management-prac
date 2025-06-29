import { useState } from "react";
import type { Coupon, CouponCode } from "../../types/coupon";
import { COUPONS } from "../../constants/coupons";
import { useAppDispatch } from "../../redux/hooks";
import { setAppliedCoupon } from "../../redux/cart/cartSlice";

function Coupon({
  coupon,
  isSelected,
  onSelect,
}: {
  coupon: Coupon;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`w-52 h-10 flex justify-center items-center ${
        isSelected
          ? "bg-gray-700/70 text-white border-gray-800/50"
          : "bg-white/50 text-gray-700/80 border-white/50"
      } rounded-md text-lg border-4 font-bold hover:cursor-pointer`}>
      {coupon.name}
    </div>
  );
}

export default function Coupons() {
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleCouponSelect = (code: CouponCode | null) => {
    if (selectedCoupon === code) {
      setSelectedCoupon("");
      dispatch(setAppliedCoupon(null));
    } else {
      setSelectedCoupon(code);
      dispatch(setAppliedCoupon(code));
    }
  };

  return (
    <div className="flex flex-col justify-between bg-stone-500/80 w-full h-74 rounded-md py-5 px-10 text-white gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold mb-4">Coupons</h2>
        <div className="grid grid-cols-3 gap-2">
          {COUPONS.map((coupon) => (
            <Coupon
              key={coupon.code}
              coupon={coupon}
              isSelected={selectedCoupon === coupon.code}
              onSelect={() => handleCouponSelect(coupon.code)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
