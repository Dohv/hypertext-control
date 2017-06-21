# hypertext-control
MIDI Controlled Web Development
## Description
Hypertext Control is a MIDI controlled HTML/CSS development tool. It works with the standard factory settings of the Behringer X-Touch Mini MIDI controller. You can simply plug it in via USB and it should work in Google Chrome. I'm not certain about this, but I believe that for now, Google Chrome is currently the only browser that supports the Web MIDI API that it depends on. Features so far include:

1. Create html elements by MIDI buttons
2. Edit the content of the elements and the ability to navigate to the different elements to edit them
3. Edit CSS for each element with knobs. Current CSS Properties available are background-color, color, padding, margin and font-size
4. Download an index.html and style.css that is generated from a GET request to the zip/:id route.
5. Saving and recalling projects to and from the database by pushing a button to enter into project select mode, then browsing the projects with a knob, then pressing the button again to load it into the view to start editing to your hearts content.

## Technical Notes
Project data stored into the database is with the Postgres datatype JSONB.

## Wireframe Layout
http://i.imgur.com/GiIkc3C.jpg
## MIDI Controller Layout
#### P: Push Encoder
#### R: Rotary Encoder
#### B: Button

|P1    |P2    |P3    |P4    |P5    |P6    |P7    |P8    |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|**R1**    |**R2**    |**R3**    |**R4**    |**R5**    |**R6**    |**R7**    |**R8**    |
|**B1**    |**B2**    |**B3**    |**B4**    |**B5**    |**B6**    |**B7**    |**B8**    |
|**B9**    |**B10**   |**B11**   |**B12**   |**B13**   |**B14**   |**B15**   |**B16**   |

#### R1 - R4
Controls CSS parameters for a particular CSS property.

