import type { SVGProps } from "react";

export type CustomIconProps = SVGProps<SVGSVGElement> & { size?: number };
export type CustomIcon = (props: CustomIconProps) => React.ReactElement;

export const customIcons = {
  QuoteMark: ({ width = 46, height = 27, ...props }: CustomIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 46 27" fill="none" className={props.className ?? ''}>
      <g clipPath="url(#clip0_25961_2239)">
      <path d="M10.445 20.9034C16.3359 20.9034 20.8899 16.3354 20.8899 10.4584C20.8899 4.58137 16.3359 -0.000488281 10.445 -0.000488281C4.554 -0.000488281 0 4.56744 0 10.4445C0 16.3215 4.56793 20.8894 10.445 20.8894V20.9034Z" fill="#EF4444"/>
      <path d="M0 10.4438H16.0992V26.543C7.21399 26.543 0 19.329 0 10.4438Z" fill="#EF4444"/>
      <path d="M34.8862 20.9034C40.7772 20.9034 45.3312 16.3354 45.3312 10.4584C45.3312 4.58137 40.7772 -0.000488281 34.8862 -0.000488281C28.9953 -0.000488281 24.4413 4.56744 24.4413 10.4445C24.4413 16.3215 29.0092 20.8894 34.8862 20.8894V20.9034Z" fill="#EF4444"/>
      <path d="M24.4413 10.4438H40.5405V26.543C31.6553 26.543 24.4413 19.329 24.4413 10.4438Z" fill="#EF4444"/>
      </g>
      <defs>
      <clipPath id="clip0_25961_2239">
      <rect width="45.3451" height="26.5441" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  ),
} satisfies Record<string, CustomIcon>;

export type CustomIconName = keyof typeof customIcons;
export const customIconNames = Object.keys(customIcons) as CustomIconName[];

export function isCustomIconName(v: unknown): v is CustomIconName {
  return typeof v === 'string' && v in customIcons;
}