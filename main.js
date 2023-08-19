function toggleMap (id) {
  let div = document.getElementById(id);

  if (div.hidden) {
    div.hidden = false;
  }
  else {
    div.hidden = true;
  }
}

