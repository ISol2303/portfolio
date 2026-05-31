# TRAN PHUONG NAM Portfolio Website

Full-stack personal portfolio website with a Java Spring Boot REST API and a React + Tailwind CSS single page frontend.

## Structure

```text
personal-portfolio/
  backend/   Spring Boot API for Projects and Skills
  frontend/  React SPA that fetches portfolio data with Axios
```

## Backend

Run from `personal-portfolio/backend`:

```bash
mvn spring-boot:run
```

Main endpoints:

```text
GET    /api/projects
GET    /api/projects/{id}
POST   /api/projects
PUT    /api/projects/{id}
DELETE /api/projects/{id}

GET    /api/skills
GET    /api/skills/{id}
POST   /api/skills
PUT    /api/skills/{id}
DELETE /api/skills/{id}
```

JWT demo:

```text
POST /api/auth/token
Body: { "username": "admin", "password": "portfolio123" }

GET /api/admin/health
Header: Authorization: Bearer <token>
```

## Frontend

Run from `personal-portfolio/frontend`:

```bash
npm install
npm run dev
```

The frontend expects the API at `http://localhost:8080/api`. Override it with:

```bash
VITE_API_BASE_URL=http://localhost:8080/api npm run dev
```

Update contact placeholders in `frontend/src/components/ContactSection.jsx` with your real email and profile links.
