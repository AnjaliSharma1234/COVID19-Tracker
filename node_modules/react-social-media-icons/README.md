# React Social Media Icons
`react-social-media-icons` is a React component to show social media icons.

## Features
- uses Font Awesome [brand icons](http://fontawesome.io/icons/#brand)

## Installation
1. Install React Social Media Icons as a dependency.
```bash
# NPM
npm install --save react-social-media-icons

# Yarn
yarn add react-social-media-bar
```

2. Import the `react-social-media-icons` module.
```javascript
// ES6
import SocialMediaIcons from 'react-social-media-icons';
```

3. Import Font Awesome into your project. I recommend using the CDN.
[See here](http://fontawesome.io/get-started/) for directions.

## Example Code

```
const socialMediaIcons = [
  {
    url: 'https://github.com/andrewgbliss',
    className: 'fa-github-square',
  },
  {
    url: 'https://gitlab.com/andrewgbliss',
    className: 'fa-gitlab',
  },
  {
    url: 'https://www.npmjs.com/~andrewgbliss',
    className: 'fa-npm',
  },
];

<SocialMediaIcons
  icons={socialMediaIcons}
  iconSize={'1.3em'}
  iconColor={'#495056'}
/>
```

## Props
Properties are passed into the `SocialMediaIcons` as follows. These are the default values for each property. Note that not all properties are required.
```javascript
<SocialMediaIcons
  icons={[]}
  iconSize={'1em'}
  iconColor={'blue'}
  classNamePrefix={'fab'}
/>
```