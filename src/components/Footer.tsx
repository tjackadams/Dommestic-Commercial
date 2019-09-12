import React from "react"
import { Separator, Stack, Text } from "office-ui-fabric-react"

const Footer = () => {
  return (
    <Stack
      tokens={{ childrenGap: 20 }}
      styles={{ root: { marginTop: 20, marginBottom: 20 } }}
    >
      <Stack.Item>
        <Stack horizontal horizontalAlign="center" tokens={{ childrenGap: 40 }}>
          <Stack.Item>
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
          <Separator vertical />
          <Stack.Item>right</Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack
          horizontal
          horizontalAlign="center"
          tokens={{ childrenGap: 60 }}
          styles={{ root: { marginTop: 60 } }}
        >
          <Stack.Item styles={{ root: { textAlign: "left" } }}>
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

export default Footer
