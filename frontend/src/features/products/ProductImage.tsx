import { CameraIcon } from "../../icons/CameraIcon";
import { SensorIcon } from "../../icons/SensorIcon";
import { ProtectionIcon } from "../../icons/ProtectionIcon";
import type { ProductCategory } from "../../types";

const ICON_BY_CATEGORY: Record<ProductCategory, typeof CameraIcon> = {
  camera: CameraIcon,
  sensor: SensorIcon,
  protection: ProtectionIcon,
};

type ProductImageProps = {
  category: ProductCategory;
  image?: string;
  size?: "card" | "thumbnail";
};

export function ProductImage({ category, image, size = "card" }: ProductImageProps) {
  const Icon = ICON_BY_CATEGORY[category];
  const boxClass =
    size === "thumbnail"
      ? "flex h-[41px] w-[41px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-surface-muted"
      : "flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-muted";

  return (
    <div className={boxClass}>
      {image ? <img src={image} alt="" className="h-full w-full object-cover" /> : <Icon />}
    </div>
  );
}
