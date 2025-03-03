window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.site-menu-wrapper');
    var $links = document.querySelectorAll('.site-menu a');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });

    $links.forEach(function ($link) {
        $link.addEventListener('click', function () {
            if ($menu.classList.contains('is-show')) {
                $menu.classList.remove('is-show');
            }
        });
    });
});
