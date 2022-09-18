
const app = {
    pages: [],
    init: function() {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('click', navToPage);
        })
    }
}