# Game of Thrones Character Reel

I built this project to test my understanding of using and working with APIs, Nuxt.js, pagination, component-naming conventions, and handling dynamic data.

Tech stack:

- [Nuxt.js](https://nuxtjs.org/) (PWA)
- [axios](https://axios.nuxtjs.org/)
- HTML/CSS
- [Netlify](https://www.netlify.com)

## Build Setup

```bash
# clone repo
$ git clone `<repo name>`

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

---

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

### The challenge

The challenge of this self-directed project was to be able to generalize my knowledge from the past couple months of learning Vue.js. I saw this project listed as a take-home assignment in an entry-level developer interview so I decided to take it on and finally break away from tutorials.

Adapting it for my own goals, my challenge was to:

- Design the interface (UI)
- Create style guide for UI elements
- Use the https://anapioficeandfire.com API
- Include image optimization
- Filter API response
- Paginate API call
- SEO
- PWA

And users would be able to:

- Paginate characters
- Filter character names and allegiances

### Screenshot

- ![](https://github.com/maureento8888/got-reel/blob/eb6b15f10c73bef407992cf48c90abce13214e77/screenshot.png)

### Links

- [View site](https://gamesofthrones-character-reel.netlify.app/)

## My process

I first started on [Adobe Xd](https://www.adobe.com/ca/products/xd.html) for the app design and style guide. I worked on creating the app layout and making it responsive. After finishing touches, I moved on to developing the app with Nuxt.js and deploying it to Netlify.

I had initial issues with deployment on [Vercel](https://vercel.com) where I had issues with it not being able to find the app's entrypoint. In my nuxt.config.js, I had set my `router` config to
`router: { base: '/got-reel/' }`
. I was reading articles on Nuxt.js deployments by other developers and went down the wrong path. I realized that was likely why my deployment to Vercel didn't work. I transfered to Netlify and after figuring out the `router` config issue, my deployment finally worked.

### Built with

Built with Nuxt.js (for SEO and PWA) and HTML/CSS. The API is from https://anapioficeandfire.com.

### Continued development

Note on design: The app was not meant to have lots of design overhead (animation, trendy design, etc.) as emphasis was placed more on functionality (Could I successfully fetch the API and work with it? Does pagination work? What if there is a 404 error?). However, I have created the minimum design specs for brand color, typeface, and page layouts. In more complex applications, I would have a more "fancy" design!

### Useful Resources

- Debbie O'Brien - [Youtube](https://youtube.com/c/DebbieOBrien) on Nuxt tidbits
- Creating Nuxt.js error pages - https://nuxtjs.org/docs/2.x/concepts/views/#error-page

## Author

- [@maureento8888](https://github.com/maureento8888)

## Acknowledgements

- Vue.js and Nuxt.js team - for amazing documentation 💚
