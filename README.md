<img width="853" height="1280" alt="image" src="https://github.com/user-attachments/assets/ef4573a3-a3c6-41ca-8f96-4fb92bbe661d" />

🐟 KING FISH
Premium Seafood Processing & Global Export
  🌊 Fresh Seafood · ❄️ Frozen Products · 🌍 Global Export · 🛡️ Quality & Traceability
  <p>
    <img src="https://img.shields.io/badge/Website-Corporate%20Frontend-0A6B78?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Corporate frontend" />
    <img src="https://img.shields.io/badge/Languages-Arabic%20%7C%20English-168AAD?style=for-the-badge&logo=googletranslate&logoColor=white" alt="Arabic and English" />
    <img src="https://img.shields.io/badge/Layout-Responsive-2A9D8F?style=for-the-badge&logo=css3&logoColor=white" alt="Responsive" />
    <img src="https://img.shields.io/badge/Status-Frontend%20Demo-E9A23B?style=for-the-badge&logo=github&logoColor=white" alt="Frontend demo" />
  </p>  <p>
    A modern bilingual corporate website presenting King Fish's seafood products,
    production journey, facilities, quality approach, and international export offering.
  </p></div>📑 Table of Contents
- 🌐 About the Project
- ✨ Features
- 🧭 Website Sections
- 🌍 Multilingual Experience
- 🛠️ Technology Stack
- 📂 Project Structure
- 🚀 Getting Started
- ⚙️ Configuration
- 🔌 Current Limitations
- 🗺️ Roadmap
- 🚢 Deployment
- 🖼️ Media & Credits
- 🤝 Contributing
- 📄 License
🌐 About the Project
King Fish is a corporate website concept for a seafood processing and export business based in Egypt. It is designed to introduce the brand to international buyers, distributors, hotels, restaurants, and business partners.

The experience combines premium visual presentation with clear information about seafood categories, production stages, facilities, quality practices, and export capabilities.

The website also presents simplified digital traceability concepts inspired by the NileTrace Enterprise supply-chain project. These concepts are explained for visitors in a marketing-friendly way; they are not a live tracking service in the current frontend implementation.
🎯 Project Objectives
- 🏢 Establish a professional international brand presence.
- 🐠 Showcase fresh and frozen seafood product categories.
- 🏭 Present production facilities and operational capabilities.
- 🛡️ Communicate quality and food-safety practices accurately.
- 🌍 Introduce export markets and B2B opportunities.
- 📩 Encourage visitors to submit business and quotation inquiries.
- 🌐 Provide a bilingual Arabic and English experience.
✨ Features
Feature	Description
🎬 Video Hero	Full-screen introductory video with muted autoplay and looping
📊 Animated Counters	Statistics animate when the relevant section enters view
🌊 Marquee Strip	Scrolling highlights for company capabilities and quality themes
🏢 About Section	Company introduction, key strengths, and supporting imagery
🧭 Production Timeline	Five stages from sourcing to delivery
🖼️ Facilities Gallery	Bento/Mosaic-style image gallery
🐟 Product Showcase	Seafood categories presented in responsive cards
🛡️ Quality & Traceability	Supply-chain, cold-chain, and food-safety concepts
📜 Certifications Section	Visual presentation of relevant standards and certifications
🌍 Global Reach	Export-market and shipping presentation
💬 Testimonials	Sample customer testimonial cards
📩 Quote Request Form	Frontend inquiry form with user feedback
🌐 Language Switcher	Arabic RTL and English LTR without page reload
📱 Responsive Navigation	Mobile hamburger menu and responsive layouts
✨ Scroll Reveals	Progressive reveal animations while scrolling


🧭 Website Sections
1. 🎬 Hero — Brand introduction video, headline, calls to action, and animated counters.
2. 〰️ Marquee — Scrolling highlights and business capabilities.
3. 🏢 About King Fish — Company overview and key differentiators.
4. 🧭 Production Journey — Sourcing, receiving and sorting, processing and packaging, cold-chain shipping, and delivery.
5. 🏭 Facilities Gallery — Fishing fleet, operations, cold storage, processing, and packaging imagery.
6. 🐟 Products — Fresh seafood, shrimp and crustaceans, frozen products, and hospitality selections.
7. 🛡️ Quality & Traceability — Traceability concepts, cold-chain management, and food-safety practices.
8. 📜 Certifications — A presentation area for applicable certifications and standards.
9. 🌍 Global Reach — Export destinations and shipping presentation.
10. 💬 Testimonials — Sample customer feedback cards.
11. 📣 Call to Action — Request-a-quote prompt.
12. 📩 Contact — Business contact details and inquiry form.
13. 🔗 Footer — Navigation, product links, and newsletter interface.
🌍 Multilingual Experience
The website supports two languages:
Language	Direction	Role
🇪🇬 Arabic	RTL	Default language
🇬🇧 English	LTR	Alternate language


Language features:
- 🔄 Switch language directly from the header.
- ⚡ Update translated content without reloading the page.
- ↔️ Switch text direction between RTL and LTR.
- 🔤 Use Cairo for Arabic and Poppins for English.
Translations are managed through a JavaScript dictionary in js/main.js.
🛠️ Technology Stack
Technology	Usage
🧱 HTML5	Semantic page structure
🎨 CSS3	Styling, responsive layouts, and animations
⚡ Vanilla JavaScript	Interactions and dynamic behavior
🔣 Font Awesome	Interface icons
🔤 Google Fonts	Cairo and Poppins typography
👁️ Intersection Observer API	Scroll-triggered counters and reveal effects
🎥 HTML5 Video	Hero background video


