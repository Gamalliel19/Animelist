# Anime List

Welcome to the anime list repository, this repository was built for learning by building a mobile-first web app with AniList API to get anime lists and anime detail.

## Technology

- TypeScript
- React JS
- Next JS
- CSS in JS (emotion)
- Apollo Client Graph QL

# Tasks

## Anime List Page

### Anime List

- [x] As a user, I can see 10 anime on initial page load.
- [x] For each anime, show info at least the anime title and anime cover/banner.
- [x] Each anime item are clickable, and will redirect to Anime Detail page when clicked.
- [ ] Anime List page should have pagination functionality.

## Anime Detail Page

### Anime Detail Info

- [x] As a user, I can see anime info on the detail page.
- [x] Show anime cover/banner.
- [x] Show anime title.
- [x] Show other anime details (description, number of episodes, genres, rating, etc). Feel free to add more.

### Add to the Collection Feature

- [ ] As a user, I can add the anime to the collection.
- [ ] User can add anime to an existing collection.
- [ ] If user want to add anime to collection but there is no collection yet, user can set collection name as new collection.
- [ ] User can add an Anime to many collection
- [ ] Collection Name must unique
- [ ] Collection Name doesn’t have special Char

## Collection List Page

### Collection Info Feature

- [ ] As a user, I can see if the anime already added to collection or not.
- [ ] User can see list of collection names where the anime already added.
- [ ] User can click the collection name, and will redirect to Collection Detail page.

### Collection List Info Feature

- [ ] As a user, I can see list of collection that already added.
- [ ] Show all collections at once on initial load page.
- [ ] Each collection item should show collection name.
- [ ] Each collection item should show anime cover/banner from the firstly added anime. If no anime added yet, use default image as cover/banner.
- [ ] User can click the collection item, and will redirect to Collection Detail page.
- [ ] The collections in this list should be persist even after a full page reload.

### Remove Collection Feature

- [ ] As a user, I can remove collection from Collection List page.
- [ ] Show “Remove” button on each collection item/card.
- [ ] Add confirmation modal/popup when user click Remove button, with collection name info.
- [ ] After remove finished, collection list should be updated without reloading the page.

### Add Collection Feature

- [ ] As a user, I can add collection from Collection List page.
- [ ] Show “Add a Collection” button on top of Collection List page.
- [ ] When button clicked, show modal/popup to fill collection name (collection name should be unique) and submit as new collection.
- [ ] After submit finished, new collection should automatically added to the list without reloading Collection List page.
- [ ] Collection Name must unique
- [ ] Collection Name doesn’t have special Char

## Collection Detail Page

### Collection Detail Info Feature

- [ ] As a user, I can see list of anime that already added to the collection.
- [ ] Show collection name on top of the Collection Detail page.
- [ ] Show all added anime at once on initial load page.
- [ ] Each anime item/card should show anime name & anime cover/banner.
- [ ] User can click the anime item, and will redirect to Anime Detail page.

### Remove Anime From Collection Feature

- [ ] As a user, I can remove anime from Collection Detail page.
- [ ] Show “Remove” button on each anime item/card.
- [ ] Add confirmation modal/popup when user click Remove button, with anime title info.
- [ ] After remove finished, anime list should be updated without reloading the page.
