import IconProps from "./IconProps";

export function MinusBold({ color, height, width }: IconProps) {
  return (
    <svg
      width={width || "32"}
      height={height || "32"}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 16C3.5 15.1716 4.17157 14.5 5 14.5H27C27.8284 14.5 28.5 15.1716 28.5 16C28.5 16.8284 27.8284 17.5 27 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16Z"
        fill={color}
      />
    </svg>
  );
}
