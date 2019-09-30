import React from "react"
import {
  Text,
  FontSizes,
  DefaultPalette,
  FontWeights,
  Link,
  Icon,
} from "office-ui-fabric-react"
import { Element } from "react-scroll"

export class AreasWeCover extends React.Component {
  public render(): JSX.Element {
    return (
      <Element name="areas-we-cover">
        <Text
          as="h2"
          block
          variant="xxLarge"
          styles={{
            root: {
              fontSize: FontSizes.xxLarge,
              color: DefaultPalette.neutralDark,
            },
          }}
        >
          Areas we Service
        </Text>
        <Text as="p" block variant="mediumPlus">
          Dudley
          <br />
          Wolverhampton
          <br />
          Cradley Heath
          <br />
          Halesowen
          <br />
          Netherton
          <br />
          Stourbridge
          <br />
          Tipton
        </Text>
        <Text as="p" block variant="mediumPlus">
          Can't see your area listed above?
          <br />
          We may still be able to help. Please do not hesitate to contact us
          with your enquiry.
        </Text>
      </Element>
    )
  }
}

export class ContactInformation extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Element name="contact">
        <Text
          as="h2"
          block
          variant="xxLarge"
          styles={{
            root: {
              fontSize: FontSizes.xxLarge,
              color: DefaultPalette.neutralDark,
            },
          }}
        >
          Contact Information
        </Text>
        <Text
          as="h3"
          block
          variant="mediumPlus"
          styles={{ root: { fontWeight: FontWeights.semibold } }}
        >
          Domestic &#38; Commercial Drain Services
        </Text>
        <Text as="p" block variant="mediumPlus">
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
          <Link
            as="a"
            href="tel:01384357446"
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
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              01384 357446
            </Text>
          </Link>
        </div>
        <div style={{ paddingTop: 4 }}>
          <Link
            as="a"
            href="tel:07974243764"
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
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              07974 243764
            </Text>
          </Link>
        </div>
        <div style={{ paddingTop: 4 }}>
          <Link
            as="a"
            href="mailto:&#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
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
            <Icon
              iconName="mail"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              &#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
            </Text>
          </Link>
        </div>
      </Element>
    )
  }
}

export class OpeningTimes extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <>
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
          Friday 9:00 am - 5:00 pm
          <br />
          Saturday 9:00 am - 5:00 pm
          <br />
          Sunday 9:00 am - 2:00 pm
        </Text>
      </>
    )
  }
}

export class AdditionalContactInformation extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <>
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
          <Link
            as="a"
            href="tel:01384357446"
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
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              01384 357446
            </Text>
          </Link>
        </div>
        <div style={{ paddingTop: 4 }}>
          <Link
            as="a"
            href="tel:07974243764"
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
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              07974 243764
            </Text>
          </Link>
        </div>
        <div style={{ paddingTop: 4 }}>
          <Link
            as="a"
            href="mailto:&#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
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
            <Icon
              iconName="mail"
              styles={{ root: { position: "relative", top: 2 } }}
            />

            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              &#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
            </Text>
          </Link>
        </div>
      </>
    )
  }
}

export class CopyrightInformation extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text>
        &copy; {new Date().getFullYear()} - Domestic &#38; Commercial Drain
        Services
      </Text>
    )
  }
}

export class Credits extends React.Component<{}> {
  public render(): JSX.Element {
    return <Text>Website design by ITadams</Text>
  }
}
