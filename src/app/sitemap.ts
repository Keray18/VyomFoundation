import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vyomfoundation.org";
  const lastModified = new Date("2026-03-01T00:00:00.000Z");

  const routes = [
    "",
    "/about",
    "/our-work",
    "/our-work/project-samarth",
    "/get-involved",
    "/get-involved/volunteer",
    "/get-involved/internships",
    "/get-involved/partner",
    "/get-involved/support",
    "/stories",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/our-work/project-samarth" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/our-work") || route.startsWith("/get-involved") ? 0.9 : 0.8,
  }));
}
