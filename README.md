# 🎮 Movie Explorer (Angular)

Movie Explorer is a simple Angular application that allows users to explore and search for movies. It's designed as a lightweight, responsive, and easy-to-use interface — ideal for learning or demonstration purposes.

## 🚀 Project Overview

This project showcases a basic Angular application with a focus on clean architecture and maintainability. It provides a great starting point for developers who want to build out their own movie-based apps or learn Angular fundamentals.

I've implemented storing of favorites using the client's local storage. In the case of hosting, no backend would be required for this application as the movies are served and the application makes use of the local data to display favorites.
The only downside would be that the user wouldn't have the ability to see their favorited movies on another device.

### ✨ Features

- 🔍 Movie search interface
- 💖 You may favorite movies
- ⚡ Fast and responsive UI  
- 🧱 Modular Angular structure  
- 🎨 Styled using SCSS with flexibility in mind  

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v14 or newer recommended)  
- Angular CLI (globally installed)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dansh-dev/movie-explorer-angular.git
   cd movie-explorer-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

4. Open your browser and visit:
   ```
   http://localhost:4200
   ```

## 📁 Project Structure

```
movie-explorer-angular/
├── src/
│   ├── app/          # Core app components and modules
├── angular.json      # Angular project configuration
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## 🤝 Contributing

Pull requests are welcome! If you find bugs or have feature suggestions, feel free to open an issue or submit a PR.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Happy coding! 🎉

