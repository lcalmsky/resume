# Developer portfolio template

<p align="center">
  A DEVELOPER PORTFOLIO TEMPLATE.<br>
  Full customizable and easy to use.<br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.3-informational.svg">
  <img src="https://img.shields.io/badge/licence-MIT-blue.svg">
</p>

<p align="center">
  Created by <a href="https://guimgonzalez.business/">Guim González</a>.
</p>

🚀 Welcome to my developer portfolio template with HTML, CSS and JS. Free to use and easy to customize. Here you have a snapshot of how it looks like.

![Developer portfolio snapshot - Guim González](img/snapshot.png)

💻 This is a template made for developers to use it as a portfolio page. To see a live demo visit [guimg.github.io/dev-portfolio/](https://guimg.github.io/dev-portfolio/).

## Usage

### Profile data

✏️The first step is to change the profile data. To do so, go to the file: `data/data.js`.

Within the file you'll find a Javascript object, which contains all the profile data. Change the fields to your current one and save the changes.

> Example

This is a reduced version of the profile object:

```javascript
var profile = {
  name: "Guim González",
  position: "FullStack Developer & Software Engineer",
  email: "info@guimgonzalez.business",
  location: "Barcelona, Spain",
  birth: "1997-07-26"
};
```

Let's change the profile information to `John's Doe`:

```javascript
// My new profile
var profile = {
  name: "John Doe",
  position: "Web Developer at Google.",
  email: "john.doe@example.com",
  location: "San Francisco, CA",
  birth: "1989-09-06"
};
```

✅ Done! Let's begin with the styling.

### Theme

🎨 If you don't like the color I've put some other ones. Try them and choose your favourite one.

- Nightsky
- Sunset
- Purpledream
- Cutekitty

```javascript
let page = {
  theme: "nightsky"
  // ^ themes suported:
  //  - nightsky (default)
  //  - sunset
  //  - purpledream
  //  - cutekitty
};
```

> In this first version you can't change the language yet. I'll upgrade it asap.

## Upload your page

To see your page on Github pages like this: [guimg.github.io/dev-portfolio/](https://guimg.github.io/dev-portfolio/s), just follow their [guide](https://pages.github.com/), it's super simple.

## Troubleshooting and help

For any problem ❗️ or question ❓ of usage [send me an email](mailto:info@guimgonzalez.business) ✉️.

Feel free to open a new [pull request](https://github.com/GuimG/dev-portfolio/pulls) here.

## Bugs and issues

For bugs 🐛 or issues ⚠️ with the template, please [open a new issue](https://github.com/GuimG/dev-portfolio/issues) here on Github.

## License

This code is under the [MIT License](https://opensource.org/licenses/MIT) which you can find in the [master branch](https://github.com/GuimG/dev-portfolio/blob/master/LICENSE).
