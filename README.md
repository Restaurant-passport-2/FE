# FE

**Product Vision: Restaurant Passport 2**
   
   *Proposal*

- What problem does your app solve? 

It’s easy to get stuck in a rut, going to the same restaurant every time you have a night out. Also, for some reason, when you plan on going to a restaurant with a group, it can be really difficult to pick a place. Another consideration is that many people want to support local businesses, instead of only going to national chain places, but it can be hard to keep track and find out about locally-owned restaurants.

Another possible use case is that a user might not be a fan of big social media apps and would appreciate a way to keep track of their personal restaurants without the need to sign in with social media authentication, nor having to post on social media.


- Be as specific as possible; how does your app solve the problem?

 Restaurant passport will be a handy way to keep track of the restaurants in a user’s area. It will have a list of the restaurants that the user is interested in, and browsing through their list will help them think of different restaurants to go to. It will also give suggestions from the list. An additional feature that we might implement would be to use an API (such as https://developer.foursquare.com/places)  to find other restaurants that the user might be interested in, and the user could add those to their list. Also, the user can keep track of locally-owned restaurants in their list. 

This app will use authentication to keep the user’s data secure, and will not require the use of social media.    

- What is the mission statement?
 
Restaurant Passport is a useful, secure, easy-to-use application that enables users to keep track of restaurants in their area, see relevant restaurant suggestions, and add, modify, and delete their restaurant data.    
    
*Features*

- What features are required for your minimum viable product?

    1. User can create/register an authenticated account as a `passportHolder` by providing the following:

    * unique `username` - String

    * strong `password` - String

    * a `name` - String

    * a valid `city` - String

    * a valid and unique `email` - String

2. Authenticated `passportHolder` can read, update and delete restaurants from a `passport` (a list of all restaurants that they have visited). Each should have the following properties at a minimum: 
    
    * `restaurantName` - String

    * `streetAddress` - String

    * `city` - String

    * `zipcode` - String

    * `phoneNumber` - String

    * `websiteURL` - String/URL

    * `myRating` (1 thru 5) - Int

    * `notes` - String

    * `stamped` - Boolean

3. Authenticated `passportHolder` can mark that they visited a restaurant with `stamped` (which updates the view with a visual representation of a stamp or punch)

     - What features may you wish to put in a future release?

More fields in the restaurant data could include favorite menu items, photos, reviews.

Linking the app to an external API like FourSquare could allow for more restaurant suggestions and more info about the restaurants, such as menu, hours, photos.

Linking the app to an external map API like Developer.now could also generate relevant search results, based on user’s location (if they grant location data access).

Functionality to share info about a restaurant via social media could be cool.

Links to coupon apps like https://www.2for1.com/ & https://www.hookedapp.com/ could be handy.


- What do the top 3 similar apps do for their users

Google Maps can list restaurants in the area, with lots of info about them, including reviews. But it shows everything; our app will hopefully have appeal because it is more about showing just the restaurants that the user is interested in keeping track of.

Foursquare City Guide lists restaurants in your area. If If you log in, you can follow “friends and experts you trust and see the places they’ve recommended.” https://foursquare.com/city-guide

TripAdvisor can show lists of restaurants based on location: https://www.tripadvisor.com/Restaurants


*Design - Planning*


What design system will you use?

We can use a pre-existing figma design for reference: https://www.figma.com/file/QVWQKd74qsHag7f3AyOcYb/Restaurant-Passport-Wireframe-and-Prototype?node-id=353%3A9
But we will create our own, especially since multiple teams will be making the same app.

What will your User Flow be?

Sign Up/Sign In Page -> If authorized -> RestaurantList (maps through restaurants, each with a delete button) with add restaurant form -> RestaurantPage (with edit form)
https://whimsical.com/HNmxFV3eMFijjWtbfhXJCF#2Ux7TurymNHYUXJZ54W4


*Frameworks - Libraries*

- What 3rd party frameworks are you considering using? 

    Create-react-app, react-router-dom, redux, redux-thunk, axios, & styled-components or other styling library.

- Do APIs require you to contact its maintainer to gain access?

    No, depending on what APIs we use, we might need to get keys, though.

- Are you required to pay to use the API? 

    No, probably not. Foursquare, for example, allows free access with some restrictions.

- Have you considered using Apple Frameworks?

No.

*Target Audience*

- Who is your target audience? Be specific. 

    We are targetting people who love to eat at restaurants, but either get stuck in a rut of going to the same place every time, or have a hard time deciding on which restaurant to go to. This app could have a similar appeal to an app like Pokemon Go or GoodReads, in which it is satisfying to make a collection and be able to edit and add to it. This could be the equivalent, but with restaurants. Also, the user may or may not have a desire to avoid major social media apps, but still want a way to save their restaurant list data.

- What feedback have you gotten from potential users?
    
Features they would like:

“Discounts! Coupons!”

“Somewhere you can put what you ate and a comment and put what you want to try next time. This app is my husband’s dream. He has been thinking about the same thing. We have lots of desires for this app and lots of ideas. Lol”

“Menus, especially for the want to try ones”

“Like a Goodreads for restaurants? That would be great! If it could recommend new ones based on what you have liked in the past, that would be awesome. Also, looking up a place by type and price (I want pizza for less than $20, or Italian in a romantic setting), I would love that!”

“Sort by type: Italian, Greek, Mexican etc. Sort by budget: $, $$, $$$, $$$$”

“Maybe a link to yelp reviews.”

General comments:

“This sounds awesome!”

- Have you validated the problem and your solution with your target audience? How?
   
    TBD


Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

