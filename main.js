document.querySelectorAll('.like-container').forEach(container => {
                  container.addEventListener('click', () => {
                    const liked = container.classList.toggle('liked');
                    const countSpan = container.querySelector('.count');
                    let count = parseInt(countSpan.textContent);
                    count += liked ? 1 : -1;
                    countSpan.textContent = count;
                  });
                });

const tabs = document.querySelectorAll('.tab');
const title = document.getElementById('page-title');
const tab_contents = document.querySelectorAll('.news');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    tabx = tab.getAttribute('data-title');
    title.textContent = tabx;
    if(tabx == 'Лента'){
      tab_contents.forEach(c => {
      
        c.classList.toggle('hidden_news', false);
      });
    }
    else{
      tab_contents.forEach(c => {
      
        c.classList.toggle('hidden_news', c.getAttribute('data-tab') != tabx);
      });
    }

  });
});

function startVideo() {
  const cover = document.querySelector('.video-cover');
  const video = document.getElementById('player');
    
  cover.classList.add('hidden')
  video.setAttribute('controls', '');
  video.play();
}


  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Загрузка сохранённой темы
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Сохраняем выбор
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
    }
  });

  // Установка иконки при загрузке
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = '☀️';
  }
  const articleSearchForm = document.querySelector('.articles #search-form');
  const articleSearchInput = document.querySelector('.articles #search-input');
  const articleRows = document.querySelectorAll('.articles .table_box tbody tr');

  articleSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = articleSearchInput.value.trim().toLowerCase();
    let anyVisible = false;

    articleRows.forEach(row => {
      const titleCell = row.querySelector('td:nth-child(2)');
      const titleText = titleCell.textContent.toLowerCase();

      if (titleText.includes(query) || query === '') {
        row.style.display = '';
        anyVisible = true;
      } else {
        row.style.display = 'none';
      }
    });

    // Показать сообщение, если ничего не найдено
    let noResultsRow = document.querySelector('.articles .no-results');
    if (!noResultsRow) {
      noResultsRow = document.createElement('tr');
      noResultsRow.classList.add('no-results');
      noResultsRow.innerHTML = '<td colspan="3" style="text-align:center;">Ничего не найдено.</td>';
      document.querySelector('.articles .table_box tbody').appendChild(noResultsRow);
    }
    noResultsRow.style.display = anyVisible ? 'none' : '';
  });
