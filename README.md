# Ruangin-FE 🏢

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![ESLint](https://img.shields.io/badge/ESLint-8-red)

**Ruangin-FE** adalah aplikasi frontend modern untuk sistem manajemen dan booking ruangan. Dibangun dengan React, Vite, dan TypeScript untuk performa optimal dan developer experience yang terbaik.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Build Production](#build-production)
- [Struktur Folder](#struktur-folder)
- [Scripts Yang Tersedia](#scripts-yang-tersedia)
- [Konfigurasi](#konfigurasi)
- [Contributing](#contributing)
- [License](#license)

## ✨ Fitur Utama

- 🏢 **Manajemen Ruangan** - Kelola data ruangan dengan mudah
- 📅 **Booking System** - Sistem reservasi ruangan yang intuitif
- 👥 **User Management** - Kelola pengguna dan hak akses
- 📊 **Dashboard Analytics** - Laporan dan statistik penggunaan ruangan
- 📱 **Responsive Design** - Tampilan yang optimal di semua perangkat
- 🔍 **Search & Filter** - Pencarian dan filter ruangan yang canggih
- ⚡ **Real-time Updates** - Update data secara real-time
- 🌙 **Dark/Light Mode** - Tema yang dapat disesuaikan

## 🛠 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** CSS Modules / Styled Components
- **State Management:** Context API / Redux Toolkit
- **HTTP Client:** Axios
- **Routing:** React Router
- **UI Components:** Material-UI / Ant Design
- **Code Quality:** ESLint + Prettier
- **Testing:** Vitest + React Testing Library

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (version 18 atau lebih baru)
- **npm** atau **yarn** atau **pnpm**
- **Git**

## 🚀 Instalasi

1. **Clone repository:**

   ```bash
   git clone https://github.com/wildanmkhdev/Ruangin-FE.git
   cd Ruangin-FE
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Setup environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit file `.env.local` dan sesuaikan dengan konfigurasi Anda:

   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_NAME=Ruangin
   VITE_APP_VERSION=1.0.0
   ```

## 🏃‍♂️ Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Preview Build

```bash
npm run preview
# atau
yarn preview
# atau
pnpm preview
```

## 🏗 Build Production

```bash
npm run build
# atau
yarn build
# atau
pnpm build
```

Build files akan tersimpan di folder `dist/`

## 📁 Struktur Folder

```
Ruangin-FE/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Common components (Button, Modal, etc.)
│   │   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   │   └── ui/            # UI-specific components
│   ├── pages/             # Page components
│   │   ├── Dashboard/
│   │   ├── Rooms/
│   │   ├── Bookings/
│   │   └── Users/
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── store/             # State management
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles
│   ├── assets/            # Images, icons, etc.
│   ├── App.tsx
│   └── main.tsx
├── tests/                 # Test files
├── .env.example           # Environment variables template
├── .eslintrc.js          # ESLint configuration
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node
└── vite.config.ts        # Vite configuration
```

## 📜 Scripts Yang Tersedia

| Script                  | Deskripsi                            |
| ----------------------- | ------------------------------------ |
| `npm run dev`           | Menjalankan development server       |
| `npm run build`         | Build aplikasi untuk production      |
| `npm run preview`       | Preview build production             |
| `npm run lint`          | Menjalankan ESLint                   |
| `npm run lint:fix`      | Memperbaiki ESLint errors            |
| `npm run type-check`    | Menjalankan TypeScript type checking |
| `npm run test`          | Menjalankan unit tests               |
| `npm run test:coverage` | Menjalankan tests dengan coverage    |

## ⚙️ Konfigurasi

### ESLint Configuration

Project ini menggunakan konfigurasi ESLint yang ketat untuk menjaga kualitas kode. Untuk production apps, disarankan menggunakan:

```javascript
// eslint.config.js
export default tseslint.config([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			...tseslint.configs.recommendedTypeChecked,
			// Atau gunakan yang lebih ketat:
			// ...tseslint.configs.strictTypeChecked,
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
]);
```

### Vite Plugins

- `@vitejs/plugin-react` - Fast Refresh dengan Babel
- `@vitejs/plugin-react-swc` - Fast Refresh dengan SWC (alternatif lebih cepat)

## 🔧 Development Guidelines

### Code Style

- Gunakan TypeScript untuk type safety
- Follow React best practices (hooks, functional components)
- Gunakan kebab-case untuk nama file
- Gunakan PascalCase untuk komponen React
- Tulis unit tests untuk fungsi utility dan komponen penting

### Git Workflow

```bash
# Buat branch baru untuk feature
git checkout -b feature/nama-feature

# Commit dengan conventional commits
git commit -m "feat: add room booking functionality"

# Push dan buat pull request
git push origin feature/nama-feature
```

## 🤝 Contributing

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Commit Message Format

Gunakan [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` untuk fitur baru
- `fix:` untuk bug fixes
- `docs:` untuk dokumentasi
- `style:` untuk formatting
- `refactor:` untuk refactoring
- `test:` untuk tests
- `chore:` untuk maintenance

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👥 Tim Pengembang

- **Wildan MKH** - [@wildanmkhdev](https://github.com/wildanmkhdev) - Lead Developer

## 📞 Kontak & Support

- **Repository:** [https://github.com/wildanmkhdev/Ruangin-FE](https://github.com/wildanmkhdev/Ruangin-FE)
- **Issues:** [https://github.com/wildanmkhdev/Ruangin-FE/issues](https://github.com/wildanmkhdev/Ruangin-FE/issues)

---

⭐ **Jangan lupa berikan star jika project ini membantu Anda!**
