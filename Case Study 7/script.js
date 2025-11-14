/* Populate day/month/year and update day options for month/year changes */
document.addEventListener("DOMContentLoaded", () => {
  populateMonths();
  populateYears(1950, new Date().getFullYear());
  populateDays(31); // default days

  // update days when month or year changes (handles leap year)
  document.getElementById("month").addEventListener("change", updateDaysForMonthYear);
  document.getElementById("year").addEventListener("change", updateDaysForMonthYear);

  // set up form handlers
  setupFormValidation();
});

/* Helpers to populate selects */
function populateMonths() {
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const month = document.getElementById("month");
  month.innerHTML = `<option value="">Month</option>`;
  monthNames.forEach((m, i) => {
    const opt = document.createElement("option");
    opt.value = i + 1; // 1..12
    opt.textContent = m;
    month.appendChild(opt);
  });
}

function populateYears(start, end) {
  const year = document.getElementById("year");
  year.innerHTML = `<option value="">Year</option>`;
  for (let y = end; y >= start; y--) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    year.appendChild(opt);
  }
}

function populateDays(count, selected = "") {
  const day = document.getElementById("day");
  day.innerHTML = `<option value="">Day</option>`;
  for (let d = 1; d <= count; d++) {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    if (String(d) === String(selected)) opt.selected = true;
    day.appendChild(opt);
  }
}

function isLeapYear(year) {
  if (!year) return false;
  year = Number(year);
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function updateDaysForMonthYear() {
  const monthVal = Number(document.getElementById("month").value);
  const yearVal = Number(document.getElementById("year").value);
  let days = 31;
  if (monthVal === 2) {
    days = isLeapYear(yearVal) ? 29 : 28;
  } else if ([4,6,9,11].includes(monthVal)) {
    days = 30;
  } else {
    days = 31;
  }
  // preserve previously selected day if still valid
  const prevDay = document.getElementById("day").value;
  populateDays(days, prevDay);
}

/* Form validation & events */
function setupFormValidation() {
  const form = document.getElementById("signupForm");
  const msgBox = document.getElementById("formMessage");

  // focus/blur highlight styling (visual feedback)
  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("focus", () => el.classList.add("focused"));
    el.addEventListener("blur", () => el.classList.remove("focused"));
  });

  // submit handler
  form.addEventListener("submit", event => {
    event.preventDefault();
    clearErrors();
    msgBox.style.display = "none";

    const data = {
      fname: document.getElementById("fname").value.trim(),
      lname: document.getElementById("lname").value.trim(),
      day: document.getElementById("day").value,
      month: document.getElementById("month").value,
      year: document.getElementById("year").value,
      username: document.getElementById("username").value.trim(),
      email: document.getElementById("email").value.trim(),
      website: document.getElementById("website").value.trim(),
      password: document.getElementById("password").value,
      repassword: document.getElementById("repassword").value,
      terms: document.getElementById("terms").checked
    };

    const errors = validateFormData(data);

    if (Object.keys(errors).length > 0) {
      showErrors(errors);
      showFormMessage("Please correct the highlighted fields.", "error");
      return;
    }

    // All good — show success message (no actual server submission)
    showFormMessage("✅ Registration successful! Welcome, " + escapeHtml(data.fname) + ".", "success");
    form.reset();
    // repopulate selects back to default after reset
    populateMonths();
    populateYears(1950, new Date().getFullYear());
    populateDays(31);
  });
}

/* Validation rules */
function validateFormData(d) {
  const errors = {};

  if (!d.fname) errors.fname = "Firstname is required.";
  if (!d.username) errors.username = "Username is required.";
  if (!d.email) errors.email = "Email is required.";
  else if (!validateEmail(d.email)) errors.email = "Enter a valid email (example@domain.com).";

  // Birthday must be fully selected
  if (!d.day || !d.month || !d.year) errors.birthday = "Complete birthday is required.";

  if (!d.password) errors.password = "Password is required.";
  else if (d.password.length < 6) errors.password = "Password must be at least 6 characters.";

  if (!d.repassword) errors.repassword = "Please re-enter password.";
  else if (d.password !== d.repassword) errors.repassword = "Passwords do not match.";

  if (!d.terms) errors.terms = "You must agree to the terms.";

  // optional website validation (if provided)
  if (d.website && !validateURL(d.website)) errors.website = "Enter a valid URL (https://...).";

  return errors;
}

/* Helper: show errors inline */
function showErrors(errors) {
  for (const key in errors) {
    const el = document.getElementById("err-" + key) || document.getElementById("err-" + key.replace("birthday","birthday"));
    if (el) {
      el.textContent = errors[key];
    }
  }
}

/* Clear inline errors */
function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

/* Display a top/bottom message */
function showFormMessage(text, type = "error") {
  const msgBox = document.getElementById("formMessage");
  msgBox.style.display = "block";
  msgBox.textContent = text;
  if (type === "success") {
    msgBox.style.background = "#f0fff4";
    msgBox.style.color = "#064f2d";
    msgBox.style.border = "1px solid rgba(47,133,90,0.12)";
  } else {
    msgBox.style.background = "#fff5f5";
    msgBox.style.color = "#721c24";
    msgBox.style.border = "1px solid rgba(217,83,79,0.12)";
  }
}

/* Basic email and URL validators */
function validateEmail(email) {
  // simple but reasonably strict regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email);
}
function validateURL(url) {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch (e) {
    return false;
  }
}

/* small utility to escape user text in success message */
function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"'>]/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[c]));
}
