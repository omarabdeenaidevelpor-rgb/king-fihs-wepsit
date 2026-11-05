// ===================== King Fish — Main JS =====================
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide'), 400);
  });
  // Fallback in case 'load' is slow due to video
  setTimeout(() => preloader.classList.add('hide'), 2500);

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
    updateActiveNav();
  });
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav(){
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
  // Safety net: guarantee every section becomes visible even if the
  // observer never fires (e.g. automated renderers, slow JS, odd viewports).
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add('in'));
  }, 2500);

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const countersStarted = new WeakSet();
  function startCounter(el){
    if (countersStarted.has(el)) return;
    countersStarted.add(el);
    animateCounter(el);
  }
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => counterObserver.observe(c));
  }
  // Safety net for counters too
  setTimeout(() => counters.forEach(startCounter), 3000);

  function animateCounter(el){
    const target = parseInt(el.getAttribute('data-target'), 10);
    let count = 0;
    const duration = 1600;
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const step = () => {
      count++;
      el.textContent = count;
      if (count < target) {
        setTimeout(step, stepTime);
      } else {
        el.textContent = target;
      }
    };
    step();
  }

  /* ---------- Hero video playback rate (luxury feel) ---------- */
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.addEventListener('loadedmetadata', () => {
      try { heroVideo.playbackRate = 0.75; } catch(e) {}
    });
  }

  /* ---------- Contact form (demo submission) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formFeedback.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { formFeedback.style.display = 'none'; }, 5000);
    });
  }

  /* ---------- Language switch (AR <-> EN) ---------- */
  const langSwitch = document.getElementById('langSwitch');
  let currentLang = 'ar';

  const translations = {
    nav_home:"Home", nav_about:"About Us", nav_process:"Our Process", nav_products:"Products",
    nav_quality:"Quality & Traceability", nav_certs:"Certifications", nav_global:"Global Reach",
    nav_contact:"Contact Us", nav_cta:"Request a Quote",

    hero_badge:"From the Nile & the Sea to Tables Around the World",
    hero_title:'We Export <span>Trust</span><br>Before We Export Fish',
    hero_desc:"King Fish is a fully integrated factory for processing, manufacturing and exporting fresh and frozen fish & seafood — built on global food-safety standards (HACCP), an unbroken cold chain, and precise tracking of every shipment from source to destination.",
    hero_btn1:"Explore Our Products", hero_btn2:"Talk to Our Export Team",
    scroll_down:"Discover More",
    stat1:"+ Export Countries", stat2:"Tons / Year", stat3:"% Digital Shipment Tracking", stat4:"Hours Continuous Cold Chain",

    about_exp:"Years of Experience", about_tag:"About Us",
    about_title:"King Fish.. Where Fishing Heritage Meets Modern Industry",
    about_p1:"King Fish was founded to be a trusted bridge between the fishermen of the Nile and the Red Sea and markets around the world, through an integrated manufacturing system combining traditional expertise in Egyptian fish quality with the latest cooling, packaging and digital tracking technologies.",
    about_p2:"We believe trust is built through transparency; that's why our internal systems cover every link in the supply chain: receiving and sorting, manufacturing and quality control under HACCP standards, through to refrigerated shipping and delivery to customers anywhere in the world.",
    ap1_t:"Full Source Traceability", ap1_d:"A digital record for every production batch, from dock to shipment",
    ap2_t:"Connected Cold Chain", ap2_d:"Continuous temperature monitoring across every transport & storage stage",
    ap3_t:"HACCP Food Safety", ap3_d:"Rigorous inspection systems on every production line",
    ap4_t:"Global Export Reach", ap4_d:"Trusted partnerships in more than 30 countries",
    about_btn:"Discover Our Production Journey",

    process_tag:"Quality Journey", process_title:"From the Wave to Your Plate.. Step by Step",
    process_desc:"A fully integrated manufacturing system ensuring the highest quality and safety standards at every stage of production and export.",
    ps1_t:"Fishing & Harvest", ps1_d:"Careful selection of fresh catch sources from the Nile and the sea",
    ps2_t:"Receiving & Sorting", ps2_d:"Instant quality inspection and digital logging of every incoming batch",
    ps3_t:"Processing & Packaging", ps3_d:"Sterile production lines and vacuum-sealed packaging",
    ps4_t:"Refrigerated Shipping", ps4_d:"Cold transport with continuous temperature monitoring to destination",
    ps5_t:"Customer Delivery", ps5_d:"Fresh arrival with guaranteed quality to tables worldwide",

    fac_tag:"Inside King Fish", fac_title:"From the Heart of the Sea to Inside Our Production Lines",
    fac_desc:"A real glimpse of our fishing fleet, refrigerated storage rooms, and fish processing & packaging lines inside our factory.",
    fc1_tag:"Fishing Fleet", fc1_t:"Specialized Fishing Boats Offshore",
    fc2_tag:"Harvest", fc2_t:"Daily Fresh Catch Collection",
    fc3_tag:"Cold Storage", fc3_t:"Refrigerated Storage Rooms Inside the Factory",
    fc4_tag:"Processing", fc4_t:"Fish Processing & Manufacturing Lines",
    fc5_tag:"Production Lines", fc5_t:"Automated Conveyor & Packaging Belts",

    products_tag:"Our Products", products_title:"A Complete Range of Treasures from the Nile & the Sea",
    products_desc:"We provide hotels, restaurants and wholesalers with a wide range of fresh and frozen fish and seafood products.",
    pc1_tag:"Fresh Daily", pc1_t:"Fresh Whole Fish", pc1_d:"A variety of fresh Nile and Red Sea fish, daily",
    pc2_tag:"Premium", pc2_t:"Shrimp & Crustaceans", pc2_d:"Size-graded shrimp meeting international export standards",
    pc3_tag:"Packed & Frozen", pc3_t:"Frozen Packaged Products", pc3_d:"Vacuum-sealed packaging preserving freshness for longer",
    pc4_tag:"For Chefs", pc4_t:"Hotel & Restaurant Range", pc4_d:"Prepared cuts tailored for professional kitchens",

    quality_tag:"Quality & Digital Traceability", quality_title:"NileTrace Technology for Supply Chain Tracking",
    quality_desc:"We rely on our internal digital system to track every shipment moment by moment, ensuring complete food safety from source to customer.",
    q1_t:"Full Chain Traceability", q1_d:"A digital system recording receiving, transfers, inventory and shipping data for every production batch, accurately and auditable.",
    q1_l1:"Origin point registration", q1_l2:"Audit log for every movement", q1_l3:"Batch linked to shipment number",
    q2_t:"Smart Cold Chain", q2_d:"Continuous temperature monitoring across storage and transport stages to preserve freshness and quality.",
    q2_l1:"Real-time temperature sensors", q2_l2:"Temperature deviation alerts", q2_l3:"Shipment safety reports",
    q3_t:"HACCP Standards", q3_d:"Hazard Analysis & Critical Control Points applied across all production lines to ensure the highest food-safety standards.",
    q3_l1:"Documented critical control points", q3_l2:"Periodic independent inspections", q3_l3:"Fully auditable records",

    certs_tag:"Certifications", certs_title:"Quality & Food Safety Certifications",
    certs_desc:"We adhere to the highest international standards to ensure our customers' trust worldwide.",
    cert1:"Food Safety", cert2:"Quality Management", cert3:"Sustainable Fishing", cert4:"Halal Processing", cert5:"EU Export Standards",

    global_tag:"Global Reach", global_title:"Delivering Nile & Sea Quality to 30+ Countries",
    global_p:"Our export partnership network spans the Middle East, Europe, Africa and Asia, backed by reliable logistics and an uninterrupted cold chain.",
    gl1:"Middle East", gl2:"European Union", gl3:"North Africa", gl4:"Gulf Countries", gl5:"East Asia", gl6:"North America",

    testi_tag:"Client Testimonials", testi_title:"Partners in Success Around the World",
    t1_p:'"Consistent quality and shipments that always arrive on schedule — the tracking system gives us complete peace of mind with every order."',
    t1_n:"Ahmed Al Mansouri", t1_r:"Procurement Manager, Hotel Chain - UAE",
    t2_p:'"The best export partner we have worked with in terms of HACCP compliance and packaging/cooling precision."',
    t2_n:"Sophia Bergmann", t2_r:"Import Manager, Germany",
    t3_p:'"King Fish changed our view of Egyptian seafood quality — a professional team and an exceptional product."',
    t3_n:"Li Wei", t3_r:"Supply Chain Manager, Singapore",

    cta_title:"Ready to Supply Quality to Your Business Anywhere in the World",
    cta_desc:"Contact our export team today and get a customized quote for your company's needs.",
    cta_btn1:"Request a Quote Now", cta_btn2:"Call Us Directly",

    contact_tag:"Contact Us", contact_title:"Let's Start a Successful Export Partnership",
    contact_desc:"Our team is ready to answer your inquiries and provide quotes throughout the week.",
    ci_title:"Contact Information", ci_desc:"We'd love to hear from you through any of the following channels, or visit our main factory.",
    ci1_t:"Head Office", ci1_d:"Industrial Zone, Damietta, Egypt",
    ci2_t:"Sales Phone", ci3_t:"Email Address", ci4_t:"Working Hours", ci4_d:"Sat - Thu: 8:00 AM - 6:00 PM",

    f_name:"Full Name", f_company:"Company Name", f_email:"Email Address", f_phone:"Phone Number",
    f_product:"Requested Product", f_opt1:"Fresh Fish", f_opt2:"Shrimp & Crustaceans", f_opt3:"Frozen Products", f_opt4:"Other",
    f_msg:"Order Details", f_submit:"Send Request", f_note:"* Our export team will contact you within 24 business hours.",
    f_success:"Your message has been sent successfully! We'll be in touch soon.",

    foot_desc:"Your trusted partner in manufacturing and exporting fresh and frozen fish & seafood worldwide, under global quality and food-safety standards.",
    fc1_t:"Quick Links", fc2_t:"Our Products", fc3_t:"Newsletter", fc3_d:"Subscribe to get the latest King Fish news and products.",
    foot_copy:"© 2026 King Fish. All rights reserved.",
    foot_made:"Made with passion to bring the best seafood quality to the world 🐟"
  };

  function setLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langSwitch.textContent = lang === 'ar' ? 'EN' : 'AR';

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (lang === 'en' && translations[key]) {
        if (!el.hasAttribute('data-ar-orig')) {
          el.setAttribute('data-ar-orig', el.innerHTML);
        }
        el.innerHTML = translations[key];
      } else if (lang === 'ar' && el.hasAttribute('data-ar-orig')) {
        el.innerHTML = el.getAttribute('data-ar-orig');
      }
    });
  }

  langSwitch.addEventListener('click', () => {
    setLang(currentLang === 'ar' ? 'en' : 'ar');
  });

});
