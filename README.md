````markdown
# AI Bug Triage Agent

This project is a simple AI-powered bug management agent that analyzes bug reports, compresses long issue history, and assigns priority automatically. It also suggests which team should handle the bug based on the affected module.

The goal of this project is to simulate how modern development teams triage bugs with AI assistance.

---

## What this project does

- Accepts a bug title, issue history, and code snippet  
- Compresses long issue descriptions using the ScaleDown API  
- Analyzes the bug context  
- Assigns priority (High / Medium / Low)  
- Detects the likely module  
- Suggests which team should handle the bug  

A small web interface is included to test different bug reports easily.

---

## Tech Stack

- Python  
- Flask  
- ScaleDown API  
- HTML/CSS  


## How to Run the Project

### 1. Install dependencies
```bash
pip install -r requirements.txt
````

### 2. Create a `.env` file and add your API key

```
API_KEY=your_api_key_here
```

### 3. Run the application

```bash
python app.py
```

### 4. Open in browser

```
http://127.0.0.1:5000
```

Enter a bug report and click **Analyze Bug** to see the result.

---

## Example Test Input

**Bug title**
Login crash when user clicks submit

**Issue history**
Users report the app crashes after login. Error appears in authentication module.

**Code context**

```
function loginUser(){ auth.refreshToken(); }
```

---

## Example Output

```
Summary: Login crash  
Priority: High  
Module: Authentication  
Assigned Team: Auth Team  
```

---

## Future Improvements

* Add GitHub integration to fetch real issues
* Store and track multiple bugs
* Improve UI for better visualization

---

## Author

Built as part of an AI agent assignment to demonstrate automated bug triage using LLM-based tools.

```
```
