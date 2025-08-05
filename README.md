# Elite Fitness Club - Gym Membership Website

This project is a fully-featured, responsive website for "Elite Fitness Club," a modern gym. It provides users with information about the gym's programs, membership plans, and includes interactive tools to enhance user engagement. The platform is designed to be both visually appealing and highly functional.

---

## ✨ Features

* **Motivational Landing Page:** A visually striking home page to inspire and welcome new visitors.
* **Detailed Program Information:** Comprehensive descriptions of available workout sessions and specialized bootcamps.
* **Visual Gallery:** A dynamic collage showcasing the gym's atmosphere and member activities.
* **Clear Membership Tiers:** Easy-to-understand pricing plans (Quarterly, Half-Yearly, Yearly) with listed benefits.
* **Functional Contact Form:** A real-time contact form that sends user inquiries directly to the gym's email address.
* **Interactive BMI Calculator:** A health tool that calculates a user's Body Mass Index (BMI) and provides personalized feedback based on the result.

---

## 🛠️ Technologies Used

* **Frontend:** HTML5, CSS3, JavaScript
* **Backend (for Contact Form):** A server-side script (e.g., Node.js with Nodemailer, PHP, or a third-party service like EmailJS) to handle email sending.
* **Design:** Responsive design principles to ensure compatibility across all devices (desktops, tablets, and mobile phones).

---

## 🚀 Project Structure

The website is organized into the following key sections:

1.  **Home:** The main landing page with a call-to-action.
2.  **Workouts:** Details on fitness sessions and bootcamps.
3.  **Gallery:** A collection of images from the gym.
4.  **Plans:** The membership pricing and features section.
5.  **Contact Us:** A form for user inquiries.
6.  **BMI Calculator:** An interactive health tool.

---

## ⚙️ Requirements & Local Setup

This section provides detailed instructions on how to set up and run the project on your local machine for development and testing purposes.

### I. System Requirements

#### Minimum Requirements:
* **Web Browser:** A modern web browser that supports HTML5, CSS3, and modern JavaScript (ES6+).
    * Google Chrome (version 80+)
    * Mozilla Firefox (version 78+)
    * Microsoft Edge (version 88+)
    * Safari (version 14+)
* **Code Editor:** Any plain text editor or Integrated Development Environment (IDE) for viewing or modifying the code.
    * VS Code (Recommended)
    * Sublime Text
    * Atom
    * Notepad++

#### For Backend Development (Contact Form):
* **Node.js & npm:** If you plan to set up a Node.js backend, you will need Node.js (version 14.x or higher) and npm (Node Package Manager) installed.

### II. Local Project Setup

Follow these steps to get the project running on your local machine.

#### Step 1: Get the Project Files
You can either download the project as a ZIP file or clone it using Git.

* **Option A: Download ZIP**
    1.  Download the project source code as a ZIP file.
    2.  Extract the contents of the ZIP file to a folder on your computer.

* **Option B: Clone with Git (Recommended)**
    1.  Open your terminal or command prompt.
    2.  Clone the repository to your local machine using the following command:
        ```bash
        git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
        ```
    3.  Navigate into the newly created project directory:
        ```bash
        cd your-repository-name
        ```

#### Step 2: Running the Frontend
The frontend of this project is built with HTML, CSS, and vanilla JavaScript, so it does not require a build step or a complex server.

1.  Navigate to the project folder where you extracted or cloned the files.
2.  Locate the `index.html` file.
3.  **Right-click** on `index.html` and choose "Open with" your preferred web browser.

Alternatively, for a better development experience with features like live-reloading, you can use a simple local server. If you have VS Code, the **Live Server** extension is an excellent option.

### III. Backend Configuration (for Contact Form)
The contact form needs a backend service to process the form data and send an email. The frontend is already set up to send a request, but you need to point it to a functional backend endpoint.

#### Option 1: Using a Third-Party Service (EmailJS - Easiest)
1.  **Create an Account:** Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2.  **Add an Email Service:** Connect your email provider (e.g., Gmail, Outlook).
3.  **Create an Email Template:** Design the email template that will be sent to you when a user submits the form. You can use variables like `{{from_name}}`, `{{from_email}}`, and `{{message}}` to include the form data.
4.  **Update JavaScript:** In your project's JavaScript file, replace the form submission logic with the EmailJS SDK. You will need to add your `serviceID`, `templateID`, and `userID` from your EmailJS dashboard.

#### Option 2: Setting up a Node.js Backend (Advanced)
If you prefer to run your own backend:
1.  **Initialize a Node.js project:**
    ```bash
    npm init -y
    ```
2.  **Install necessary packages:** You'll need a framework like Express to create the server and a library like Nodemailer to send emails.
    ```bash
    npm install express nodemailer cors
    ```
3.  **Create a server file** (e.g., `server.js`) and set up an endpoint (e.g., `/send-email`) that accepts POST requests from your contact form.
4.  **Use Nodemailer** within this endpoint to configure your email service provider (e.g., Gmail with an "App Password") and send the email containing the form data.
5.  **Update the `fetch` URL** in your frontend JavaScript to point to your local server's endpoint (e.g., `http://localhost:3000/send-email`).

---

*This shows the tool providing personalized notifications based on user input.*
