# Integer Spiral API
Integer Spiral REST API With Node.js

## Endpoints
- GET /api/layouts
     Description: Will be send all layouts in database.
- POST /api/layouts
     Content-Type: application/json
     values: x:integer and y:integer
     Description: Create new layout with x and y dimensions in database and return layoutId.
 - POST /api/layouts/getValue
     Content-Type: application/json
     values: x:integer, y:integer, layoutId:integer
     Description: Return in the x and y coordinates value in layout equal to layoutId.

### Tech Stack
- Express.js
- MongoDB
