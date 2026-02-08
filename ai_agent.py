import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
URL = "https://api.scaledown.xyz/compress/raw/"

def analyze_bug(title, history, code):

    context = "Compress issue history and code context for bug triage."

    prompt = f"""
Bug Title: {title}
History: {history}
Code: {code}
"""

    headers = {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    }

    payload = {
        "context": context,
        "prompt": prompt,
        "model": "gpt-4o",
        "scaledown": {"rate": "auto"}
    }

    response = requests.post(URL, headers=headers, data=json.dumps(payload))
    data = response.json()

    # get compressed text
    try:
        compressed = data["results"]["compressed_prompt"]
    except:
        return data

    # 🔽 simulated AI triage logic
    text = (title + history + code).lower()

    if "crash" in text or "payment" in text:
        priority = "High"
    elif "ui" in text:
        priority = "Low"
    else:
        priority = "Medium"

    if "login" in text:
        team = "Auth Team"
        module = "Authentication"
    elif "payment" in text:
        team = "Payments Team"
        module = "Payment"
    else:
        team = "General Team"
        module = "Core"

    result = f"""
Summary: {title}
Priority: {priority}
Module: {module}
Assigned Team: {team}
Compressed Context: {compressed}
"""

    return result
