import type { Preview } from "@storybook/react";
import "../src/style/index.scss";
const preview: Preview = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;
