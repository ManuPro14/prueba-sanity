import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { visionTool } from "@sanity/vision";

import { schema } from "./src/sanity/schema/index"
import { projectId, dataset } from "../kodia-news/src/sanity/environment";
import { structure } from "../kodia-news/src/sanity/structure";
import { log } from "console";

console.log("sanity config projectId", projectId);


export default defineConfig({
  name: "default",
  title: "Kodia Test",
  plugins: [structureTool({ structure }), visionTool()],
  projectId: 'kbr17dwu',
  dataset: 'production',
  schema,
});
