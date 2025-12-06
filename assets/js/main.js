// ==================================================
// SUPABASE CONFIG
// ==================================================
const SUPABASE_URL = "https://fizudiwdkyalvwilwmpi.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenVkaXdka3lhbHZ3aWx3bXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MzkxOTYsImV4cCI6MjA4MDQxNTE5Nn0.VB-4g0DzyGyWzWPUUmbcRPtdLciVHiYw1or52O-dqZk";

// ==================================================
// SUPABASE INSERT FUNCTION (FULLY FIXED + DEBUG)
// ==================================================
async function insertToSupabase(table, data) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Prefer": "return=representation"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log("📌 Supabase Response:", result);

        if (!response.ok) {
            throw new Error(result.message || "Supabase insert failed");
        }

        return result;

    } catch (err) {
        console.error("❌ Supabase Insert Error:", err);
        throw err;
    }
}

// ==================================================
// DOM ELEMENTS
// ==================================================
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const backToTop = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// ==================================================
// THEME (LIGHT/DARK)
// ==================================================
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

// ==================================================
// NAVIGATION + SCROLL
// ==================================================
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    backToTop.classList.toggle("visible", window.scrollY > 300);
});

// Back to Top
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for links
document.querySelectorAll(".smooth-scroll, .nav-link").forEach(link => {
    link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

// ==================================================
// FORM VALIDATION
// ==================================================
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
    setTimeout(() => (formMessage.textContent = ""), 5000);
}

// ==================================================
// CONTACT FORM SUBMISSION
// ==================================================
contactForm.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) return showFormMessage("Name must be at least 2 characters.", "error");
    if (!validateEmail(email)) return showFormMessage("Enter a valid email address.", "error");
    if (message.length < 10) return showFormMessage("Message must be at least 10 characters.", "error");

    // Loading animation
    const btn = contactForm.querySelector("button");
    const btnText = btn.querySelector(".btn-text");
    const btnLoading = btn.querySelector(".btn-loading");
    btnText.style.display = "none";
    btnLoading.style.display = "inline-block";
    btn.disabled = true;

    const formData = {
        name,
        email,
        message,
        submitted_at: new Date().toISOString()
    };

    try {
        // TEMPORARY: Comment out the line below to work without database
         await insertToSupabase("contact_submissions", formData);
        
        // Instead, just log to console (remove this when Supabase is working)
       console.log("📧 Form Data:", formData);
        console.log("✅ Form would be submitted to Supabase");

        showFormMessage("Message sent successfully! I will reply soon.", "success");
        contactForm.reset();
    } catch (err) {
        showFormMessage(`Error: ${err.message}`, "error");
    } finally {
        btnText.style.display = "inline-block";
        btnLoading.style.display = "none";
        btn.disabled = false;
    }
});

// ==================================================
// INITIALIZE EVERYTHING
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    console.log("🚀 Portfolio Loaded Successfully!");
});
