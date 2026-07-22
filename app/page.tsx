import Image from "next/image";
import { QuoteForm } from "./QuoteForm";
import {
  phoneDisplay,
  phoneHref,
  whatsappHref,
  whatsappMessages,
} from "./contact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hutasana-kitchen-designs.vercel.app";

type LayoutCard = {
  no: string;
  title: string;
  copy: string;
  meta: string;
  image: string;
  intent: string;
};

type TextCard = {
  title: string;
  copy: string;
};

const heroImage = "/assets/kitchen-hero.png";
const detailImage = "/assets/kitchen-storage.png";

const layouts: LayoutCard[] = [
  {
    no: "01",
    title: "Straight Kitchen",
    copy: "A clean single-wall system for compact homes, staff housing, rental units, and utility kitchens.",
    meta: "8 ft to 14 ft typical run",
    image: heroImage,
    intent: "I am interested in a Straight Kitchen layout.",
  },
  {
    no: "02",
    title: "L Shape Kitchen",
    copy: "The most practical format for everyday homes, with a strong work triangle and corner storage.",
    meta: "Best for 8x8 ft and above",
    image: detailImage,
    intent: "I am interested in an L Shape Kitchen layout.",
  },
  {
    no: "03",
    title: "Parallel Kitchen",
    copy: "Efficient two-side planning for apartments and project kitchens where movement has to stay clear.",
    meta: "Ideal for narrow rooms",
    image: heroImage,
    intent: "I am interested in a Parallel Kitchen layout.",
  },
  {
    no: "04",
    title: "U Shape Kitchen",
    copy: "Maximum storage and preparation space for larger homes, villas, and high-use family kitchens.",
    meta: "High-storage premium plan",
    image: detailImage,
    intent: "I am interested in a U Shape Kitchen layout.",
  },
  {
    no: "05",
    title: "Island Kitchen",
    copy: "A premium open-plan format for villas, show flats, and homes where the kitchen is a feature space.",
    meta: "3D preview recommended",
    image: heroImage,
    intent: "I am interested in an Island Kitchen layout.",
  },
  {
    no: "06",
    title: "Commercial Counters",
    copy: "Durable modular counters and service areas for offices, studios, hospitality, and retail fit-outs.",
    meta: "Quoted by project scope",
    image: detailImage,
    intent: "I am interested in Commercial Counters.",
  },
];

const specifications: TextCard[] = [
  {
    title: "Core",
    copy: "BWP plywood, HDHMR, MDF, aluminium profiles, and glass shutter systems.",
  },
  {
    title: "Finishes",
    copy: "Laminate, acrylic, PU, membrane, veneer, fluted, matte, gloss, and wood textures.",
  },
  {
    title: "Hardware",
    copy: "Soft-close hinges, tandem drawers, lift-up shutters, pull-outs, tall units, and corner solutions.",
  },
  {
    title: "Counters",
    copy: "Quartz, granite, nano white, solid surface, and compact surface coordination.",
  },
  {
    title: "Appliances",
    copy: "Hob, chimney, sink, faucet, oven, microwave, dishwasher, and electrical cut-outs.",
  },
  {
    title: "Documents",
    copy: "2D layout, 3D view, quotation, material schedule, dispatch checklist, and installation notes.",
  },
];

const b2b = [
  "BOQ and drawing review",
  "Layout-wise project quotation",
  "Material and hardware schedule",
  "Batch production planning",
  "Site measurement checklist",
  "Installation scope clarity",
];

const individual = [
  "Home visit or online consultation",
  "Storage-led layout planning",
  "Finish and colour selection",
  "3D preview before production",
  "Appliance and countertop guidance",
  "Installation and after-sales support",
];

const workflow = [
  "Share plans, photos, or measurements",
  "Survey and technical discussion",
  "Select materials, finishes, and accessories",
  "Approve 3D design and quotation",
  "Factory production and quality check",
  "Delivery, installation, and handover",
];

