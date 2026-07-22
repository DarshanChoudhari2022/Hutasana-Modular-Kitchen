import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, root), "utf8");
}

test("site source contains the complete handover sections", async () => {
  const page = await readProjectFile("app/page.tsx");

  for (const text of [
    "Hutasana Intelligent Kitchen Designs LLP",
    "Direct B2B",
    "Individual clients",
    "Catalogue",
    "Technical details",
    "Workflow",
    "Start enquiry",
    "HomeAndConstructionBusiness",
  ]) {
    assert.match(page, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /Straight Kitchen/);
  assert.match(page, /Island Kitchen/);
  assert.match(page, /Request B2B quote/);
  assert.match(page, /Plan my kitchen/);
});

test("metadata, sitemap, robots, and manifest are production ready", async () => {
  const [layout, sitemap, robots, manifest] = await Promise.all([
    readProjectFile("app/layout.tsx"),
    readProjectFile("app/sitemap.ts"),
    readProjectFile("app/robots.ts"),
    readProjectFile("app/manifest.ts"),
  ]);

  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /twitter/);
  assert.match(layout, /robots/);
  assert.match(sitemap, /MetadataRoute\.Sitemap/);
  assert.match(robots, /MetadataRoute\.Robots/);
  assert.match(manifest, /Hutasana Intelligent Kitchen Designs LLP/);
});

test("quote form opens WhatsApp with client enquiry fields", async () => {
  const quoteForm = await readProjectFile("app/QuoteForm.tsx");

  assert.match(quoteForm, /919512732322/);
  assert.match(quoteForm, /encodeURIComponent\(message\)/);
  assert.match(quoteForm, /B2B quotation/);
  assert.match(quoteForm, /Individual kitchen/);
  assert.match(quoteForm, /Kitchen or project size/);
  assert.match(quoteForm, /Your details stay on your device/);
});
