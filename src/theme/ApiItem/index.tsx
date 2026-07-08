import React from "react";
import ApiItem from "@theme-original/ApiItem";
import type ApiItemType from "@theme-original/ApiItem";
import type { WrapperProps } from "@docusaurus/types";
import PageActions from "@site/src/components/PageActions";

type Props = WrapperProps<typeof ApiItemType>;

// docusaurus.config.ts sets `docItemComponent: "@theme/ApiItem"`, so every doc
// page — generated API references AND hand-written guides — renders through this
// component. Wrapping it lets us mount the shared PageActions bar (permission
// badge + Copy/Open-in-AI menu) above the article without swizzling each page.
export default function ApiItemWrapper(props: Props): React.ReactElement {
  return (
    <>
      <PageActions />
      <ApiItem {...props} />
    </>
  );
}
