let counter = 0
let q1 = prompt('Текстовый редактор относится к системным или прикладным программам?', 'введите "системные" или "прикладные"')
if (q1 === "прикладные") {
    alert("Верно!")
    counter++
} else {
    alert("Неверно, к прикладным")
}

let q2 = confirm('Это верное определение? Процессор - устройство, в котором хранятся программы и данные. (Выберите "ОК", если верное)')
if (q2) {
    alert('Неа, Процессор - центральное устройство компьютера, производящее обработку информации в двоичном коде.')
} else {
    alert('Точно, ведь Процессор - центральное устройство компьютера, производящее обработку информации в двоичном коде.')
    counter++
}


let prev = localStorage.getItem('counter')

if (prev) {
    if (prev <= counter) {
        alert(`Тест завершён. Вы набрали ${counter} из 2, этот результат лучше предыдущего (${prev}). Вы будете перенаправлены на главную.`)
    } else {
        alert(`Тест завершён. Вы набрали ${counter} из 2, Ваш предыдущий результат: ${prev}. Вы будете перенаправлены на главную.`)
    }
} else {
    alert(`Тест завершён. Вы набрали ${counter} из 2, этот результат был сохранён. Вы будете перенаправлены на главную.`)
}
localStorage.setItem('counter', counter);

window.location.replace("index.htm");