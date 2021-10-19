// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
/* console.log(document);
console.log(document.all);
console.log(document.all[1]);
console.log(document.all[7]);
console.log(document.all.length);
console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.charset);
console.log(document.contentType);

console.log(document.body.className);
console.log(document.body.classList);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].className);
console.log(document.forms[0].action);
console.log(document.forms[0].method);
console.log(document.links);
console.log(document.script);

let scripts = document.scripts;
console.log(scripts); */
/*

let headers = document.getElementsByClassName('header');//same as
//let headers = document.getElementsByTagName('h1');
headers = Array.from(headers);

headers.forEach((header, index) =>{
    console.log(header.className);
    header.style.color = '#fff';
    header.style.backgroundColor = '#333';
    header.style.padding = '15px';
    header.innerText = `Hello World: ${index}`;
});
console.log(headers); */

// DOM Selectors

// let header = document.getElementById('add-post-title-id');

// console.log(header);
// console.log(header.id);
// console.log(header.className);
// console.log(header.classList);

// // header.style.backgroundColor='#333';
// // header.style.color = '#fff';
// // header.style.padding = '15px';
// // header.style.display ='none';

// header.textContent ='Hello World'; //it will change the text
// header.innerText = 'Hello World 2';// same as textContent
// header.innerHTML ='<span style ="color: red"> Hello World 3</span>';// same just ading style tag

//QuerySelector work same as elemet 
// let header = document.querySelector('#add-post-title-id');

// console.log(header);
// console.log(header.id);
// console.log(header.className);
// console.log(header.classList);

// header.style.backgroundColor='#333';
// header.style.color = '#fff';
// header.style.padding = '15px';
// // header.style.display ='none';

// header.textContent ='Hello World'; //it will change the text
// header.innerText = 'Hello World 2';// same as textContent
// header.innerHTML ='<span style ="color: red"> Hello World 3</span>';// same just ading style tag

 


//Obserbing parent, children, sibling property
// const tbody = document.querySelector('tbody');
// console.log(tbody);
// console.log(tbody.children);
// // console.log(tbody.childNodes);

// console.log(tbody.childElementCount);
// console.log(tbody.children[2]);
// // tbody.children[2].innerHTML ='<span> Hello World</span>';

// console.log(tbody.firstChild);
// console.log(tbody.firstElementChild);
// console.log(tbody.lastChild);
// console.log(tbody.lastElementChild);
// console.log(tbody.firstElementChild.children[1].children[0]);
// console.log(tbody.parentElement.parentElement);
// console.log(tbody.parentNode);
// console.log(tbody.children[1].previousElementSibling);
// console.log(tbody.children[1].nextElementSibling);


//Creating Elements with DOM

{/* <tr>
    <td class="post">post 6</td>
    <td>
        <span class="fa fa-times float-right pr-3"></span>
    </td>
</tr> */}
//we will make this using DOM

// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// td1.className = 'post';
// td1.innerHTML = 'post 6';
// td1.id = 'post-id';
// td1.setAttribute('title','post-title-6');

// console.log(td1);
// const td2 = document.createElement('td');
// const span = document.createElement('span');
// span.className ='fa fa-times float-right pr-3';
// td2.append(span)//inserting span into td2
// console.log(td2);

// tr.append(td1, td2);//inserting td1, td2 into tr
// console.log(tr);

// document.querySelector('tbody').append(tr);//tr to the html file


//Various Event Listeners
// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('click', function(event){
//     console.log('Hello');//when we click on UI(clearBtn) it will print hello
// });

// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('dblclick', function (event) {
//     console.log('Hello');//when we double click on UI(clearBtn) it will print hello
// });


// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('mousedown', function (event) {
//     console.log('Hello');//when we  UI(clearBtn) it will print hello
// });

// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('mouseup', function (event) {
//     console.log('Hello');//when we  UI(clearBtn) it will print hello
// });


// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('mouseenter', function (event) {
//     console.log('Hello');//when we don't need to click on UI(clearBtn) just go over the btn it will print hello
// });

// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('mouseleave', function (event) {
//     console.log('Hello');//when we leave the btn UI(clearBtn) it will print hello
// });

// const clearBtn = document.querySelector('.clear-post');
// clearBtn.addEventListener('mousemove', function (event) {
//     console.log('Hello');//when we just move insite the btn UI(clearBtn) it will print hello
// });


//Event

const clearBtn = document.querySelector('.clear-post');
clearBtn.addEventListener('click', function (event) {
    console.log(event);

console.log(event.clientX);
console.log(event.clientY);
console.log(event.offsetX);
console.log(event.offsetY);
console.log(event.altKey);
console.log(event.shiftKey);
console.log(event.ctrlKey);
console.log(event.type);
console.log(event.target);
console.log(event.target.id);
console.log(event.target.className);
console.log(event.target.innerText);
event.target.style.backgroundColor ='black';

});