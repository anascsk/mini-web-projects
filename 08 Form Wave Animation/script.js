const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((lettter, idx) => `<span style="transition-delay:${idx * 50}ms">${lettter}</span>`)
    .join('')
})