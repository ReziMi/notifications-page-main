document.addEventListener('DOMContentLoaded', function () {
    const markAllRead = document.querySelector('.markRead');
    const ovals = document.querySelectorAll('.oval');
    const unreadUserInfos = document.querySelectorAll('.userInfoUnread');
    const notificationsNum = document.querySelector('.numOfNotif');

    markAllRead.addEventListener('click', function () {
        ovals.forEach(function (oval) {
            oval.style.display = 'none';
        });

        unreadUserInfos.forEach(function (userInfo) {
            userInfo.style.backgroundColor = 'white';
        });

        notificationsNum.textContent = "0";
    });
});
