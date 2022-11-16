import IconProps from "./IconProps";

export function CoffeeFill({ color, height, width }: IconProps) {
  return (
    <svg
      width={width || "32"}
      height={height || "32"}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7ZM15 8C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8ZM19 8C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V7C18 7.26522 18.1054 7.51957 18.2929 7.70711C18.4804 7.89464 18.7348 8 19 8ZM31 15V16C30.9993 17.2715 30.5142 18.495 29.6434 19.4215C28.7726 20.3481 27.5815 20.908 26.3125 20.9875C25.6237 22.9139 24.4634 24.6372 22.9375 26H26C26.2652 26 26.5196 26.1054 26.7071 26.2929C26.8946 26.4804 27 26.7348 27 27C27 27.2652 26.8946 27.5196 26.7071 27.7071C26.5196 27.8946 26.2652 28 26 28H4C3.73478 28 3.48043 27.8946 3.29289 27.7071C3.10536 27.5196 3 27.2652 3 27C3 26.7348 3.10536 26.4804 3.29289 26.2929C3.48043 26.1054 3.73478 26 4 26H7.0625C5.78816 24.8718 4.76726 23.4865 4.06704 21.9352C3.36682 20.384 3.00316 18.702 3 17V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H26C27.3261 10 28.5979 10.5268 29.5355 11.4645C30.4732 12.4021 31 13.6739 31 15ZM29 15C28.9993 14.3802 28.8066 13.7758 28.4485 13.27C28.0904 12.7641 27.5844 12.3816 27 12.175V17C27.0008 17.628 26.9506 18.2551 26.85 18.875C27.4705 18.6917 28.015 18.3127 28.4025 17.7946C28.79 17.2765 28.9996 16.647 29 16V15Z"
        fill={color}
      />
    </svg>
  );
}
