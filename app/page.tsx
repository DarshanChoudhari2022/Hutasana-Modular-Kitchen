import { QuoteForm } from "./QuoteForm";

const phone = "+91 9512732322";
const whatsapp =
  "https://wa.me/919512732322?text=Hello%20Hutasana%20Intelligent%20Kitchen%20Designs%20LLP%2C%20I%20want%20a%20modular%20kitchen%20quotation.";

const catalogue = [
  {
    label: "01",
    title: "Straight Kitchen",
    details: "Single-wall runs for apartments, rental projects, staff housing, and compact utility spaces.",
    spec: "8 ft to 14 ft typical run",
    includes: "Base units, wall units, sink module, hob module, drawers, loft optional",
  },
  {
    label: "02",
    title: "L Shape Kitchen",
    details: "Balanced working triangle with corner storage, appliance tower, pantry, and breakfast counter options.",
    spec: "Best for 8x8 ft and above",
    includes: "Corner solution, tall unit, chimney panel, tandem drawers, overhead shutters",
  },
  {
    label: "03",
    title: "U Shape Kitchen",
    details: "Maximum storage for family homes with dedicated preparation, cooking, washing, and pantry zones.",
    spec: "High-storage premium plan",
    includes: "Three-side cabinetry, lofts, pantry, baskets, cutlery trays, appliance integration",
  },
  {
    label: "04",
    title: "Island Kitchen",
    details: "Statement kitchens for villas, show flats, and open-plan homes with seating and display storage.",
    spec: "3D preview required",
    includes: "Island counter, under-counter storage, profile shutters, lighting, premium hardware",
  },
];

const b2bDeliverables = [
  "Project-wise BOQ study and layout-wise costing",
  "Material, shutter, hardware, and accessory schedule",
  "Shop drawings, batch planning, dispatch sequence, and installation scope",
  "Packages for economy, standard, premium, and sample-flat kitchens",
  "Dealer and architect coordination for repeat orders",
  "Site measurement format and handover checklist",
];

const individualDeliverables = [
  "Online consultation or home visit",
  "Space planning from photos, measurements, and appliance list",
  "Finish palette, storage plan, countertop and backsplash guidance",
  "3D view before production and a clear quotation",
  "Installation planning with plumbing, electrical, and civil notes",
  "After-sales support for hardware and alignment issues",
];

const specs = [
  {
    group: "Core Materials",
    items: "BWP plywood, HDHMR, MDF, aluminium profiles, glass shutters, and carcass options as per budget.",
  },
  {
    group: "Finishes",
    items: "Laminate, acrylic, PU, membrane, veneer, fluted, matte, gloss, wood, marble, and solid colour palettes.",
  },
  {
    group: "Hardware",
    items: "Soft-close hinges, tandem drawers, lift-up shutters, magic corners, tall pantry, wicker baskets, pull-outs.",
  },
  {
    group: "Counters",
    items: "Quartz, granite, nano white, solid surface, compact surface, and fabrication coordination.",
  },
  {
    group: "Appliances",
    items: "Hob, chimney, sink, faucet, built-in oven, microwave, dishwasher, refrigerator, and electrical cut-outs.",
  },
  {
    group: "Documents",
    items: "Measurements, 2D layout, 3D render, quotation, production brief, dispatch checklist, installation notes.",
  },
];

const packages = [
  {
    name: "Essential",
    use: "Budget homes, rental units, bulk apartment kitchens",
    detail: "Laminate shutters, practical hardware, standard baskets, clear utility-focused storage.",
  },
  {
    name: "Signature",
    use: "Family homes, premium flats, builder show units",
    detail: "Better shutter finishes, tandem drawers, tall unit options, richer colour and texture palette.",
  },
  {
    name: "Intelligent",
    use: "Villas, premium B2B samples, designer-led projects",
    detail: "Profile shutters, integrated lighting, premium accessories, appliance wall, island or display features.",
  },
];

