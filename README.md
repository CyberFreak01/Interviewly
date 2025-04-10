# 🧠 PrepWise – Your Personal AI Mock Interviewer


**PrepWise** is a next-gen AI-powered mock interview platform that lets users:
- ✅ Securely log in & set up their profile
- 🎙️ Create **custom interviews** just by speaking to a voice agent
- 🧑‍💼 Participate in **AI-led mock interviews**
- 📊 Get **smart, detailed feedback** after the session

Built to simulate real-world interviews and prepare users with personalized experiences!

---

## 🚀 Features

- 🔐 **JWT-based Secure Authentication**
- 🎤 **Voice AI Agent** using VAPI SDK for interview creation
- 🧠 **Custom Interview Generation** powered by Gemini AI
- 🤖 **AI Interviewer** conducts live Q&A sessions
- 🧾 **Feedback Generator** to provide strengths, weaknesses, and improvement tips
- 🌐 Deployed with **Vercel** for blazing-fast performance

---

## 🏗️ Tech Stack

| Tech | Role |
|------|------|
| **Gemini AI API** | AI Interviewer & Feedback |
| **VAPI Voice SDK** | Voice Agent Integration |
| **Next.js** | Full-stack framework |
| **TurboPack** | Fast build and runtime optimization |

---

## 📐 Architecture

1. **User Auth** → JWT-secured login
2. **Voice Agent** → Uses VAPI SDK to talk to user and collect inputs
3. **Gemini AI** → Generates domain-specific interview questions
4. **Mock Interview Session** → AI asks questions, evaluates answers
5. **Feedback Module** → AI-generated evaluation based on performance

---

## 🛠️ Setup Locally

```bash
git clone https://github.com/your-username/prepwise.git
cd prepwise
npm install
npm run dev
