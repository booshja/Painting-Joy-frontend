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
npm install
```

-   _Don't forget to create your .env file and create your ENV's (below)_

Run Tests:

```
npm test
```

Run Development server:

```
npm start
```

_Note:_ This script uses 'Concurrently' to run both the front end and the back end servers at the same time. For this to work, either set up your file structure so the 'pj-backend' directory is in the same one as pj-frontend, or update the script to match your file structure.

<hr>
<br>

## **Environmental Variables**:

This app uses the following environmental variables that you will need in order to run the app:

| ENV                             | Value                      |
| ------------------------------- | -------------------------- |
| `REACT_APP_BACKEND_URL`         | URL for the back end API   |
| `REACT_APP_RECAPTCHA_SITE_KEY`  | Key for Google's reCAPTCHA |
| `REACT_APP_STRIPE_API_KEY`      | Key for Stripe             |
| `REACT_APP_AUTH0_DOMAIN`        | Auth0 Domain Variable      |
| `REACT_APP_AUTH0_CLIENT_ID`     | Auth0 Client ID            |
| `REACT_APP_AUTH0_CLIENT_SECRET` | Auth0 Client Secret        |
| `REACT_APP_AUTH0_REDIRECT_URI`  | Auth0 Redirect Address     |
| `REACT_APP_AUTH0_AUDIENCE`      | Auth0 Audience Variable    |

<hr>
<br>

## **Testing**:

This app uses React Testing Library, Jest, and Jest-Styled-Components for Smoke, Snapshot, and unit testing. Tests can be run using:

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

_Browse Murals/General Art_: Browse through all the posts to see the artist's murals and art store.

_E-Commerce_: Uses the Stripe API to process payments for the art store.

_Custom CMS_: On the Admin side- Custom CMS for the artist to manage their posts, homepage, as well as the store.

<hr>

## **External APIs**:

1. [Back End API](https://github.com/booshja/Painting-Joy-backend)
    - Custom-built Express API
    - Express chosen for the ability to use one language throughout the stack, and its easy integration with React.
2. [Auth0](https://a0.to/)
    - Authentication and Authorization Service
    - Chosen because of the ease of use of their SDK and API, as well as the additional features of Google, Facebook, and other login options.
3. [Google reCAPTCHA](https://developers.google.com/recaptcha/)
    - Human Detection
    - Chosen to filter bots from Contact Form submission.
4. [Stripe](https://stripe.com/)
    - Payment Processing
    - Chosen because they're one of the best in the industry with payment processing, including fantastic SDK's, documentation, and tutorials.

<hr>
<br>

## **Project Proposal**:

Step 1 - [General Project Ideas](https://github.com/booshja/Painting-Joy-School-Docs/blob/main/Proposals/step1-ideas.md)
Step 2 - [PaintingJoy.art Propsal](https://github.com/booshja/Painting-Joy-School-Docs/blob/main/Proposals/step2-proposal.md)

<hr>
<br>

## **User Flows**

See the repo directory [HERE.](https://github.com/booshja/Painting-Joy-School-Docs/tree/main/User-Flows)

_Note:_ These user flows were from the original proposal, and contain flows for Authentication/Admin that may not be present in the final project due to the addition of auth0.

<hr>
<br>

## **Front End Mockups**

See the mockups directory [HERE.](https://github.com/booshja/Painting-Joy-School-Docs/tree/main/Mockups)

<hr>
<br>

## **React Hierarchy**

See the React Hierarchy [HERE.](https://github.com/booshja/Painting-Joy-School-Docs/blob/main/React-Hierarchy/Components-Routes.png)

_Note:_ This hierarchy is from the proposal and may not reflect the final state of the React Component Hierarchy within the app.

## **Tech Stack**:

-   [JavaScript](https://developer.mozilla.org/en-US/docs/javascript)
    -   Front End Code
-   [React](https://reactjs.org/)
    -   [JSX](https://reactjs.org/docs/introducing-jsx.html)
        -   "Templating" code for creating React Components
    -   [Concurrently](https://github.com/open-cli-tools/concurrently)
        -   Tool for running front and back end servers concurrently.
    -   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
        -   UI Testing Library
    -   [React Hook Form](https://react-hook-form.com/)
        -   Package for better handling of forms within React
    -   [Auth0](https://a0.to/)
        -   Authentication and Authorization Service
    -   [Jest-Styled-Components](https://github.com/styled-components/jest-styled-components)
        -   Jest testing extension for working with Styled-Components
    -   [Google reCAPTCHA](https://developers.google.com/recaptcha/)
        -   Human verification
    -   [Stripe](https://stripe.com/)
        -   Payment Processing API and SDK
-   [CSS](https://www.w3.org/)
    -   [Styled-Components](https://styled-components.com/)
        -   CSS Library for CSS-in-JS Elements
    -   [Font Awesome](https://fontawesome.com/)
        -   Icon API
-   [Cloudflare](https://www.cloudflare.com/cdn/)
    -   Static Front-End Deployment
-   [VSCode](https://code.visualstudio.com/)
    -   My code editor of choice

<hr>
<br>

## **Changelog**

View Changelog [HERE.](https://github.com/booshja/Painting-Joy-frontend/blob/main/CHANGELOG.md)

<hr>
<br>

## **Support**

Reach out to me at the following places:

-   Website: [jacobandes.dev](jacobandes.dev)
-   Twitter: [@booshja](https://twitter.com/booshja)
-   Email: [jacob.andes@gmail.com](mailto:jacob.andes@gmail.com)
-   Email: [admin@jacobandes.dev](mailto:admin@jacobandes.dev)

<hr>
<br>
<br>

Copyright &#169; [Jacob Andes](jacobandes.dev), 2021
