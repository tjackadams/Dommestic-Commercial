import React from "react"
import { Stack, Separator } from "office-ui-fabric-react"

import {
  AdditionalContactInformation,
  CopyrightInformation,
  Credits,
  OpeningTimes,
} from "../"
import { MobileSelector } from "../../styling"

export class Footer extends React.Component {
  public render(): JSX.Element {
    return (
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{ root: { marginTop: 20, marginBottom: 20 } }}
      >
        <Stack.Item>
          <Stack
            horizontal
            horizontalAlign="center"
            verticalAlign="center"
            tokens={{ childrenGap: 40 }}
            styles={{
              root: {
                selectors: {
                  [MobileSelector]: {
                    flexDirection: "column",
                  },
                },
              },
            }}
          >
            <Stack.Item
              styles={{
                root: {
                  selectors: {
                    [MobileSelector]: {
                      textAlign: "center",
                      marginLeft: "0 !important",
                    },
                  },
                },
              }}
            >
              <OpeningTimes />
            </Stack.Item>
            <Stack.Item
              styles={{
                root: {
                  height: 120,
                  selectors: {
                    [MobileSelector]: {
                      display: "none",
                    },
                  },
                },
              }}
            >
              <Separator vertical />
            </Stack.Item>
            <Stack.Item
              styles={{
                root: {
                  display: "none",
                  width: "60%",
                  selectors: {
                    [MobileSelector]: {
                      display: "block",
                      marginLeft: "0 !important",
                      marginTop: 10,
                    },
                  },
                },
              }}
            >
              <Separator />
            </Stack.Item>
            <Stack.Item
              styles={{
                root: {
                  selectors: {
                    [MobileSelector]: {
                      textAlign: "center",
                      marginLeft: "0 !important",
                    },
                  },
                },
              }}
            >
              <AdditionalContactInformation />
            </Stack.Item>
            <Stack.Item
              styles={{
                root: {
                  textAlign: "center",
                  display: "none",
                  marginTop: 20,
                  selectors: {
                    [MobileSelector]: {
                      display: "block",
                      marginLeft: "0 !important",
                    },
                  },
                },
              }}
            >
              <CopyrightInformation />
            </Stack.Item>
            <Stack.Item
              styles={{
                root: {
                  textAlign: "center",
                  display: "none",
                  marginTop: 10,
                  selectors: {
                    [MobileSelector]: {
                      display: "block",
                      marginLeft: "0 !important",
                    },
                  },
                },
              }}
            >
              <Credits />
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item
          styles={{
            root: {
              selectors: {
                [MobileSelector]: {
                  display: "none",
                },
              },
            },
          }}
        >
          <Stack
            horizontal
            horizontalAlign="space-evenly"
            tokens={{ childrenGap: 60 }}
            styles={{ root: { marginTop: 60 } }}
          >
            <Stack.Item>
              <CopyrightInformation />
            </Stack.Item>
            <Stack.Item styles={{ root: { textAlign: "right" } }}>
              <Credits />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    )
  }
}
