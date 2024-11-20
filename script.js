document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // 기본 폼 동작 중단
        alert('메시지가 성공적으로 전송되었습니다!');
    });
});
