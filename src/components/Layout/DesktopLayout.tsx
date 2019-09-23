import React from "react"
import { Fabric, Stack } from "office-ui-fabric-react"

export class DesktopLayout extends React.Component {
  public render(): JSX.Element {
    return (
      <Fabric>
        <Stack>
          <Stack.Item>{this.props.children}</Stack.Item>
        </Stack>
      </Fabric>
    )
  }
}