const studio: TextCard[] = [
  {
    title: "Space intelligence",
    copy: "Work zones, appliance clearances, storage access, and circulation are planned before finishes are selected.",
  },
  {
    title: "Specification control",
    copy: "Materials, shutters, counters, hardware, accessories, and installation scope are documented for clean approvals.",
  },
  {
    title: "Project-ready output",
    copy: "B2B teams receive practical quotation inputs, drawing notes, production scope, and handover clarity.",
  },
];

const finishes: TextCard[] = [
  {
    title: "Matte charcoal",
    copy: "Anti-fingerprint shutters for premium modern kitchens",
  },
  {
    title: "Warm walnut",
    copy: "Open shelves, niches, and breakfast counter warmth",
  },
  {
    title: "Quartz white",
    copy: "Durable counters with clean contemporary contrast",
  },
  {
    title: "Profile glass",
    copy: "Display storage, crockery zones, and show-flat moments",
  },
];

const proofSnippets = [
  "Premium kitchen rollout for 100+ flats in a Pune project, delivered with batch production and site-ready checklists.",
  "Villa kitchen with island format and 3D preview for homeowners.",
  "Commercial pantry and service counter package coordinated with appliance and countertop requirements.",
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Hutasana Intelligent Kitchen Designs LLP",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  telephone: phoneDisplay,
  description:
    "Premium modular kitchen design, B2B project quotations, technical specifications, production coordination, and installation support.",
  areaServed: "India",
  priceRange: "Quoted by scope",
  makesOffer: [
    {
      "@type": "Offer",
      name: "B2B modular kitchen project quotation",
    },
    {
      "@type": "Offer",
      name: "Individual modular kitchen design and planning",
    },
  ],
};

function Header() {
  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <span>Engineered modular kitchens for projects and private homes</span>
          <div>
            <a href="#b2b">Business</a>
            <a href="#individual">Homeowners</a>
            <a href={phoneHref}>{phoneDisplay}</a>
          </div>
        </div>
      </header>

      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Hutasana home">
          <span className="brand__mark">H</span>
          <span>
            <strong>Hutasana</strong>
            <small>Intelligent Kitchen Designs LLP</small>
          </span>
        </a>
        <div className="nav__links">
          <a href="#catalogue">Catalogue</a>
          <a href="#technical">Technical</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="top">
      <Image
        className="hero__image"
        src={heroImage}
        alt="Premium modular kitchen designed by Hutasana"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero__content reveal">
        <p className="eyebrow">Intelligent modular kitchen studio</p>
        <h1>Precision kitchens for homes and projects.</h1>
        <p>
          Hutasana brings design, specification, quotation, production, and
          installation into one refined workflow for homeowners and B2B teams.
        </p>
        <div className="hero__chips" aria-label="Core services">
          <span>Design</span>
          <span>Quotation</span>
          <span>Production</span>
          <span>Installation</span>
        </div>
        <div className="hero__actions" aria-label="Primary enquiry actions">
          <a
            href={whatsappHref(whatsappMessages.b2b)}
            target="_blank"
            rel="noreferrer"
            aria-label="Request B2B quotation on WhatsApp"
          >
            Request B2B quote
          </a>
          <a
            href={whatsappHref(whatsappMessages.individual)}
            target="_blank"
            rel="noreferrer"
            aria-label="Plan my home kitchen on WhatsApp"
          >
            Plan my home kitchen
          </a>
        </div>
        <p className="hero__microcopy">Typical response within 24 hours.</p>
      </div>
      <div className="hero__card reveal reveal--late">
        <span>Typical timeline</span>
        <strong>45-60</strong>
        <small>Days after measurement, specification, and final approval.</small>
      </div>
    </section>
  );
}

function MetricsBar() {
  return (
    <section className="metrics" aria-label="Service highlights">
      <div>
        <strong>25+</strong>
        <span>Year warranty options</span>
      </div>
      <div>
        <strong>6+</strong>
        <span>Kitchen formats</span>
      </div>
      <div>
        <strong>3D</strong>
        <span>Design previews</span>
      </div>
      <div>
        <strong>B2B</strong>
        <span>Bulk project quotation support</span>
      </div>
    </section>
  );
}

