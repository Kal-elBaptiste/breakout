export default class RectCoordinates{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.isColliding = false;

        this.topLeft = [x, y];
        this.topRight = [x + width, y];
        this.bottomLeft = [x, y + height];
        this.bottomRight = [x + width, y + height]

        this.top = y;
        this.left = x;
        this.right = x + width;
        this.bottom = y + width;
    }

    isRectColliding(otherRect){
        // horizontal collision
        if (
            this.left < otherRect.right && this.right > otherRect.left &&  // horizontal overlap
            this.top < otherRect.bottom && this.bottom > otherRect.top     // vertical overlap
          ) {
            // Collision detected!
            this.isColliding = true;
            return true;

          } else {
            // No collision
            this.isColliding = false;
            return false;
          }
          
    }
}