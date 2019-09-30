import React from "react"
import { CommandBar, DefaultPalette, Stack } from "office-ui-fabric-react"
import { scroller } from "react-scroll"

export class MobileNavMenu extends React.Component {
  public render(): JSX.Element {
    return (
      <Stack>
        <Stack.Item>
          <CommandBar
            items={[]}
            ariaLabel="Menu Button"
            overflowItems={[
              {
                key: "home",
                name: "Home",
                onClick: () =>
                  scroller.scrollTo("home", {
                    smooth: true,
                    offset: -70,
                  }),
                iconProps: {
                  iconName: "home",
                  color: DefaultPalette.tealLight,
                },
              },
              {
                key: "services",
                name: "Services",
                onClick: () =>
                  scroller.scrollTo("services", {
                    smooth: true,
                    offset: -70,
                  }),
                iconProps: {
                  iconName: "CRMServices",
                },
              },
              {
                key: "contact",
                name: "Contact",
                onClick: () =>
                  scroller.scrollTo("contact", {
                    smooth: true,
                    offset: -70,
                  }),
                iconProps: {
                  iconName: "Phone",
                },
              },
            ]}
          />
        </Stack.Item>
      </Stack>
    )
  }
}
