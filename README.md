# CareerSpark


> Meet up and network with professionals on the fly.

## Team

  - __Product Owner__: Joey Lee
  - __Scrum Master__: Michael Comes
  - __Development Team Members__: Greg Coffeng, Kevin Gin

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Log in then start swiping through a list of suggested and pending incoming connections in order to connect with them.

## Requirements

- Node 0.10.x
- MySql 2.13.x
- superagent 3.4.1x
- express-fileupload 0.0.6x

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap

View the project roadmap [here](##Issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

##Issues
                 React Component Tree:        html
                           |
                           index -> react-router module
                             |
                   Login - Signup - App - Profile - About
                     |       |       |     |      |
                 LoginApp  NewUser   |     |  Header - Nav
                                 |       |
                                 |     Header - Nav - ConnectionsView
                                 |               |
                                 |           ConnectionsViewEntry
                                 |
               Header - Nav - PendingConnectionsView - SuggestedConnectionsView
                             |
                      PendingConnectionsViewEntry

The project root element is index.jsx which sets up our router for navigating between pages on our website

Page 'newuser' allows users to add their profile information to a mysql relational database

  The database has 2 tables - users  - storing user information for each user, and  - connections - a join table which connects users who select each other to match with

  In newuser, a user can drag and drop a profile image into a 'dropbox' which will send the image to a cloudinary repository of images that will be populated with all the image data.

The bulk of our application code is stored inside our stateful React, parent component, App.jsx.

  When App.jsx loads, an AJAX request to the database fetches the user information of the current user.

  The page contains another ajax method, offerOrAcceptConnection, which  returns allows a user to add a connection.

App.jsx renders 2 different views when the initial ajax method, getUserInfo, returns: PendingConnectionsView, SuggestedConnectionsView

PendingConnectionsView renders incoming connections to the user. Incoming connections are users who have chosen to connect with the current user.

SuggestedConnectionsView renders connections that we have suggested the user connect with.

PendingConnectionsView and SuggestedConnectionsView work similarly: the user clicks on either a red 'X' or green check mark to reject or accept an incoming connection.

When a user accepts a connection, the user is alerted that a match has been formed and is given that user's information

Important SideNotes:

SignUp.jsx renders the Header Component over the NewUser component.
The SignUp component shows up in the react-router on the main page.  This was to expedite coding but ultimately this view should be seen from the login page or after a unsuccessful login.



NewUser.jsx renders the forms for signing up a new user and getting their profile into the database.
TODO on NewUser.jsx:
The input form should clear after successful submit.  Right now the data persists.

Login.jsx renders the Header and LoginApp components.

LoginApp.jsx holds the form to submit username and password.





