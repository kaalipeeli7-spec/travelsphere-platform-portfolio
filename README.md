# TravelSphere Platform – Public Portfolio Version

Welcome to the **portfolio edition** of the TravelSphere Platform.  
This repository showcases the **architecture, design flow, modules, APIs, and sample code structure** of a complete multi-sided travel marketplace system.

> ⚠️ Note:  
> This repository **does NOT contain real production code**, secrets, or business-critical logic.  
> All sample code and documents are **safe for public viewing**.

---

# 🚀 About TravelSphere

**TravelSphere** is an end-to-end travel ecosystem designed for:

- **Travellers** – browse destinations, view packages, explore itineraries, submit enquiries  
- **Admin Team** – manage content, agents, enquiries, payments, and platform settings  
- **Travel Agents** – receive enquiries, customise quotations, and serve customers  

The system is built to provide:

- CMS-driven travel content  
- Intelligent enquiry routing  
- Masked customer communication  
- Custom quotation builder  
- Secure client-controlled payment flow  
- Role-based operations backend  

---

# 🧩 Platform Modules

## **1. Customer Website (Frontend)**  
- Destination listings  
- Package detail pages  
- Sample itineraries  
- Relevant packages  
- Explore-more modal  
- Enquiry form + success confirmation  
- CMS-controlled banners, text, images  

## **2. Admin Panel (CMS + Operations)**  
- Manage all website content  
- Create/update destinations & packages  
- Agent approval workflow (KYC, GST, docs)  
- View enquiries and route to agents  
- Configure routing algorithm:  
  - Batch-wise  
  - Broadcast  
  - Priority  
  - Round-robin  
- Payment & commission oversight  
- Role-based access (Super Admin / Admin / Content Manager / Agent Manager)

## **3. Agent Portal**  
- Agent signup + document verification  
- Dashboard for enquiries  
- Masked customer details  
- Build customised quotations:  
  - Itinerary  
  - Inclusions  
  - Exclusions  
  - Pricing  
  - Hotels  
- Send quotation email routed through the company  
- Payment link (client-owned merchant account)  
- Commission ledger  

---

# 🏗 System Architecture (High Level)

Customer Website → Enquiry → Routing Engine → Agent Portal
↓
Admin CMS

**Key layers:**

- **Frontend Layer** – Customer website + agent interface (React)  
- **Admin Layer** – CMS controls content & operations  
- **API Layer** – RESTful backend (Node-style architecture)  
- **Data Layer** – Entities for enquiries, quotations, agents, payments  
- **Integration Layer** – Telephony, Payment Gateway, Email Proxy  

---

# 🛠 Tech Stack (Conceptual)

### **Frontend / Agent Portal**
- React  
- React Router  
- JSX Components  
- Responsive UI  

### **Admin CMS**
- React SPA  
- Protected routes  
- Role-based access  

### **Backend APIs** (conceptual sample)
- Node.js  
- Express-like routing  
- JWT-based authentication  
- Modular route structure  

### **Integrations**
- Payment Gateway (Razorpay / CCAvenue style)  
- Telephony API for masked calling (MyOperator-like)  
- Email routing for masked communication  
- Storage/CDN for images  

---

# 📁 Repository Structure

├── README.md
├── docs/
│ ├── overview/
│ ├── modules/
│ ├── apis/
│ └── guides/
└── sample-code/
├── frontend/
├── admin-panel/
├── backend/
└── agent-portal/


---

# 📘 How to Explore This Portfolio

### Start with:
✔ `docs/overview/project-overview.md`  
✔ `docs/overview/tech-stack.md`  

### Then:
✔ `docs/modules/module-breakdown.md`  
✔ `docs/apis/api-overview.md`  

### Finally check:
✔ `sample-code/` – safe example snippets  

---

# 🛡 What Is NOT Included

❌ No real database schema  
❌ No real private backend logic  
❌ No environment variables  
❌ No API keys  
❌ No production code  

---

# 🎯 Purpose of This Repo

This repository exists to:

- Demonstrate system design skills  
- Show real-world architecture for a travel platform  
- Present sample code structure  
- Support resumes & portfolio presentations  
- Keep production code secure & private  

---

# 👨‍💻 Author  
**kaalipeeli7-spec**

For full project details, private code access, or collaboration, please contact directly.

