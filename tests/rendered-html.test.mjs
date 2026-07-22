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
    "Proven on projects and private homes",
    "HomeAndConstructionBusiness",
  ]) {
    assert.match(page, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /Straight Kitchen/);
  assert.match(page, /Island Kitchen/);
  assert.match(page, /Request B2B quote/);
  assert.match(page, /Plan my kitchen/);
  for (const component of [
    "HeroSection",
    "AudienceSplit",
    "CatalogueGrid",
    "FinishPalette",
    "TechnicalDetails",
    "WorkflowTimeline",
    "ContactSection",
    "Footer",
  ]) {
    assert.match(page, new RegExp(`function ${component}\\(`));
  }
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
  assert.match(layout, /hutasana-modular-kitchen\.vercel\.app/);
  assert.match(layout, /og-logo\.png/);
  assert.match(layout, /width:\s*1200/);
  assert.match(layout, /height:\s*630/);
  assert.doesNotMatch(layout, /hutasana-kitchen-designs\.vercel\.app/);
  assert.match(sitemap, /MetadataRoute\.Sitemap/);
  assert.match(robots, /MetadataRoute\.Robots/);
  assert.match(sitemap, /hutasana-modular-kitchen\.vercel\.app/);
  assert.match(robots, /hutasana-modular-kitchen\.vercel\.app/);
  assert.match(manifest, /Hutasana Intelligent Kitchen Designs LLP/);
});

test("quote form opens WhatsApp with client enquiry fields", async () => {
  const [quoteForm, contact] = await Promise.all([
    readProjectFile("app/QuoteForm.tsx"),
    readProjectFile("app/contact.ts"),
  ]);

  assert.match(contact, /\+91 83909 98088/);
  assert.match(contact, /tel:\+918390998088/);
  assert.match(contact, /918390998088/);
  assert.doesNotMatch(contact, /9512732322|919512732322/);
  assert.match(contact, /B2B project enquiry/);
  assert.match(contact, /home kitchen/);
  assert.match(contact, /sharing my details/);
  assert.match(quoteForm, /whatsappHref\(message\)/);
  assert.match(quoteForm, /B2B quotation/);
  assert.match(quoteForm, /Individual kitchen/);
  assert.match(quoteForm, /Kitchen or project size/);
  assert.match(quoteForm, /Your details stay on your device/);
});

test("catalogue filters and layout cards are clickable links", async () => {
  const page = await readProjectFile("app/page.tsx");

  assert.match(page, /<a href="#catalogue">All<\/a>/);
  assert.match(page, /<a href="#straight-kitchen">Modular kitchen<\/a>/);
  assert.match(page, /<a href="#parallel-kitchen">Project kitchens<\/a>/);
  assert.match(page, /<a href="#commercial-counters">Commercial counters<\/a>/);
  assert.match(page, /Commercial counters/);
  assert.match(page, /className="catalogue__card reveal"/);
  assert.match(page, /id=\{item\.slug\}/);
  assert.match(page, /aria-label=\{`Enquire on WhatsApp about \$\{item\.title\}`\}/);
  assert.match(page, /whatsappHref\(`\$\{whatsappMessages\.default\} \$\{item\.intent\}`\)/);
  assert.match(page, /projectChannels\.map/);
  assert.match(page, /Project enquiry channels/);
  assert.doesNotMatch(page, /Client logo placeholders/);
});
