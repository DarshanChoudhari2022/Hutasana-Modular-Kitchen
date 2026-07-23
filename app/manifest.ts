import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hustashana Intelligent Kitchen Designs LLP",
    short_name: "Hustashana",
    description:
      "Premium modular kitchen catalogue, quotation, and planning for B2B projects and individual homes.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ec",
    theme_color: "#11110f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
