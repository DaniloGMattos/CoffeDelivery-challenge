import IconProps from "./IconProps";

export function CreditCardRegular({ color, height, width }: IconProps) {
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
        d="M2 8C2 6.89543 2.89543 6 4 6H28C29.1046 6 30 6.89543 30 8V24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24V8ZM28 8H4V24H28V8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 21C20 20.4477 20.4477 20 21 20H25C25.5523 20 26 20.4477 26 21C26 21.5523 25.5523 22 25 22H21C20.4477 22 20 21.5523 20 21Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 21C14 20.4477 14.4477 20 15 20H17C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H15C14.4477 22 14 21.5523 14 21Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.1125C2 11.5602 2.44772 11.1125 3 11.1125H29C29.5523 11.1125 30 11.5602 30 12.1125C30 12.6648 29.5523 13.1125 29 13.1125H3C2.44772 13.1125 2 12.6648 2 12.1125Z"
        fill="#574F4D"
      />
    </svg>
  );
}
