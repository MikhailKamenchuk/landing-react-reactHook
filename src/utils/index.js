// const distructureArrForResponsiveDesign = (arr, size) =>{
//     let subarray = [];
//     for (let i = 0; i <Math.ceil(arr.length/size); i++){
//         subarray[i] = arr.slice((i*size), (i*size) + size);
//     }
//     return subarray
// };
//
// export {
//     distructureArrForResponsiveDesign
// }

const selectedHandler = (e) => {
    const targetTag = e.target;
    const list = targetTag.parentNode.parentNode.querySelectorAll('.need__selected__control');
    list.forEach(item => item.style.display = "flex");
    targetTag.style.display = 'none';
};

// const getImages = () => {
//     const importAll = (r) => {
//         return r.keys().map(r)
//     };
//     const arr = importAll(require.context('../../img/featured-works', false, /\.(png|jpe?g|svg)$/));
//     return arr.map(
//         item => {
//             let afterSlashChars = item.match(/\/([^\/]+)\/?$/)[1];
//             let arr = afterSlashChars.split('.');
//             return {
//                 id: arr[0],
//                 name: arr[0] + '.' + arr[2],
//                 src: item
//             }
//         }
//     );
// };

export {
    selectedHandler
}