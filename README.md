# Global State + Firestore Data + Dashboard UI

## Overview

This project is a React dashboard application that demonstrates:

* Global state management using React Context API
* Firebase Authentication
* Firestore database integration
* Real-time event search and filtering
* Persistent selected event state
* Loading skeleton UI

The application fetches event data from Firestore and displays it in a responsive dashboard. Users can search events in real-time, and the last selected event remains highlighted even after a page refresh.

---

## Features

### Authentication Context

Implemented a global `AuthContext` that provides:

* User information
* Global loading state (`isLoading`)

### Firestore Integration

Created an `events` collection in Firestore containing sample event documents.

Example document:

```json
{
  "name": "React Conference",
  "date": "2025-08-15",
  "location": "New York",
  "description": "Annual React developer conference"
}
```

### Dashboard

* Fetches all events from Firestore
* Displays events in a responsive card grid
* Supports mobile and desktop layouts

### Search Functionality

* Real-time filtering
* No page reload required
* Filters events by name

### Selected Event Persistence

* Stores the last clicked event using Local Storage
* Automatically restores and highlights the event after page refresh

### Loading Skeleton

* Displays loading placeholders while Firestore data is being fetched
* Improves user experience during loading

---

## Technologies Used

* React.js
* React Context API
* Firebase Authentication
* Firebase Firestore
* JavaScript (ES6+)
* CSS 


## Installation

### 1. Clone Repository

```bash
git clone [<repository-url>](https://github.com/ms3088/event-dashboard-react-vite-context-search.git)
cd project-folder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

Create a Firebase project.

Enable:

* Authentication
* Firestore Database

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run Application

```bash
npm run dev
```

Application will start at:

```bash
http://localhost:5173
```

---

## Firestore Data Flow

1. Dashboard component loads.
2. Firestore events collection is queried.
3. Data is stored in component state.
4. Events are displayed in cards.
5. Search input filters displayed events.
6. Selected event ID is saved in Local Storage.
7. On refresh, the saved event is restored and highlighted.

---

## How Global State Works

`AuthContext` wraps the application and provides:

```javascript
{
  user,
  login,
  logout,
  isLoading
}
```

This allows any component to access authentication data without prop drilling.

## Demo Video

[Demonstration video Link:]
(https://drive.google.com/file/d/1NAgsNep-d4kQB0UtGZ1nRSK-kSmF5m12/view?usp=sharing))
---