The current implementation is a static frontend and does not require a JavaScript framework or build tool.

📂 Project Structure
King-Fish/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── logo.png
│   ├── logo-white.png
│   ├── fishing-fleet.jpg
│   ├── fishing-operations.jpg
│   ├── cold-storage.jpg
│   ├── processing-facility.jpg
│   ├── packaging-line.jpg
│   ├── seafood-products/
│   └── shipping/
│
├── videos/
│   └── king-fish-intro.mp4
│
└── README.md
📝 This is the documented target structure. Confirm actual filenames and folders in the repository before relying on these paths.

🚀 Getting Started
📋 Requirements
- 🌐 A modern web browser.
- 💻 Visual Studio Code (recommended).
- 🔌 Live Server extension (recommended).
No Node.js installation or package manager is required for the current static version.
1️⃣ Clone the Repository
Replace the placeholders with the actual GitHub account and repository name:
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
2️⃣ Open the Project Folder
cd King-Fish
Open the folder in Visual Studio Code.
3️⃣ Run with Live Server
Right-click index.html and select Open with Live Server.

Or run a local server with Python:
python -m http.server 8000
Then open:
http://localhost:8000
⚙️ Configuration
Before publishing the website, review and update the following:
🏢 Company Details
- Official company name and description.
- Verified factory and office addresses.
- Official phone and WhatsApp numbers.
- Business email address.
- Social media profile URLs.
- Confirmed export markets.
📊 Business Statistics
Any displayed production, capacity, or export figures must be confirmed by the company before publication.

For example, figures such as 30 export countries and 15,000 tons are illustrative placeholders unless independently verified and approved by the company.
📜 Certifications
Only display certifications that King Fish actually holds and can substantiate with valid, current documentation. A website section or badge alone does not establish certification.
🖼️ Images and Video
Check that all media paths are correct, that the video file exists, and that every asset is licensed for the intended commercial use.
🔌 Current Limitations
⚠️ This repository currently documents a frontend website, not a connected enterprise platform.

Component	Current State
Corporate website UI	✅ Implemented
Responsive layouts	✅ Implemented
Arabic / English switcher	✅ Implemented
Hero background video	✅ Implemented
Scroll animations and counters	✅ Implemented
Product and facilities presentation	✅ Implemented
Contact form interface	⚠️ Frontend only
Form email delivery	❌ Not connected
Database storage	❌ Not connected
Newsletter subscription	❌ Not connected
Live inventory	❌ Not connected
Shipment tracking	❌ Not connected
Live temperature monitoring	❌ Not connected
Admin dashboard	❌ Not included


📩 Contact Form Integration
The current form displays frontend feedback only. It does not send or store inquiries.

Possible future integrations:
- 🗄️ Supabase for inquiry storage.
- ✉️ An email delivery service for notifications.
- 💬 WhatsApp Business for customer communication.
- 🔗 A secure REST API for CRM or ERP integration.
🗺️ Roadmap
- [x] 🎨 Corporate frontend design
- [x] 📱 Responsive desktop and mobile layouts
- [x] 🌍 Arabic and English support
- [x] 🎬 Hero video and scroll animations
- [x] 🐟 Product and facilities sections
- [x] 🛡️ Quality and traceability presentation
- [ ] 📩 Connect the contact form to a backend
- [ ] 🗄️ Store and manage quotation requests
- [ ] 🧑‍💼 Build an admin dashboard
- [ ] 🐠 Add dynamic product management
- [ ] 🔗 Integrate CRM / ERP systems
- [ ] 📦 Integrate real shipment tracking where available
- [ ] 🔎 Complete technical SEO and accessibility review
- [ ] 🚀 Publish the production website
🚢 Deployment
The static website can be deployed to services such as:
- ▲ Vercel
- ☁️ Cloudflare Pages
- 🌐 Netlify
- 🐙 GitHub Pages
Before production deployment:
- ✅ Replace placeholder contact details.
- ✅ Verify company statistics and certifications.
- ✅ Confirm media licensing.
- ✅ Connect and test the inquiry form if required.
- ✅ Test both languages on desktop and mobile.
- ✅ Check video loading and performance.
- ✅ Configure the production domain and HTTPS.
🖼️ Media & Credits
The project may include:
- 🎨 Custom-generated King Fish logo assets.
- 🐟 Seafood and product photography.
- 🚢 Fishing, factory, and shipping imagery.
- 🎥 King Fish introductory brand video.
All third-party assets must retain any required attribution and comply with their original licenses. Confirm commercial-use permissions before publishing.
🤝 Contributing
Contributions and improvement suggestions are welcome.
1. 🍴 Fork the repository.
2. 🌿 Create a feature branch.
3. 💻 Make your changes.
4. ✅ Test the website on desktop and mobile, in both languages.
5. 📬 Submit a Pull Request describing your changes.
📄 License
No open-source license has been specified for this project yet.

Unless the repository owner adds a license, assume that reuse, redistribution, and modification are not granted by default.
📬 Contact & Business Inquiries
King Fish — Seafood Processing & Global Export
📍 Egypt 🇪🇬

For business inquiries, export partnerships, and quotation requests, use the company's verified official contact channels once they have been added to the website.
<div align="center">🐟 KING FISH
  Quality · Freshness · Trust · Global Reach

  🌊 Bringing seafood excellence to global markets.

  <sub>© King Fish. All rights reserved.</sub>
</div>
