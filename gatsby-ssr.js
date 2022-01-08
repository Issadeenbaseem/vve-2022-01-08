import React from "react"

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([<script src="/js/jquery.min.js" />])
}
