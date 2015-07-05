export const loadCss = url => {
  let sheet = document.createElement('link');
  sheet.href = url;
  sheet.type = 'text/css';
  sheet.rel = 'stylesheet';
  requestAnimationFrame(() => { document.getElementsByTagName('head')[0].appendChild(sheet); });
};

export const loadScript = (src, callback) => {
  let script = document.createElement('script'), tag;
  script.src = src;
  script.onload = callback;
  tag = document.getElementsByTagName('script')[0];
  requestAnimationFrame(() => { tag.parentNode.insertBefore(script, tag); });
};
