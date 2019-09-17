import React from "react"
import {
  Separator,
  Stack,
  Text,
  Icon,
  Link,
  DefaultPalette,
} from "office-ui-fabric-react"
import useMedia from "use-media"

import { Small } from "../utilities/mediaQuery"

const Footer = () => {
  const isSmall = useMedia(Small)

  return (
    <Stack
      tokens={{ childrenGap: 20 }}
      styles={{ root: { marginTop: 20, marginBottom: 20 } }}
    >
      <Stack.Item>
        <Stack
          reversed={isSmall}
          horizontal={!isSmall}
          horizontalAlign="center"
          tokens={{ childrenGap: 40 }}
        >
          <Stack.Item
            styles={{ root: { textAlign: isSmall ? "center" : "left" } }}
          >
            <Text as="h3" variant="xLarge" block>
              Opening Times
            </Text>
            <Text as="p" variant="mediumPlus">
              Monday 9:00 am - 6:00 pm
              <br />
              Tuesday 9:00 am - 6:00 pm
              <br />
              Wednesday 9:00 am - 5:00 pm
              <br />
              Thursday 9:00 am - 6:00 pm
              <br />
              Friday 9:00 am - 7:00 pm
              <br />
              Saturday 9:00 am - 5:00 pm
              <br />
              Sunday 9:00 am - 2:00 pm
            </Text>
          </Stack.Item>
          <Separator vertical={!isSmall} />
          <Stack.Item
            styles={{ root: { textAlign: isSmall ? "center" : "left" } }}
          >
            <Text as="h3" variant="xLarge" block>
              Domestic &#38; Commercial Drain Services
            </Text>
            <Text as="p" variant="mediumPlus">
              67 Merryfield Road
              <br />
              Dudley
              <br />
              West Midlands
              <br />
              DY1 2ND
              <br />
            </Text>
            <div style={{ paddingTop: 4 }}>
              <Icon
                iconName="phone"
                styles={{ root: { position: "relative", top: 2 } }}
              />
              <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                01384 357446
              </Text>
            </div>
            <div style={{ paddingTop: 4 }}>
              <Icon
                iconName="phone"
                styles={{ root: { position: "relative", top: 2 } }}
              />
              <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                07974 243764
              </Text>
            </div>
            <div style={{ paddingTop: 4 }}>
              <Icon
                iconName="mail"
                styles={{ root: { position: "relative", top: 2 } }}
              />
              <Link
                as="a"
                href="mailto:stevetomkins53@gmail.com"
                styles={{
                  root: {
                    selectors: {
                      ":hover": {
                        color: DefaultPalette.teal,
                        textDecoration: "none",
                      },
                    },
                  },
                }}
              >
                <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                  stevetomkins53@gmail.com
                </Text>
              </Link>
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack
          horizontal={!isSmall}
          horizontalAlign="center"
          tokens={{ childrenGap: isSmall ? 20 : 60 }}
          styles={{ root: { marginTop: 60 } }}
        >
          <Stack.Item
            styles={{ root: { textAlign: isSmall ? "center" : "left" } }}
          >
            <Text>
              &copy; {new Date().getFullYear()} - Domestic &#38; Commercial
              Drain Services
            </Text>
          </Stack.Item>
          <Stack.Item styles={{ root: { textAlign: "right" } }}>
            <Text>Website design by ITadams</Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  )
}

Footer.whyDidYouRender = true

export default Footer
