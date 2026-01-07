import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  SVGProps,
} from "react";

type SvgIconComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>
>;

export type InlineIconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  icon: SvgIconComponent;
};

export default function InlineIcon({
  icon: Icon,
  style,
  ...props
}: InlineIconProps) {
  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      {...props}
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: "-0.125em",
        ...style,
      }}
    />
  );
}
