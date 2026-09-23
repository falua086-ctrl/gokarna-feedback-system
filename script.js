const form = document.getElementById("feedbackForm");
const list = document.getElementById("issuesList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const desc = document.getElementById("description").value;

    const item = document.createElement("li");
    item.textContent = `${type} - ${desc} (by ${name})`;

    list.appendChild(item);

    form.reset();
});