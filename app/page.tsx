const catalogue = [
  {
    label: "01",
    title: "Straight Kitchen",
    details: "Best for apartments, rental homes, staff housing, and compact utility runs.",
    spec: "8 ft to 14 ft run",
  },
  {
    label: "02",
    title: "L Shape Kitchen",
    details: "Efficient working triangle with corner storage, tall unit, and appliance wall.",
    spec: "60 to 90 day delivery",
  },
  {
    label: "03",
    title: "U Shape Kitchen",
    details: "High-storage family kitchens with shutter, drawer, pantry, and loft options.",
    spec: "BWP and HDHMR options",
  },
  {
    label: "04",
    title: "Island Kitchen",
    details: "Premium villas, show flats, and open-plan homes with breakfast counters.",
    spec: "3D preview included",
  },
];

const specs = [
  "BWP plywood, HDHMR, MDF, aluminium profile, and glass shutter options",
  "Laminate, acrylic, PU, membrane, veneer, matte, gloss, and fluted finishes",
  "Soft-close hinges, tandem drawers, tall units, magic corners, wicker baskets",
  "Quartz, granite, nano white, solid surface, and compact countertop choices",
  "Hob, chimney, sink, faucet, built-in oven, microwave, and accessory planning",
  "Measurement, 2D layout, 3D render, quotation, production, dispatch, fitting",
];

const process = [
  "Share plan and photos",
  "Site survey and measurements",
  "Material and finish selection",
  "3D design and quotation",
  "Factory production",
  "Delivery and installation",
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar__inner">
          <a href="#visit">Book showroom visit</a>
          <a href="#visit">Book home visit</a>
          <a href="#b2b">Business enquiry</a>
          <a href="#contact" className="topbar__call">Request a call back</a>
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
          <p>Modular kitchen catalogue</p>
          <h1>Hutasana Intelligent Kitchen Designs LLP</h1>
          <span>
            Factory-finished modular kitchens for builders, contractors, dealers,
            architects, and homeowners.
          </span>
          <div className="hero__actions">
            <a href="#b2b">B2B quotation</a>
            <a href="#individual">Individual kitchen</a>
          </div>
        </div>
      </section>

      <section className="proof">
        <div>
          <strong>25 years</strong>
          <span>Material warranty options</span>
        </div>
        <div>
          <strong>45-60 days</strong>
          <span>Typical delivery window</span>
        </div>
        <div>
          <strong>4+ layouts</strong>
          <span>Straight, L, U, island</span>
        </div>
        <div>
          <strong>3D previews</strong>
          <span>Design before production</span>
        </div>
      </section>

      <section className="intro section">
        <div className="intro__image">
          <img src="/assets/reference-about.png" alt="Modern modular kitchen reference" />
        </div>
        <div className="intro__copy">
          <p className="eyebrow">About Hutasana</p>
          <h2>Kitchen systems planned for real Indian homes and repeat business.</h2>
          <p>
            We combine catalogue clarity with technical detailing: layouts,
            finishes, accessories, hardware, appliances, measurements, and
            installation scope are explained before the quotation is locked.
          </p>
          <div className="intro__grid">
            <span>Residential projects</span>
            <span>Builder bulk kitchens</span>
            <span>Dealer supply</span>
            <span>Commercial counters</span>
          </div>
        </div>
      </section>

      <section className="split section">
        <article className="segment" id="b2b">
          <p className="eyebrow">Direct B2B section</p>
          <h2>Bulk kitchens for builders, dealers, architects, and contractors.</h2>
          <p>
            Send drawings, BOQ, site photos, or sample flat requirements. We
            prepare layout-wise pricing, material options, timelines, and fitting
            scope for quotation.
          </p>
          <ul>
            <li>Project-wise rate cards and scalable finish packages</li>
            <li>Shop drawings, hardware schedule, and accessory schedule</li>
            <li>Commercial kitchens, show flats, apartments, and villas</li>
            <li>Batch production planning with site handover coordination</li>
          </ul>
          <a href="#contact">Request B2B quotation</a>
        </article>

        <article className="segment segment--light" id="individual">
          <p className="eyebrow">Individual section</p>
          <h2>Custom kitchen for your home, designed from your photos and room size.</h2>
          <p>
            Share kitchen photos, rough dimensions, preferred colours, appliance
            list, and budget. We translate it into a practical modular plan with
            finish choices and a clear quote.
          </p>
          <ul>
            <li>Home visit or online consultation</li>
            <li>3D view, colour palette, and storage planning</li>
            <li>Appliance, sink, countertop, and lighting coordination</li>
            <li>Installation guidance and after-sales support</li>
          </ul>
          <a href="#contact">Plan my kitchen</a>
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
              <strong>{item.spec}</strong>
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
          <h2>Specification-first quotations with material, hardware, and accessory clarity.</h2>
        </div>
        <div className="technical__list">
          {specs.map((item) => (
            <p key={item}>{item}</p>
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

      <section className="contact section" id="contact">
        <div>
          <p className="eyebrow">Start enquiry</p>
          <h2>Send your plan, photos, or quotation requirement.</h2>
          <p>
            For faster costing, include room size, layout type, material choice,
            appliance list, city, and whether it is B2B or individual work.
          </p>
        </div>
        <form className="contact__form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Enquiry type
            <select name="type" defaultValue="B2B quotation">
              <option>B2B quotation</option>
              <option>Individual kitchen</option>
              <option>Commercial kitchen</option>
              <option>Home visit</option>
            </select>
          </label>
          <label>
            Phone or email
            <input type="text" name="contact" placeholder="How should we contact you?" />
          </label>
          <label>
            Requirement
            <textarea name="message" placeholder="Tell us about layout, size, materials, city, and timeline." />
          </label>
          <button type="button">Prepare my quotation</button>
        </form>
      </section>
    </main>
  );
}
