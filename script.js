// 1️⃣ المتغيرات الشخصية
const myName = "عبدالله محميتي";
const myAge = 26;
const myCity = "الداخلة";
const myJob = "مطور MERN Stack";
const isStudent = false;

// 2️⃣ حساب سنة الميلاد
const currentYear = 2024;
const birthYear = currentYear - myAge;

// 3️⃣ طباعة في Console
console.log("=".repeat(50));
console.log(`مرحباً! اسمي ${myName}`);
console.log(`أنا من ${myCity}`);
console.log(`عمري ${myAge} سنة، ولدت في سنة ${birthYear}`);
console.log(`أعمل كـ ${myJob}`);
console.log("=".repeat(50));

console.log(`\nنوع بيانات الاسم: ${typeof myName}`);
console.log(`نوع بيانات العمر: ${typeof myAge}`);
console.log(`نوع بيانات isStudent: ${typeof isStudent}`);
console.log("=".repeat(50));

// 4️⃣ عرض في الصفحة
const resultDiv = document.getElementById('result');

resultDiv.innerHTML = `
<span class="name">مرحباً! اسمي ${myName}</span>
<span class="city">أنا من ${myCity}</span>
<span class="age">عمري ${myAge} سنة، ولدت في سنة ${birthYear}</span>
<span class="job">أعمل كـ ${myJob}</span>

<span class="type">نوع بيانات الاسم: ${typeof myName}</span>
<span class="type">نوع بيانات العمر: ${typeof myAge}</span>
<span class="type">نوع بيانات isStudent: ${typeof isStudent}</span>
`;