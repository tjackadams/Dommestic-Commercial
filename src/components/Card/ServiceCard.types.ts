import { IStyle, IStyleFunctionOrObject, ITheme } from "office-ui-fabric-react"

export interface IServiceCardProps {
  image: any
  imageAlt: string
  isSmallDown?: boolean
  theme?: ITheme
  styles?: IStyleFunctionOrObject<IServiceCardStyleProps, IServiceCardStyles>
}

export type IServiceCardStyleProps = Pick<
  IServiceCardProps,
  "theme" | "isSmallDown"
>

export interface IServiceCardStyles {
  root: IStyle
  image: IStyle
  content: IStyle
}
