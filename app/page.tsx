import { QuoteForm } from "./QuoteForm";

const phone = "+91 9512732322";
const cleanPhone = phone.replace(/\s/g, "");
const whatsapp =
  "https://wa.me/919512732322?text=Hello%20Hutasana%20Intelligent%20Kitchen%20Designs%20LLP%2C%20I%20want%20a%20modular%20kitchen%20quotation.";

const layouts = [
  {
    no: "01",
    title: "Straight Kitchen",
    copy: "A clean single-wall system for compact homes, staff housing, rental units, and utility kitchens.",
    meta: "8 ft to 14 ft typical run",
  },
  {
    no: "02",
    title: "L Shape Kitchen",
    copy: "The most practical format for everyday homes, with a strong work triangle and corner storage.",
    meta: "Best for 8x8 ft and above",
  },
  {
    no: "03",
    title: "Parallel Kitchen",
    copy: "Efficient two-side planning for apartments and project kitchens where movement has to stay clear.",
    meta: "Ideal for narrow rooms",
  },
  {
    no: "04",
    title: "U Shape Kitchen",
    copy: "Maximum storage and preparation space for larger homes, villas, and high-use family kitchens.",
    meta: "High-storage premium plan",
  },
  {
    no: "05",
    title: "Island Kitchen",
    copy: "A premium open-plan format for villas, show flats, and homes where the kitchen is a feature space.",
    meta: "3D preview recommended",
  },
  {
    no: "06",
    title: "Commercial Counters",
    copy: "Durable modular counters and service areas for offices, studios, hospitality, and retail fit-outs.",
    meta: "Quoted by project scope",
  },
];

const specifications = [
  ["Core", "BWP plywood, HDHMR, MDF, aluminium profiles, and glass shutter systems."],
  ["Finishes", "Laminate, acrylic, PU, membrane, veneer, fluted, matte, gloss, and wood textures."],
  ["Hardware", "Soft-close hinges, tandem drawers, lift-up shutters, pull-outs, tall units, and corner solutions."],
  ["Counters", "Quartz, granite, nano white, solid surface, and compact surface coordination."],
  ["Appliances", "Hob, chimney, sink, faucet, oven, microwave, dishwasher, and electrical cut-outs."],
  ["Documents", "2D layout, 3D view, quotation, material schedule, dispatch checklist, and installation notes."],
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

const process = [
  "Share plans, photos, or measurements",
  "Survey and technical discussion",
  "Select materials, finishes, and accessories",
  "Approve 3D design and quotation",
  "Factory production and quality check",
  "Delivery, installation, and handover",
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar__inner">
          <span>Engineered modular kitchens for projects and private homes</span>
          <div>
            <a href="#b2b">Business</a>
            <a href="#individual">Homeowners</a>
            <a href={`tel:${cleanPhone}`}>{phone}</a>
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

      <section className="hero" id="top">
        <img className="hero__image" src="/assets/kitchen-hero.png" alt="Premium modular kitchen designed by Hutasana" />
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
          <div className="hero__actions">
            <a href="#b2b">B2B quotation</a>
            <a href="#individual">Individual kitchen</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp now</a>
          </div>
        </div>
        <div className="hero__card reveal reveal--late">
          <span>Typical timeline</span>
          <strong>45-60</strong>
          <small>Days after measurement, specification, and final approval.</small>
        </div>
      </section>

      <section className="metrics" aria-label="Service highlights">
        <div>
          <strong>25 yr</strong>
          <span>Warranty options</span>
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
          <span>Bulk quotation support</span>
        </div>
      </section>

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
          <img src="/assets/kitchen-storage.png" alt="Modular kitchen storage, pantry, drawers, and accessories" />
        </div>
      </section>

      <section className="audience section">
        <article className="audience__panel audience__panel--dark reveal" id="b2b">
          <p className="eyebrow">Direct B2B</p>
          <h2>For builders, dealers, architects, and contractors.</h2>
          <p>
            Send drawings, BOQ, flat count, site photos, or sample-flat
            requirements. We respond with layout-wise costing and technical
            scope that your project team can use.
          </p>
          <ul>
            {b2b.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={`${whatsapp}%20This%20is%20a%20B2B%20project%20enquiry.`} target="_blank" rel="noreferrer">
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
          <a href={`${whatsapp}%20This%20is%20for%20my%20home%20kitchen.`} target="_blank" rel="noreferrer">
            Plan my kitchen
          </a>
        </article>
      </section>

      <section className="catalogue section" id="catalogue">
        <div className="section__head reveal">
          <p className="eyebrow">Catalogue</p>
          <h2>Layout systems for every site condition.</h2>
        </div>
        <div className="filterbar reveal reveal--late" aria-label="Catalogue filters">
          <span>All</span>
          <span>Modular kitchen</span>
          <span>Project kitchens</span>
          <span>Commercial counters</span>
        </div>
        <div className="catalogue__grid">
          {layouts.map((item) => (
            <article className="catalogue__card reveal" key={item.no}>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <strong>{item.meta}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section">
        <div className="showcase__image reveal">
          <img src="/assets/kitchen-storage.png" alt="Kitchen accessories and storage details" />
        </div>
        <div className="showcase__content reveal reveal--late">
          <p className="eyebrow">Appliances and accessories</p>
          <h2>Every drawer, appliance, and counter has a reason.</h2>
          <p>
            Storage, cooking, washing, preparation, electrical points, and
            appliance clearances are planned together so the final kitchen is
            easy to install and comfortable to use every day.
          </p>
        </div>
      </section>

      <section className="technical section" id="technical">
        <div className="section__head reveal">
          <p className="eyebrow">Technical details</p>
          <h2>Technical clarity before quotation approval.</h2>
        </div>
        <div className="technical__list">
          {specifications.map(([title, copy]) => (
            <article className="reveal" key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section__head reveal">
          <p className="eyebrow">Workflow</p>
          <h2>From first enquiry to fitted kitchen.</h2>
        </div>
        <div className="process__steps">
          {process.map((item, index) => (
            <div className="reveal" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="reveal">
          <p className="eyebrow">Start enquiry</p>
          <h2>Send your plan, photos, or quotation requirement.</h2>
          <p>
            Fill this short form and it opens WhatsApp with a prepared message.
            You can attach site photos, drawings, or BOQ files after WhatsApp opens.
          </p>
          <div className="contact__direct">
            <a href={`tel:${cleanPhone}`}>Call {phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a>
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
              Modular kitchen design, quotation, production, and installation
              for B2B projects and individual homes.
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
            <a href={`tel:${cleanPhone}`}>{phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp quotation</a>
          </div>
        </div>
      </footer>

      <a className="floating-cta" href={whatsapp} target="_blank" rel="noreferrer">
        WhatsApp quote
      </a>
    </main>
  );
}
