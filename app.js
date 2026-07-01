let truthbtn = document.getElementById('truthBtn');
let darebtn = document.getElementById('dareBtn');
let randombtn = document.getElementById('randomBtn');
let question_field = document.getElementById('question');
let question;
async function load() {
    const response = await fetch("questions.json");
    question = await response.json();
}
function random(arr) {
    let randomidx = Math.floor(Math.random() * arr.length);
    return arr[randomidx];
}
function show(mode) {
    if (mode === "truth") {
        question_field.innerHTML = `<h3>Truth</h3>
<p>${random(question.truth)}</p>`;
    }
    if (mode === "dare") {
        question_field.innerHTML = `<h3>Dare</h3>
<p>${random(question.dare)}</p>`;
    }
}
truthbtn.addEventListener("click", () => {
    show("truth");
});
darebtn.addEventListener("click", () => {
    show("dare");
});
randombtn.addEventListener("click", () => {
    let user_random = Math.random() > 0.5 ? "truth" : "dare";
    show(user_random);
});
load();
// export {};
//# sourceMappingURL=app.js.map