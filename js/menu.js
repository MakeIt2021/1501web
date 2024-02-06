let menu = document.createElement("div")
let topbar = document.querySelector(".top-bar")

menu.className = "menu"
menu.innerHTML = '<a href="index.htm">На главную</a><a href="hardware.htm">Комплектующие</a><a href = "glossary.htm">Словарь</a><a href = "software.htm">Программы</a><a href = "supercomputers.htm">Суперкомпьютеры</a><a href = "test.htm">Тест</a>'

topbar.appendChild(menu)