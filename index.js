// Your code here
const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#FF69B4" ;
// dodger.style.bottom = '0px' ;
// dodger.style.left = '0px' ;

// document.addEventListener("keydown", (e) => {
//     console.log(e);
// });

document.addEventListener("keydown", (e) => {
    // if (e.key === "ArrowLeft") {
    //     moveDodgerLeft();
    // }
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        console.log(e);
    };

    if (e.key === "ArrowRight") {
        moveDodgerRight();
        console.log(e);
    }
}
);









function moveDodgerLeft() {
    
    document.addEventListener("keydown", function (event) {
        // dodger.style.left = "179px"
        if (event.key === "ArrowLeft"){
            const leftNos = dodger.style.left.replace("px", "");
            const left = parseInt(leftNos, 10);
            // console.log(left);  
            // dodger.style.left = `${left - 1 }px`
            if (left > 0) {
                dodger.style.left = `${left - 1}px`;
              }
        }
    });
    // document.addEventListener("keydown", (e) => {
    //     if (e.key === "ArrowLeft") {
    //         dodger.style.left = 0;
    //     }
    // });

}

function moveDodgerRight() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight"){
            const rightNos = dodger.style.left.replace("px", "");
            console.log(rightNos);
            const right = parseInt(rightNos, 10);
            console.log(right);
            if (right < 360) {
                dodger.style.left = `${right + 1 }px`
                
            }
        }
    });
}

