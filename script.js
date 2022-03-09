//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');



// ====================== SIDEBAR ================= //


// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})



//MESSAGES
const messagesNotification = querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querrySelector('#message-search');



// ====================== MESSAGES ================= //
// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name  = chat.querrySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}


//search chats
messageSearch.addEventListener('keyup',searchMessage);


messagesNotification.addEventListener('click', () => {
    message.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})

//THEME
const theme = document.querySelectorAll('#theme');
const themeModal = document.querrySelector('.customize-theme');

//THEME/DISPLAY CUSTOMIZATION
const openThemeModal = () => {
    openThemeModal.style.display = 'grid';
}
theme.addEventListener('click', openThemeModal);

















