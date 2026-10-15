# Kızılağaç Atlı Spor Kulübü — сайт

Статичный одностраничный сайт (HTML/CSS/JS без сборки), языки TR / RU / EN.

## Публикация на Cloudflare Pages

**Вариант А — через GitHub (обновляется сам при каждом коммите):**
1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → репозиторий `kiiaara/kiiaara`.
2. Production branch: ветка, где лежит сайт.
3. Framework preset: **None**, Build command: пусто, **Build output directory: `stable-site`**.
4. После деплоя: Custom domains → свой домен.

**Вариант Б — без GitHub:** Workers & Pages → Create → Pages → **Upload assets** → перетащить папку `stable-site`.

## Что где лежит

| Файл | Что это |
|------|---------|
| `index.html` | вся страница, тексты на трёх языках — в объекте `T` в конце файла |
| `hero.mp4`, `poster.jpg` | видео первого экрана и его первый кадр |
| `media/` | фото и видео галереи, кадры для «Занятий», фото лошадей, `map.webp` |
| `fonts/`, `fonts.css` | шрифты лежат на сайте, а не грузятся с Google |
| `_headers` | заголовки безопасности и кэширования для Cloudflare |

Лошади — массив `HORSES` в `index.html` (кличка, порода, масть, возраст, фото на трёх языках).

## Карта

По умолчанию показана картинка карты (© OpenStreetMap), а Google-карта загружается
по кнопке «Показать карту»: до согласия посетителя сайт ничего не отправляет в Google.
