function toggleMap (id) {
  let div = document.getElementById(id);

  if (div.style.display == 'none') {
    div.style.display = 'block';
  }
  else {
    div.style.display = 'none';
  }
}

