function onScroll() {
  // var nav = document.getElementById('navigation');
  // nav.classList.add('scroll');
  // is the same as
  //navigation.classList.add('scroll');

  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}