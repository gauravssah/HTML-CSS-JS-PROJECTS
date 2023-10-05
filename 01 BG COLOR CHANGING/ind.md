```javascript
const boxes = document.querySelectorAll(".box")
const body = document.body;

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id;
    })
})
```