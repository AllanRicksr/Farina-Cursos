document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  document.querySelectorAll('details.contact-widget[open]').forEach((widget) => {
    if (!widget.contains(target)) {
      widget.open = false;
    }
  });
});
