import { Stylesheet, InjectionMode } from "@uifabric/merge-styles"
import { renderStatic } from "@uifabric/merge-styles/lib/server"
import { renderToString } from "react-dom/server"
import React from "react"
import { configureLoadStyles } from "@microsoft/load-themed-styles"
import Loadable from "react-loadable"

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  let library = require("office-ui-fabric-react/lib/Utilities")
  library.setSSR(true)
  library.setRTL(false)

  let responsiveLib = require("office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode")
  responsiveLib.setResponsiveMode(responsiveLib.ResponsiveMode.xxxLarge)

  Loadable.preloadReady().then(() => {
    const { html, css } = renderStatic(() => {
      return renderToString(bodyComponent)
    })

    replaceBodyHTMLString(html)

    setHeadComponents([<style dangerouslySetInnerHTML={{ __html: css }} />])
  })
}
