
// hi
//--------'top border' below------------------------>

function drawTopBorder(top) {
  
        let block = '\u250F';
        let block2 = '\u2513';

    return block + drawLine(top) + block2
}

// console.log(drawTopBorder());

//--------'draw bars around' below------------------------>

function drawBarsAround(arr) {

    let block3 = '\u2503';

    return block3 + arr + block3;
}

// console.log(drawBarsAround());

//--------'middle border' below------------------------>

function drawMiddleBorder(mid) {

        let block4 = '\u2523';
        let block5 = '\u252B';
    
    return block4 + drawLine(mid) + block5
}

// console.log(drawMiddleBorder());


//--------'bottom border' below------------------------>

function drawBottomBorder(bot) {
    
        let block8 = '\u2517';
        let block9 = '\u251B';


    return block8 + drawLine(bot) + block9;
}

// console.log(drawBottomBorder());


//--------'horizontal' line below-------------------->

function drawLine(hori) {
    let newLine = '';
    for (let i = 1; i <= hori; i++) {
        newLine += '\u2501';

    }
    return newLine;
}

// console.log(drawLine());

// //--------'box it' below------------------------>

// function boxIt(arr) {
//     let largest = ''; 
//     let z = 0
//     let results = ''; 

//     for (let i = 0; i < arr.length; i++) {
//             if (arr[i].length > z) {
//                 z = arr[i].length
//                 largest += arr[i]
//              } 
//     }
    
//     const top = drawTopBorder(largest.length) 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length == 1) {
//             results = drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))
//         }
//         else if (i == arr.length -1) {
//             results += drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))
//         } else {
//             results += `${drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))}\n${drawMiddleBorder(largest.length)}\n`
//         }    
//     } 
//     const bottom = drawBottomBorder(largest.length)
    
//     return `${top}\n${results}\n${bottom}`;
// }

// console.log(boxIt([]));

//---------------------------
const arr = process.argv.slice(2);

    let largest = ''; 
    let z = 0
    let results = ''; 

    for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > z) {
                z = arr[i].length
                largest += arr[i]
            }
        }
    
    const top = drawTopBorder(largest.length)

    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 1) {
            results = drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))
        }
        else if (i == arr.length -1) {
            results += drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))
        } else {
            results += `${drawBarsAround(arr[i] + ' '.repeat(largest.length - arr[i].length))}\n${drawMiddleBorder(largest.length)}\n`
        }    
    } 
    const bottom = drawBottomBorder(largest.length)


    console.log(`${top}\n${results}\n${bottom}`);