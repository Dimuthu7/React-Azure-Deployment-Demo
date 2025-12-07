# 🚀 React Vite Azure Deployment Project  
This repository demonstrates **two complete CI/CD deployment pipelines** for a React (Vite) application hosted on **Azure**, using:

1️⃣ **Azure Static Web Apps** — best for simple & fast SPA hosting  
2️⃣ **Azure App Service with Docker** — best for production-grade, containerized deployments

This project is ideal for learning **modern DevOps**, understanding how GitHub Actions deploy to Azure, and comparing when to use which Azure service.

# 📰 Dev.to Article  
📄 Read the full explanation & step-by-step deployment guide for Azure App Service (Docker):  
👉 **[https://dev.to/deploying-react-app-to-azure-app-service-docker-github-actions-oidc](https://dev.to/dimuthu7/deploying-a-react-vite-app-to-azure-app-service-using-docker-github-actions-with-oidc-2d90)**

---

# 📂 Folder Structure  

```
project-root/
│
├── src/                     
├── public/
│
├── Dockerfile               # Production Nginx container
├── Dockerfile.dev           # Dev / testing container
│
├── vite.config.js
├── package.json
│
├── .github/
│   └── workflows/
│       ├── deploy-static.yml     # Azure Static Web Apps CI/CD
│       └── deploy-docker.yml     # Azure App Service CI/CD
│
└── README.md
```

---

# 🏗 Deployment Approaches Explained

---

# 🔵 1. Azure Static Web Apps (Recommended for Pure Frontend)

### ✅ How It Works
1. Build Vite → generates `dist/`  
2. GitHub Actions uploads to Azure Static Web Apps  
3. Azure serves globally via CDN  

### 🎯 Ideal For  
✔ SPAs with no backend  
✔ Portfolios, dashboards, small/medium apps  
✔ Developers who want simplicity & speed  

### ⭐ Pros  
- Global CDN  
- No servers, no Docker  
- Free tier available  
- Fastest deployment workflow  

### ❗ Cons  
- No Docker support  
- Cannot customize server  
- Not ideal for microservices  

---

# 🟧 2. Azure App Service (Docker)

### ✅ How It Works
1. Build Docker image (Nginx + Vite build)  
2. Push to ACR (Azure Container Registry)  
3. App Service pulls container and runs it  

### 🎯 Ideal For  
✔ Need Docker runtime  
✔ Running complex apps  
✔ Nginx tuning, routing  
✔ Adding backend APIs  
✔ Enterprise-grade apps  

### ⭐ Pros  
- Full control (Docker)  
- Better logs & debugging  
- Works for any app size  

### ❗ Cons  
- More expensive  
- Requires ACR + App Service  
- More complex setup  

---

# ⚙️ GitHub Workflows Overview  
This repo includes **two powerful CI/CD workflows**.

---

## 🔵 Workflow 1: `deploy-static.yml` (Azure Static Web Apps)

### 🔧 Steps  
1. Checkout source  
2. Install deps  
3. Build Vite  
4. Deploy `dist/` to Static Web Apps  

### 🔑 Required Secret  
```
AZURE_STATIC_WEB_APPS_TOKEN
```

---

## 🟧 Workflow 2: `deploy-docker.yml` (Azure App Service with Docker)

### 🔧 Steps  
1. Checkout  
2. Install deps  
3. Run tests (optional)  
4. Build Docker image  
5. Login to ACR  
6. Push image  
7. Authenticate to Azure using **OIDC**  
8. Deploy container to App Service  

### 🔑 Required Secrets  
```
ACR_LOGIN_SERVER
ACR_USERNAME
ACR_PASSWORD
AZURE_CLIENT_ID
AZURE_TENANT_ID
AZURE_SUBSCRIPTION_ID
```

---

# 🔐 Understanding Azure OIDC  
OIDC = **OpenID Connect**

This enables **passwordless login** from GitHub → Azure.

| Password-Based | OIDC Token-Based |
|----------------|------------------|
| Requires secrets | No secrets stored |
| Long-lived | Short-lived (~1 min) |
| High leak risk | Zero exposure |
| Needs rotation | No rotation |
| Can be reused | Cannot be reused |

Microsoft recommends OIDC for all modern CI/CD flows.

---

# 🧱 Architecture Overview

### 🔵 Static Web App  
```
GitHub Actions → Build → Deploy to Static Web App → CDN → User
```

### 🟧 App Service (Docker)  
```
GitHub Actions → Docker Build → Push to ACR → App Service pulls → User
```

---

# 🏁 Final Notes  
This repository demonstrates:

✔ Azure Static Web Apps (SPA hosting)  
✔ Azure App Service with Docker  
✔ GitHub Actions CI/CD  
✔ Secure OIDC deployments  
✔ Docker best practices  
✔ Cloud architecture fundamentals  

Use this project as a **template for real-world production deployments** and Azure learning.

---
````
