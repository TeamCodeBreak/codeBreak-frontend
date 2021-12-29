# Software Requirements

## Vision

- App that helps you find balance and a healthy headspace as a developer. The dev mind you've been waiting for. We are on a mission to make healthier devs so they can build a better world.

### Problem Points codeBreak Addresses

- Forgetting to take breaks and sitting for hours on end.
- Getting into a negative mental space when you get stuck on a problem or overwhelmed.
- Focusing on overall health.
- Preventing developer burnout.
- Overall emphasis is that the application needs to be inviting and easy to use.

## Scope (In/Out)

- IN

  - Login/logout feature with user profile
  - Break reminder that is customizable so you can set intervals for break notifications (persists)
  - Could change site dark/light theme (persists)
  - Quick mental break (e.g. a short breathing technique, short video, inspirational quote, something funny)
  - Rubber ducky programming option (select this to literally talk to a "rubber duck")
  - Hungry? input zip code and feature connects to yelps api and helps user find meal (zip code persists)

- OUT

  - codeBreak will never be a social media platform /.
  - codeBreak will never turn into a crisis service.

### Minimum Viable Product

- Login/logout feature with user profile

- Break reminder that is customizable so you can set intervals for break notifications (persists)

- Could change site dark/light theme (persists)

- Quick mental reset option / exercise (could include a short breathing technique, short video, inspirational quote, something funny)

- Rubber ducky programming option (select this to literally talk to a "rubber duck")

- Hungry? input zip code and feature connects to yelps api and helps user find meal (zip code persists)

### Stretch

- Song suggestions for coding based on mood? (could pull from spotify api)

- Implement mobile app

- Add resources reference page with crisis interventions services contact info

- Allow users to submit site feedback

- Allow users to save resources to their profile

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. A user can create a new account
1. A user can delete their own account
1. A user can log in and log out
1. A user can update their profile information

### Data Flow

User has to create an account with our app to access it. Then user can log in and come to our homepage where user can create profile depending upon their mood. User can set the alarm for certain time intervals to take a break from the screen. User can have the option of adding a timer for the break. At the end of the coding day, user can log out and turn off their app.

## Non-Functional Requirements

1. Security: user must create an account and log in to use the app. This secures user accounts from unauthorized access. We will write our own basic and bearer authorization.
2. Data Persistance: User data shall persist between sessions. This enables restaurant recommendations to populate without user input. Preferred theme should also be retained.
