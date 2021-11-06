# Integer Spiral API
Integer Spiral REST API With Node.js

## Endpoints
- GET /api/layouts
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Description: Will be send all layouts in database.
- POST /api/layouts
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Content-Type: application/json
<br/>&nbsp;&nbsp;&nbsp;&nbsp;values: x:integer and y:integer
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Description: Create new layout with x and y dimensions in database and return layoutId.
 - POST /api/layouts/getValue
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Content-Type: application/json
<br/>&nbsp;&nbsp;&nbsp;&nbsp;values: x:integer, y:integer, layoutId:mongoose.objectId
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Description: Return in the x and y coordinates value in layout equal to layoutId.

### Tech Stack
- Express.js
- MongoDB
