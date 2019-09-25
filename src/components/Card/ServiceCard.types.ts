import { IStyle, IStyleFunctionOrObject, ITheme } from "office-ui-fabric-react"

export interface IServiceCardProps {
  image: any
  imageAlt: string
  isSmallDown?: boolean
  theme?: ITheme
  styles?: IStyleFunctionOrObject<IServiceCardStyleProps, IServiceCardStyles>
}

export interface IVerticalServiceCardProps extends IServiceCardProps {
  title: JSX.Element
}
