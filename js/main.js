// انتخاب هر کلاسی به نام accordion-header-1 و ایجاد حلقه برای هر کدام از آنها
document.querySelectorAll('.accordion-header-1').forEach(header => {
    // ایجاد تابعی برای هنگام کلیک بر روی عنصر header
    header.addEventListener('click', () => {
        // اضافه یا حذف کردن header کلاس active
        header.classList.toggle('active');
        // ذخبره محتوای بعد از header در متغیری به نام content
        const content = header.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});