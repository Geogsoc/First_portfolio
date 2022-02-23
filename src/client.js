import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: "2021-08-31",
  projectId: "za0dxaas",
  dataset: "production",
  useCdn: true,
});
