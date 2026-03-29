## Navigation / Link Testing

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| NAV-01  | Click Play button on home page | Navigates to game.html | Pass |
| NAV-02 | Click Home button (Home) on game page | Returns to index.html | Pass |
| NAV-03 | Click Home button on loss modal | Returns to index.html | Pass |
| NAV-04 | Click Home button on win modal | Returns to index.html | Pass |
| NAV-05 | Click Return home button on 404 page | Returns to index.html | Pass |
| NAV-06 | Click Play again button on loss modal | game.html reloads and new game starts | Pass |
| NAV-07 | Click Play again button on win modal | game.html reloads and new game starts | Pass |
| NAV-08 | Click Play again button on review screen | game.html reloads and new game starts | Pass |


## UI / Interaction Testing

### Modal Behaviour

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-01 | Click dragon button on game page | The Story modal opens | Pass |
| UI-02 | Click ? button on game page | How to play modal opens | Pass |
| UI-03 | Close The Story modal (Click close button) on game page | Modal closes | Pass |
| UI-04 | Close The Story modal (Click X) on game page | Modal closes | Pass |
| UI-05 | Close The Story modal (Click backdrop) on game page | Modal closes | Pass |
| UI-06 | Close The Story modal (Press Esc) on game page | Modal closes | Pass |
| UI-07 | Close  How to Play modal (Click close button) on game page | Modal closes | Pass |
| UI-08 | Close  How to Play modal (Click X) on game page | Modal closes | Pass |
| UI-09 | Close  How to Play modal (Click backdrop) on game page | Modal closes | Pass |
| UI-10 | Close  How to Play modal (Press Esc) on game page | Modal closes | Pass |
| UI-11 | Win modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-12 | Win modal - Esc key does not close modal | Modal doesn't close | Pass |
| UI-13 | Loss modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-14 | Loss modal - Esc key does not close modal | Modal doesn't close | Pass |

### Hover States of Buttons

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-15 | Play (homepage), Play again (review screen), Return home (404 page) | Subtle change in text colour and cursor changes to pointer | Pass |
| UI-16 | Try button (gamepage) | Cursor changes to pointer | Pass |
| UI-17 | Dragon button, ? button, home button (gamepage) | Buttons scale and cursor changes to pointer | Pass |
| UI-18 | All modal buttons | No background colour, text changes colour, cursor changes to pointer | Pass | 






 