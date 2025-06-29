# Inspiration:

This project was born from the need to streamline how clinics and hospitals manage patient records and improve communication between doctors and patients.
Our goal was to create a real-world digital system that provides secure access, record editing, and AI-powered assistance — while preserving patient privacy.
By using modern technologies and trusted medical APIs, the app supports better diagnoses and informed patient care.

This project challenged me to implement real authentication, role-based access, record editing features, and integrate generative AI to assist in clinical decision-making.

Here is the link to try it out: https://patient-tracker-app-p2df.onrender.com/

# What it Does:
Patients App Tracker is a secure full-stack web application where both patients and doctors can log in to manage and view patient records.
It provides a streamlined digital healthcare workflow built with modern web technologies and features role-based access.

# Key Features:  
For Patients:
Sign in to access their personal profile
View their medical history, test results, and past diagnoses
See doctor notes and ongoing treatment plans
Secure and private: patients cannot see other patient data

For Doctors:
Log into their Doctor Dashboard
Search for patients by name or ID
View each patient's full medical profile and records
Click Edit to start a new diagnosis session for any patient

This includes sections for:
Medical History
Symptoms
Physical Examination
Vitals
Medications
Test Results
All updates are securely added to that patient's historical records


# AI Assistant & Medical API integration:
This app integrates two advanced systems to power smart assistance:

RxNorm (National Library of Medicine):
Powers real-time suggestions in the Symptoms and Medications sections
Ensures doctors use accurate, medically recognized terms during input

ChatGPT (OpenAI):
Not a chatbot interface

On the Doctor side:
Analyzes form input after brief pause (6 seconds of inactivity)
Returns non-intrusive, highly relevant diagnosis suggestions before the record is saved

On the Patient side:
Provides supportive, educational insights based on the latest diagnosis
Helps the patient understand:
What the condition means
What to monitor
How to care for themselves
When to contact their doctor



# How it Was Built: 
Tech Stack:
Frontend: React.js (Hooks, Context API)
Backend: Node.js + Express.js
Database: MongoDB with Mongoose ODM
Authentication: JSON Web Tokens (JWT) with role-based access
AI Integration: ChatGPT API for clinical support

Highlights:
Mongoose used to structure and validate complex nested schemas (e.g., patient sessions and diagnoses)
Secure routes for patients and doctors to ensure data privacy
Doctors can only edit patient data through protected endpoints
Fully responsive UI, user-friendly forms, and intuitive dashboards
Axios used for smooth frontend-backend communication

# Images:
Login Screen:
![image](https://github.com/user-attachments/assets/9e88fb0d-9b6d-4a1f-94b7-02938e3b6630)

Doctor's Dashboard:
![image](https://github.com/user-attachments/assets/c06907f9-c537-498c-8787-0329bc2d720b)

Patients Search:
![image](https://github.com/user-attachments/assets/11957d3a-c76e-495f-a594-e7a8109b386e)
![image](https://github.com/user-attachments/assets/08d51323-8437-413a-a008-363f47b065f4)

Patient Profile(Logged in as a Doctor):
![image](https://github.com/user-attachments/assets/2fb88fba-8df5-43ae-84d4-07eb852baddf)

Edit Mode(For Doctors to create new records):

![image](https://github.com/user-attachments/assets/1a42570f-f5ea-4bd5-afe2-25c7747d999f)

![image](https://github.com/user-attachments/assets/57a2d3f1-e69d-4f7d-8e1c-4d65e6c79ea7)

![image](https://github.com/user-attachments/assets/b44ca544-4d9c-4a5b-ad8e-c37ce64c92ce)

![image](https://github.com/user-attachments/assets/3e83633b-0acc-450c-b6bb-feef63670f76)

![image](https://github.com/user-attachments/assets/59ea8f84-6ed3-45aa-b302-33594a74c6ec)

![image](https://github.com/user-attachments/assets/214d3d67-5d71-4f26-91c1-a884a979f98e)


AI:
![image](https://github.com/user-attachments/assets/6a944652-614b-4928-a3d6-350f3b420a0e)

Saving Record on Doctor's Side:
![image](https://github.com/user-attachments/assets/314530b7-d076-47a1-8874-446454d998c8)



Patient's Side:

![image](https://github.com/user-attachments/assets/dc4441ce-b19f-4fc0-be2f-e1be17b85eec)












