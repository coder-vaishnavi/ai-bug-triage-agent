Below is a **clean, human-written project documentation** you can paste into a file like
`PROJECT_DOCUMENTATION.md` or add to your repo.

---

# 📘 AI Bug Triage Agent — Project Documentation

## 1. Introduction

The AI Bug Triage Agent is a simple web-based tool that helps analyze bug reports automatically.
It compresses issue history and code context using an AI compression API and then assigns a priority and responsible team.

The purpose of this project is to simulate how real software teams triage and manage bugs using AI assistance.

---

## 2. Problem Statement

In real development environments, bug reports often contain long descriptions, logs, and code snippets.
Manually reading and prioritizing these reports takes time and can delay fixes.

This project aims to:

* Reduce manual effort
* Automatically summarize bug context
* Assign priority levels
* Suggest responsible teams

---

## 3. Objectives

* Build a web interface to submit bug reports
* Compress issue history and code context using an API
* Automatically assign bug priority
* Suggest the module/team responsible
* Provide a simple triage result for developers

---

## 4. System Architecture

```
User Input (Bug Title, History, Code)
        ↓
Flask Web Interface
        ↓
AI Compression API (ScaleDown)
        ↓
Triage Logic (priority + module)
        ↓
Result Displayed on UI
```

---

## 5. Technology Stack

| Component       | Technology            |
| --------------- | --------------------- |
| Backend         | Python, Flask         |
| Frontend        | HTML, CSS, JavaScript |
| AI Service      | ScaleDown API         |
| Data Format     | JSON                  |
| Version Control | Git & GitHub          |

---

## 6. Project Structure

```
bug_agent/
│
├── app.py
├── ai_agent.py
├── requirements.txt
├── README.md
├── bugs_test.json
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

---

## 7. Working of the System

### Step 1: User Input

User enters:

* Bug title
* Issue history
* Code context

### Step 2: Compression

The system sends the bug description to the ScaleDown API to compress long text.

### Step 3: Analysis

Basic triage logic determines:

* Priority level
* Module affected
* Responsible team

### Step 4: Output

The result is displayed on the web page showing:

* Summary
* Priority
* Module
* Assigned team

---

## 8. Features

* Bug report analysis
* Issue history compression
* Priority detection
* Module detection
* Team routing
* Web interface for testing
* JSON test dataset

---

## 9. Example Input

**Bug Title**
Login crash on submit

**Issue History**
App crashes after login. Authentication module error.

**Code Context**

```js
function loginUser(){
  auth.refreshToken();
}
```

---

## 10. Example Output

```
Summary: Login crash
Priority: High
Module: Authentication
Assigned Team: Auth Team
```

---

## 11. How to Run the Project

### Install dependencies

```
pip install -r requirements.txt
```

### Add API key

Create `.env`

```
API_KEY=your_api_key
```

### Run server

```
python app.py
```

Open browser:

```
http://127.0.0.1:5000
```

---

## 12. Testing

A sample dataset `bugs_test.json` is included.
It contains multiple bug cases to test the system automatically.

---

## 13. Limitations

* Uses basic rule-based priority logic
* No database storage
* No real GitHub integration
* Requires API key

---

## 14. Future Enhancements

* GitHub issue integration
* Database to store bugs
* Better UI dashboard
* ML-based priority prediction
* Multi-agent architecture

---

## 15. Conclusion

The AI Bug Triage Agent demonstrates how AI can assist developers in analyzing and prioritizing bug reports.
It provides a simple but effective simulation of real-world bug triage systems.

---

## 16. Author

Project created as part of an AI agent development assignment.
