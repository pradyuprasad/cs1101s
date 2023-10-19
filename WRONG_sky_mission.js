// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();
    
    if (width >= 256 && height >= 256) {
        
        // top row transitions from red to green
        for (let x = 0; x < width; x = x +1) {
            dest[0][x][0] = (1-(x/width))*255;
            dest[0][x][1] = (x/width)*255;
            dest[0][x][2] = 0;
            dest[0][x][3] = 255;
        }
        
        // rightmost column transitions from green to blue
        for (let y = 0; y < height; y = y + 1) {
            const x = width-1;
            dest[y][x][0] = 0;
            dest[y][x][1] = (1-(y/height))*255;
            dest[y][x][2] = (y/height)*255;
            dest[y][x][3] = 255;
        }
        
        // bottom row transitions from blue to yellow 
        for (let x = 0; x < width; x = x +1) {
            const y = height-1;
            dest[y][x][0] = (1-(x/width))*255;
            dest[y][x][1] = (1-(x/width))*255;
            dest[y][x][2] = (x/width)*255;
            dest[y][x][3] = 255;
        }
        
        // leftmost column transitions from yellow to red (bottom to top) 
        for (let y = 0; y < height; y = y + 1) {
            const x = 0;
            dest[y][x][0] = 255;  // red always at max
            dest[y][x][1] = (y / height) * 255; // green decreases from bottom to top
            dest[y][x][2] = 0;  
            dest[y][x][3] = 255;  // alpha channel
        }
        
        for (let y = 1; y < height-1; y = y + 1) {
            for (let x = 1; x < width-1; x = x + 1) {
                dest[y][x][0] = 255- src[y][x][0]; // invert red intensity
                dest[y][x][1] = 255 - src[y][x][1]; // invert green intensity
                dest[y][x][2] = 255 - src[y][x][2]; // invert blue intensity
                dest[y][x][3] = 255;                // always 255
            }
        }


        
    }
    
    else {
        for (let y = 0; y < height; y = y + 1) {
            for (let x = 0; x < width; x = x + 1) {
                dest[y][x][0] = 255- src[y][x][0]; // invert red intensity
                dest[y][x][1] = 255 - src[y][x][1]; // invert green intensity
                dest[y][x][2] = 255 - src[y][x][2]; // invert blue intensity
                dest[y][x][3] = 255;                // always 255
            }
        }
    }
}

install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();