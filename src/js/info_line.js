const bodyRef = document.body;

const infoLine = [{ text: 'STOP WAR IN UKRAINE TOGETHER' }];

const markupLine = infoLine
  .map(({ text }) => {
    return `<li class="header__item"><p >${text}</p></li>`;
  })
  .join('');

const markupInfoLine = `<ul class="header__list">
${markupLine}
</ul>`;
