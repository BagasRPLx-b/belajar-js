function hitungGrade() {
 const score = document.getElementById('score').value;
 let grade;
 if(score >= 90) {
    grade = "tinggal daftar ke havard"
} else if(score >= 80) {
    grade = "kamu udah keren"}
 else if(score >= 70) {
    grade = "kamu pantas menjadi lebih baik"}
 else if(score >= 60) {
    grade = "masihn bisa diperjuangkan"
} else {
    grade="mending jangan sekolah"
}

document.getElementById('result').innerText = `grade = ${grade}`
}