function StudioMethod() {
  return (
    <section className="studio section" aria-label="Design studio strengths">
      <div className="section__head reveal">
        <p className="eyebrow">Studio method</p>
        <h2>A kitchen is designed twice: first for use, then for beauty.</h2>
      </div>
      <div className="studio__grid">
        {studio.map((item, index) => (
          <article className="reveal" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="intro section">
      <div className="intro__copy reveal">
        <p className="eyebrow">About the company</p>
        <h2>Designed like an interior. Specified like a product.</h2>
        <p>
          A professional kitchen needs more than a beautiful render. It needs
          measured drawings, material clarity, accessory planning, appliance
          coordination, site readiness, and installation responsibility.
        </p>
      </div>
      <div className="intro__visual reveal reveal--late">
        <Image
          src={detailImage}
          alt="Modular kitchen storage, pantry, drawers, and accessories"
          fill
          sizes="(max-width: 980px) 100vw, 58vw"
        />
      </div>
    </section>
  );
}

function AudienceSplit() {
  return (
    <section className="audience section">
      <article className="audience__panel audience__panel--dark reveal" id="b2b">
        <p className="eyebrow">Direct B2B</p>
        <h2>For builders, dealers, architects, and contractors.</h2>
        <p>
          Send drawings, BOQ, flat count, site photos, or sample-flat
          requirements. We respond with layout-wise costing and technical scope
          that your project team can use.
        </p>
        <ul>
          {b2b.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          href={whatsappHref(whatsappMessages.b2b)}
          target="_blank"
          rel="noreferrer"
        >
          Request B2B quote
        </a>
      </article>

      <article className="audience__panel reveal reveal--late" id="individual">
        <p className="eyebrow">Individual clients</p>
        <h2>For homeowners who want practical premium design.</h2>
        <p>
          Share photos, rough room size, appliance list, preferred finish, and
          budget. We convert it into a storage-led modular plan with a clean
          quotation.
        </p>
        <ul>
          {individual.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          href={whatsappHref(whatsappMessages.individual)}
          target="_blank"
          rel="noreferrer"
        >
          Plan my kitchen
        </a>
      </article>
    </section>
  );
}

function CatalogueGrid() {
  return (
    <section className="catalogue section" id="catalogue">
      <div className="section__head reveal">
        <p className="eyebrow">Catalogue</p>
        <h2>Layout systems for every site condition.</h2>
      </div>
      <div className="filterbar reveal reveal--late" aria-label="Catalogue categories">
        <a href="#catalogue">All</a>
        <a href="#individual">Modular kitchen</a>
        <a href="#b2b">Project kitchens</a>
        <a
          href={whatsappHref(
            `${whatsappMessages.default} I want to discuss commercial counters.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Commercial counters
        </a>
      </div>
      <div className="catalogue__grid">
        {layouts.map((item) => (
          <a
            className="catalogue__card reveal"
            href={whatsappHref(`${whatsappMessages.default} ${item.intent}`)}
            key={item.no}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire on WhatsApp about ${item.title}`}
          >
            <div className="catalogue__media">
              <Image
                src={item.image}
                alt={`${item.title} modular kitchen layout reference`}
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
              />
            </div>
            <span>{item.no}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <strong>{item.meta}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="showcase section">
      <div className="showcase__image reveal">
        <Image
          src={detailImage}
          alt="Kitchen accessories and storage details"
          fill
          sizes="(max-width: 980px) 100vw, 48vw"
        />
      </div>
      <div className="showcase__content reveal reveal--late">
        <p className="eyebrow">Appliances and accessories</p>
        <h2>Every drawer, appliance, and counter has a reason.</h2>
        <p>
          Storage, cooking, washing, preparation, electrical points, and
          appliance clearances are planned together so the final kitchen is easy
          to install and comfortable to use every day.
        </p>
      </div>
    </section>
  );
}

function FinishPalette() {
  return (
    <section className="materials section" aria-label="Material and finish palette">
      <div className="materials__copy reveal">
        <p className="eyebrow">Finish direction</p>
        <h2>Premium palettes without vague selections.</h2>
        <p>
          Every quotation can be built around a defined finish direction, so
          cost, maintenance, and visual impact are clear before production.
        </p>
      </div>
      <div className="materials__board reveal reveal--late">
        {finishes.map((finish) => (
          <article key={finish.title}>
            <span aria-hidden="true" />
            <div>
              <h3>{finish.title}</h3>
              <p>{finish.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnicalDetails() {
  return (
    <section className="technical section" id="technical">
      <div className="section__head reveal">
        <p className="eyebrow">Technical details</p>
        <h2>Technical clarity before quotation approval.</h2>
      </div>
      <div className="technical__list" role="list">
        {specifications.map((item) => (
          <article className="reveal" key={item.title} role="listitem">
            <span>{item.title}</span>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkflowTimeline() {
  return (
    <section className="process section" id="process">
      <div className="section__head reveal">
        <p className="eyebrow">Workflow</p>
        <h2>From first enquiry to fitted kitchen.</h2>
      </div>
      <div className="process__steps" aria-label="Project workflow timeline">
        {workflow.map((item, index) => (
          <div className="reveal" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="proof section" aria-label="Project credibility">
      <div className="section__head reveal">
        <p className="eyebrow">Credibility</p>
        <h2>Proven on projects and private homes.</h2>
      </div>
      <div className="proof__grid">
        <div className="proof__logos reveal" aria-label="Client logo placeholders">
          {["Builders", "Architects", "Dealers", "Contractors"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="proof__snippets">
          {proofSnippets.map((snippet, index) => (
            <article className="reveal" key={snippet}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{snippet}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="reveal">
        <p className="eyebrow">Start enquiry</p>
        <h2>Send your plan, photos, or quotation requirement.</h2>
        <p>
          Fill this short form and it opens WhatsApp with a prepared message.
          You can attach site photos, drawings, or BOQ files after WhatsApp
          opens.
        </p>
        <div className="contact__direct">
          <a href={phoneHref}>Call {phoneDisplay}</a>
          <a
            href={whatsappHref(whatsappMessages.default)}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp
          </a>
        </div>
      </div>
      <QuoteForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <a className="brand brand--footer" href="#top" aria-label="Hutasana home">
            <span className="brand__mark">H</span>
            <span>
              <strong>Hutasana</strong>
              <small>Intelligent Kitchen Designs LLP</small>
            </span>
          </a>
          <p>
            Modular kitchen design, quotation, production, and installation for
            B2B projects and individual homes.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#catalogue">Catalogue</a>
          <a href="#technical">Technical details</a>
          <a href="#process">Workflow</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={phoneHref}>{phoneDisplay}</a>
          <a
            href={whatsappHref(whatsappMessages.default)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp quotation
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileActionBar() {
  return (
    <nav className="mobile-actions" aria-label="Mobile quick enquiry actions">
      <a href={phoneHref}>Call</a>
      <a
        href={whatsappHref(whatsappMessages.default)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp quote
      </a>
      <a
        href={whatsappHref(whatsappMessages.individual)}
        target="_blank"
        rel="noreferrer"
      >
        Plan my kitchen
      </a>
    </nav>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />
      <HeroSection />
      <MetricsBar />
      <StudioMethod />
      <AboutSection />
      <AudienceSplit />
      <CatalogueGrid />
      <ShowcaseSection />
      <FinishPalette />
      <TechnicalDetails />
      <WorkflowTimeline />
      <ProofSection />
      <ContactSection />
      <Footer />
      <a
        className="floating-cta"
        href={whatsappHref(whatsappMessages.default)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp quote
      </a>
      <MobileActionBar />
    </main>
  );
}
