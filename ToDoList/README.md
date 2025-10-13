# 📝 To-Do List App

A clean, modern, and fully functional to-do list application built with vanilla JavaScript. Features real-time clock, dynamic greetings, and persistent storage using localStorage.

![To-Do App Preview]()
![HTML5](./index.html)
![CSS3](./style.css)
![JavaScript](./main.js)

---

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with a single click
- ✅ **Delete Tasks** - Remove completed or unwanted tasks
- ✅ **Mark as Complete** - Check off finished tasks with visual feedback
- ✅ **Persistent Storage** - Tasks saved in localStorage and restored on page reload

### UI/UX Features
- 🕐 **Real-time Clock** - Live updating time display (12-hour format)
- 👋 **Dynamic Greeting** - Personalized greeting based on time of day
  - Good Morning (5 AM - 12 PM)
  - Good Afternoon (12 PM - 5 PM)
  - Good Evening (5 PM - 9 PM)
  - Good Night (9 PM - 5 AM)
- 📅 **Timestamp** - Each task shows creation date and time
- 💬 **Empty State** - Friendly message when no tasks exist
- 🎨 **Modern Design** - Clean UI with smooth animations and transitions

---

## 🚀 Demo

[Live Demo](https://github.com/othmane01010/web-edu-lab)
---

## 📸 Screenshots

### Main Interface
![App Screenshot](img.jpeg)
## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox, animations, and custom properties
- **Vanilla JavaScript** - No frameworks or libraries
- **LocalStorage API** - Client-side data persistence
- **Font Awesome** - Icon library for UI elements

---

## 📂 Project Structure

```
todo-app/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── main.js             # Application logic
└── README.md           # Project documentation
```

---

## 💻 Installation & Usage

### Option 1: Direct Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```
2. Open `index.html` in your browser

### Option 2: Live Server (Recommended for Development)
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"

---

## 🎯 How It Works

### Adding a Task
1. Type your task in the input field
2. Click the **ADD** button or press Enter
3. Task appears with timestamp and controls

### Managing Tasks
- **Complete**: Click the checkbox to mark as done (adds strikethrough)
- **Delete**: Click the 🗑️ icon to remove the task
- **Persist**: All changes automatically saved to localStorage

### Data Persistence
Tasks are stored in the browser's localStorage using this structure:
```javascript
{
  content: "Task description",
  time: "2025-10-13T15:30:45.123Z",  // ISO format
  status: false  // true if completed
}
```

---

## 🧩 Key Functions

| Function | Purpose |
|----------|---------|
| `updateTimeAndGreeting()` | Updates clock and greeting every second |
| `createTaskElement()` | Renders a task in the DOM |
| `addItem()` | Adds task to localStorage |
| `removeItem()` | Removes task from localStorage |
| `updateItem()` | Updates task status in localStorage |
| `updateEmptyMessage()` | Shows/hides "no tasks" message |

---

## 🎨 Design Highlights

- **Color Scheme**: Warm orange theme (#ff7f50) with clean white backgrounds
- **Typography**: Modern sans-serif fonts with proper hierarchy
- **Animations**: Smooth hover effects and scale transforms
- **Responsive**: Adapts to different screen sizes (min-width: 300px)
- **Accessibility**: Semantic HTML and proper contrast ratios

---

## 🐛 Known Issues & Solutions

### Issue: Deleted tasks reappear after refresh
**Cause**: Millisecond precision mismatch between HTML display and localStorage  
**Solution**: Using `data-time` attribute to store exact ISO timestamp

---

## 🚀 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement priority levels (High/Medium/Low)
- [ ] Add due dates for tasks
- [ ] Include search/filter functionality
- [ ] Add dark mode toggle
- [ ] Enable task editing
- [ ] Implement drag-and-drop reordering
- [ ] Add keyboard shortcuts (Enter to add task)

---

## 📚 What I Learned

This project helped me understand:
- ✅ DOM manipulation and event delegation
- ✅ LocalStorage API and data persistence
- ✅ Working with Date objects and ISO timestamps
- ✅ Building responsive layouts with Flexbox
- ✅ Implementing CRUD operations in vanilla JavaScript
- ✅ Debugging real-world issues (like the millisecond bug!)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Othmane**

- GitHub: [@othmane01010](https://github.com/othmane01010)
- Project Link: [web-edu-lab](https://github.com/othmane01010/web-edu-lab)

---

## 🙏 Acknowledgments

- Inspired by modern to-do applications
- Icons from [Font Awesome](https://fontawesome.com/)
- Built as part of my front-end development learning journey

---

## 📊 Project Stats

- **Lines of Code**: ~300 (JavaScript)
- **Development Time**: 2 weeks
- **Last Updated**: October 2025

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ and ☕ by Othmane

</div>