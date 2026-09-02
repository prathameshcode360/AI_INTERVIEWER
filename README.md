# AI Interviewer — InterviewIQ.AI

> An AI-powered mock interview platform that helps candidates practice technical and HR interviews, receive AI-based feedback, track performance, and generate interview reports.

## 🚀 Overview

**AI Interviewer** is a full-stack web application built to simulate realistic job interviews using Artificial Intelligence.

A candidate can:

- Sign in using Google
- Select a target job role and experience level
- Choose **Technical** or **HR** interview mode
- Upload a PDF resume for AI-based analysis
- Generate role/resume-aware interview questions
- Answer questions using text or voice
- Practice under a per-question time limit
- Receive AI-generated evaluation and feedback
- View previous interview attempts
- Analyze performance through charts and scores
- Download a PDF interview report
- Purchase additional interview credits through Razorpay

The project combines a modern React frontend with an Express/Node.js backend, MongoDB, Firebase Authentication, OpenRouter LLM APIs, and Razorpay payments.

---

## ✨ Key Features

### 🔐 Authentication

- Google Sign-In using Firebase Authentication
- Backend JWT session
- HTTP cookie-based authentication
- Protected application routes

### 📄 Resume Analysis

- Upload a PDF resume
- Extract text from the resume using `pdfjs-dist`
- AI extracts:
  - Job role
  - Experience
  - Projects
  - Skills
- Resume information is used while generating interview questions

### 🤖 AI Interview Generation

- Generates exactly **5 interview questions**
- Supports:
  - Technical interviews
  - HR interviews
- Questions progressively increase in difficulty:
  - Easy
  - Easy
  - Medium
  - Medium
  - Hard

### 🎤 Voice Interview

- Browser speech synthesis reads interview questions
- Browser speech recognition converts spoken answers into text
- Users can also type answers manually

### ⏱️ Timed Interview

Each question has a time limit:

| Question | Time |
|---|---:|
| Q1 | 60 seconds |
| Q2 | 60 seconds |
| Q3 | 90 seconds |
| Q4 | 90 seconds |
| Q5 | 120 seconds |

### 📊 AI Answer Evaluation

Every answer is evaluated on:

- Confidence
- Communication
- Correctness
- Final score
- Short AI-generated feedback

The final question score is calculated as:

```text
Final Score = (Confidence + Communication + Correctness) / 3