const process = [
  "Share plan, photos, BOQ, or rough measurements",
  "Consultation and site measurement",
  "Layout, material, hardware, and finish selection",
  "3D design, technical schedule, and quotation",
  "Factory production and quality check",
  "Delivery, installation, handover, and support",
];

const faqs = [
  {
    question: "Can I ask only for quotation?",
    answer: "Yes. B2B clients can share BOQ, drawings, or flat count, and individuals can share photos and rough size for an initial estimate.",
  },
  {
    question: "Do you handle both bulk and single kitchens?",
    answer: "Yes. The site separates direct B2B requirements and individual homeowners so the quotation process stays clear.",
  },
  {
    question: "What should I send for faster pricing?",
    answer: "Send kitchen size, layout type, city, photos, desired material, appliance list, countertop preference, and expected timeline.",
  },
  {
    question: "Is the final price fixed from the first call?",
    answer: "Final pricing depends on site measurements, selected materials, hardware, accessories, countertop, appliance scope, and installation conditions.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar__inner">
          <a href="#visit">Book showroom visit</a>
          <a href="#visit">Book home visit</a>
          <a href="#b2b">Business enquiry</a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="topbar__call">
            {phone}
          </a>
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
          <a href="#b2b">B2B</a>
          <a href="#individual">Individual</a>
          <a href="#technical">Technical</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src="/assets/reference-gallery.png" alt="" />
        </div>
        <div className="hero__panel">
          <p>Complete modular kitchen catalogue</p>
          <h1>Intelligent kitchen designs for B2B projects and homes.</h1>
          <span>
            Hutasana Intelligent Kitchen Designs LLP plans, specifies, quotes,
            produces, and installs modular kitchens with clear materials,
            accessories, timelines, and scope.
          </span>
          <div className="hero__actions">
            <a href="#b2b">B2B quotation</a>
            <a href="#individual">Individual kitchen</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Business highlights">
        <div>
          <strong>25 years</strong>
          <span>Warranty options on selected material systems</span>
        </div>
        <div>
          <strong>45-60 days</strong>
          <span>Typical delivery window after final approval</span>
        </div>
        <div>
          <strong>4+ layouts</strong>
          <span>Straight, L, U, island, parallel, utility</span>
        </div>
        <div>
          <strong>B2B + retail</strong>
          <span>Bulk projects and individual home kitchens</span>
        </div>
      </section>

      <section className="intro section">
        <div className="intro__image">
          <img src="/assets/reference-about.png" alt="Modern modular kitchen reference" />
        </div>
        <div className="intro__copy">
          <p className="eyebrow">About Hutasana</p>
          <h2>Catalogue clarity with real technical detailing.</h2>
          <p>
            Many kitchen websites look beautiful but leave the buyer confused.
            This one is built for action: select your client type, understand
            layouts and material options, check what information is needed, and
            send a ready quotation request directly on WhatsApp.
          </p>
          <div className="intro__grid">
            <span>Residential kitchens</span>
            <span>Builder bulk kitchens</span>
            <span>Dealer supply support</span>
            <span>Commercial counters</span>
          </div>
        </div>
      </section>

      <section className="split section">
        <article className="segment" id="b2b">
          <p className="eyebrow">Direct B2B section</p>
          <h2>For builders, contractors, dealers, architects, and commercial buyers.</h2>
          <p>
            Share drawings, BOQ, flat count, site photos, or sample-flat
            requirements. We prepare layout-wise pricing, material options,
            delivery planning, and installation scope for quotation.
          </p>
          <ul>
            {b2bDeliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={`${whatsapp}%20This%20is%20a%20B2B%20project%20enquiry.`} target="_blank" rel="noreferrer">
            Request B2B quotation
          </a>
        </article>

        <article className="segment segment--light" id="individual">
          <p className="eyebrow">Individual section</p>
          <h2>For homeowners planning one beautiful, practical kitchen.</h2>
          <p>
            Share room photos, rough dimensions, preferred colours, appliance
            list, and budget. We turn it into a storage-led modular plan with
            finish choices, 3D preview, and quotation.
          </p>
          <ul>
            {individualDeliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={`${whatsapp}%20This%20is%20for%20my%20home%20kitchen.`} target="_blank" rel="noreferrer">
            Plan my kitchen
          </a>
        </article>
      </section>

      <section className="catalogue section" id="catalogue">
        <div className="section__head">
          <p className="eyebrow">Catalogue</p>
          <h2>Choose a layout, then build the finish package around it.</h2>
        </div>
        <div className="catalogue__grid">
          {catalogue.map((item) => (
            <article className="catalogue__card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
              <small>{item.includes}</small>
              <strong>{item.spec}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="packages section" id="packages">
        <div className="section__head">
          <p className="eyebrow">Finish packages</p>
          <h2>Three quotation levels so budget decisions are simple.</h2>
        </div>
        <div className="packages__grid">
          {packages.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.use}</p>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section">
        <div className="gallery__large">
          <img src="/assets/reference-hero.png" alt="Premium modular kitchen display" />
          <div>
            <p>Modular kitchen</p>
            <h2>Clean shutters, warm task lighting, precise storage.</h2>
          </div>
        </div>
        <div className="gallery__stack">
          <img src="/assets/reference-specs.png" alt="Kitchen feature and warranty catalogue" />
          <img src="/assets/reference-testimonials.png" alt="Kitchen customer review section reference" />
        </div>
      </section>

      <section className="technical section" id="technical">
        <div>
          <p className="eyebrow">Technical details</p>
          <h2>Specification-first quotations with material and hardware clarity.</h2>
          <p>
            Every serious kitchen quote needs technical definition. These are
            the decisions we document before production starts.
          </p>
        </div>
        <div className="technical__list">
          {specs.map((item) => (
            <article key={item.group}>
              <h3>{item.group}</h3>
              <p>{item.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="visit">
        <div className="section__head">
          <p className="eyebrow">How it works</p>
          <h2>From first photo to fitted kitchen.</h2>
        </div>
        <div className="process__steps">
          {process.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="checklist section">
        <div>
          <p className="eyebrow">Before you ask for quote</p>
          <h2>Send these details for faster costing.</h2>
        </div>
        <div className="checklist__grid">
          <p>Kitchen length, width, and height</p>
          <p>Existing site photos or new construction drawings</p>
          <p>Preferred layout: straight, L, U, island, parallel</p>
          <p>Material preference and finish reference</p>
          <p>Appliance list: hob, chimney, oven, sink, dishwasher</p>
          <p>Countertop and backsplash preference</p>
          <p>City, site stage, and installation timeline</p>
          <p>B2B quantity or individual home requirement</p>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section__head">
          <p className="eyebrow">Questions</p>
          <h2>Quick answers before you enquire.</h2>
        </div>
        <div className="faq__grid">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div>
          <p className="eyebrow">Start enquiry</p>
          <h2>Send your plan, photos, or quotation requirement.</h2>
          <p>
            Fill the form and it opens WhatsApp with a ready message. You can
            attach plans, BOQ files, or site photos after WhatsApp opens.
          </p>
          <div className="contact__direct">
            <a href={`tel:${phone.replace(/\s/g, "")}`}>Call {phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          </div>
        </div>
        <QuoteForm />
      </section>

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
              Modular kitchen planning, quotation, production, and installation
              for B2B projects and individual homes.
            </p>
          </div>
          <div>
            <h3>Website</h3>
            <a href="#catalogue">Catalogue</a>
            <a href="#packages">Packages</a>
            <a href="#technical">Technical details</a>
            <a href="#faq">Questions</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp quotation
            </a>
          </div>
        </div>
      </footer>

      <a className="floating-cta" href={whatsapp} target="_blank" rel="noreferrer">
        WhatsApp quote
      </a>
    </main>
  );
}
