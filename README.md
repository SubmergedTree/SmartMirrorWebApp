States:

| State        | Type          | Description                                                               |effect  |
| ------------- |:-------------:| :------------------------------------------------------------------------:|-----------------------------------------------------------------------------:|
| mirrorFound    | boolean      |  url points to vaild. status of mirror is up                              |true: accept url button is shown false: accept url button is hidden
| acceptUrl      | string       |  user accepts url. constains url                                          |not empty: logout button is shown in header, user list is loaded  empty: find mirror form is shown (logout)
| users          | array        |  user list                                                    |...
| activeUser     | string       |  user choosed from list                                                   |set active user
| activeView     | string       |  updateWidgetView or AddPictureView                                       |shows delete user button, update widget and add picture
| widgets        | object       |  widgets from user will be cached until logout                            |...

TODO

