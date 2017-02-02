VIEW THIS FILE IN RAW

Organized by page:

Login Page:
-has a create user link
-encryption (salt+hash)

Styling:
-full-page city/urban background image

Stretch Goals:
-authentication or JWT token



Signup Page:
-takes in a: 
--name
--email address
--phone number
--password
--profession
--employer (may leave blank)
--interests
--location (hard-code for simplicity)

Styling:
-same as Login

Stretch Goals:
-requires email verification




Index/Main Page:
-logout button
-GET user matches on page load
-integrate location

Styling:
-tinder-esque center focus for approving/denying new connections
-pending connections panel, where upon clicking, shows that user's contact information

Stretch Goals:
-toggle feature to turn off one's own availability
-search feature
-allow users locations to be tracked and updated to DB asynchronously on page visit
-google maps api iframe that's centered on your coordinates and is populated with x number of users in your proximity
-personalized advertisements along right side of page for local businesses (meetup spots) and/or personalized interest-based adverts



Profile Page:
-allow users to edit any of their personal information or interests/search preferences






Non-Specific Stretch Goals:
-sanitize inputs for xss/database attacks
-Oath2.0 login (linkedin)
-deployment
-SSL for https
-Advanced schedule organizer/planner for planning future arrangements
--date picker (https://www.codementor.io/chrisharrington/build-date-picker-react-js-classes-du107v566)
-"Let this page track your location?"
-google maps api integration to ui
--coords pulling
-Advanced parametric database filtering based on an algorithm weighing proximity, interests, and other relevant information
-On/Off button for personal availability/contact
-built-in messaging system for streamlined two-way communication
--allow for group contact/meetup