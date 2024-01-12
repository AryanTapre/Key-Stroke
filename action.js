'use strict';
const data = document.querySelector(".data")
window.addEventListener("keydown",(event) => {
    data.innerHTML = `
        <table border=2>
            <tr>
                <th>key</th>
                <th>key code</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${event.key == '' ? 'Space' : event.key}</td>
                <td>${event.keyCode}</td>  
                <td>${event.code}</td>
            </tr>
        </table>
    `
},false);