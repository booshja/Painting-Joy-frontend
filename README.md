# **README - PaintingJoy**

## **About**

### _[PaintingJoy.art](https://paintingjoy.art/)_

A web app that is part Art Portfolio, part E-commerce, part custom CMS. Built for a local artist's mural painting business.
<br>
<br>
<br>

# **Local Usage**

## **Summary**:

Set Up:

```
git clone git@github.com:booshja/Painting-Joy-frontend.git
cd Painting-Joy-frontend
npm i
```

-   _Don't forget to create your .env file and create your ENV's (below)_

Run Tests:

```
npm test
```

Run Development server:

```
npm run dev
```

<hr>
<br>

## **Environmental Variables**:

This app uses the following environmental variables that you will need in order to run the app
| ENV | Value |
|------------------------------|----------------------------|
| REACT_APP_BACKEND URL | URL for the back end API |
| REACT_APP_RECAPTCHA_SITE_KEY | Key for Google's reCAPTCHA |

<hr>
<br>

## **Testing**:

This app uses React Testing Library for Smoke and Snapshot Tests, and Jest for unit testing. Tests can be run using:

```
npm i
npm test
```

<hr>
<br>

## **Formatting/Linting/Pre-Commit Hooks**:

This project uses pre-commit hooks with ESLint and Prettier.

<hr>
<br>
<br>
<br>

# **General Information**

## **Features**:

_Browse Murals/General Art_: Browse through all the posts to see the artist's murals and other art.

_E-Commerce_: Uses the Stripe API to process payments for the art store.

_Custom CMS_: On the Admin side- Custom CMS for the artist to manage their posts, homepage, as well as the store.

<hr>

## **External APIs**:

1. [Back End API](https://github.com/booshja/Painting-Joy-backend)
2. [Instagram API]()

<hr>
<br>

## **Tech Stack**:

-   JavaScript
-   JSX
-   [React](https://reactjs.org/)
    -   [Concurrently](https://github.com/open-cli-tools/concurrently)
    -   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
    -   [React Hook Form](https://react-hook-form.com/)
-   CSS
    -   [Styled-Components](https://styled-components.com/)
-   [Cloudflare](https://www.cloudflare.com/cdn/) (Static Front-End Deployment)
-   [VSCode](https://code.visualstudio.com/)

<hr>
<br>

## **Support**

Reach out to me at the following places:

-   Website: [jacobandes.dev](jacobandes.dev)
-   Twitter: [@booshja](https://twitter.com/booshja)
-   Email: [jacob.andes@gmail.com](mailto:jacob.andes@gmail.com)

<hr>
<br>
<br>

Copyright &#169; [Jacob Andes](jacobandes.dev), 2021
