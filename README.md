# 🚀 Portfolio — Ahmad Aqil Khairun Nadzar

Personal portfolio website built with React + Vite, showcasing my projects, experience, and skills as a Fullstack Web Developer.

🌐 **Live:** [my-portofolio.aaqilknz.my.id](https://my-portofolio.aaqilknz.my.id)

---

## ✨ Features

- Responsive design with dark/light mode toggle
- Animated UI with Framer Motion
- Type animation on Hero section
- Infinite scrolling skills marquee
- Expandable experience timeline with project accordion
- Contact form via mailto
- Deployed on VPS with Nginx + SSL (Certbot)

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| Type Effect | react-type-animation |
| Utilities | clsx, tailwind-merge |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/         # AnimatedBackground, ThemeToggle
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Button
├── data/               # Static data (projects, experiences, education, certificates)
├── layouts/            # Layout wrapper
├── sections/           # Hero, About, Experience, Education, Skills, Projects, Certificates, Contact
├── utils/              # cn helper (clsx + tailwind-merge)
├── App.jsx
├── globals.css
└── main.jsx
public/
├── images/             # Profile photo and about illustration
└── certificates/       # Certificate preview images
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/aqilknz/portofolio.git
cd portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

### VPS + Nginx

```bash
# Build locally
npm run build

# Upload dist to VPS
scp -r -O dist/ ubuntu@your-vps-ip:/var/www/portfolio
```

Nginx config:
```nginx
server {
    listen 80;
    server_name my-portofolio.aaqilknz.my.id;

    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

Then run Certbot for SSL:
```bash
sudo certbot --nginx -d my-portofolio.aaqilknz.my.id
```

### Vercel

Connect GitHub repo to [vercel.com](https://vercel.com) — auto-detected as Vite project, no additional config needed.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.