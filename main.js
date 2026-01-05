import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
    apiKey: "AIzaSyC5LqK5nYvhmgVLB8utjPjLQdNQMy_qe2c",
    authDomain: "comments-test01.firebaseapp.com",
    databaseURL: "https://comments-test01-default-rtdb.firebaseio.com",
    projectId: "comments-test01",
    storageBucket: "comments-test01.firebasestorage.app",
    messagingSenderId: "1061900134848",
    appId: "1:1061900134848:web:a740fa25f3a27a36be0025"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const authorsRef = ref(db, 'authors_survey');

// زر المسح
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('authorForm').reset();
});

// إرسال النموذج
document.getElementById('authorForm').addEventListener('submit', (e) => {
    e.preventDefault(); // منع الصفحة من التحديث

    const name = document.getElementById('authorName').value;
    const email = document.getElementById('authorEmail').value;
    const phone = document.getElementById('authorPhone').value;

    push(authorsRef, {
        fullName: name,
        email: email,
        phone: phone,
        submittedAt: new Date().toISOString()
    }).then(() => {
        alert("تم حفظ بياناتك بنجاح!");
        document.getElementById('authorForm').reset();
    }).catch((error) => {
        console.error("خطأ في الحفظ: ", error);
    });
});