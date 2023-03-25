// function sortEmotions(arr, order)
// {
//     const emotions = [":D", ":)", ":|", ":(", "T_T"];
//     if(order){
//         arr.sort((a, b) => {
//             return emotions.indexOf(a) - emotions.indexOf(b);
//         });
//     }else{
//         arr.sort((a, b) => {
//             return emotions.indexOf(b) - emotions.indexOf(a);
//         })
//     }
//     return arr;
// }

function sortEmotions(arr, order) {
    const emotions = [":D", ":)", ":|", ":(", "T_T"];

    return arr.sort((a, b) => order 
        ? emotions.indexOf(a) - emotions.indexOf(b) 
        : emotions.indexOf(b) - emotions.indexOf(a)
    );
}


  console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], true), [ ':D', ':D', ':(', 'T_T' ])
  console.log(sortEmotions([ 'T_T', ':D', ':(', ':(' ], true), [ ':D', ':(', ':(', 'T_T' ])
  console.log(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true), [ ':D', ':D', ':)', ':)', 'T_T' ])


  console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], false), [ 'T_T', ':(', ':D', ':D' ])
  console.log(sortEmotions([ 'T_T', ':D', ':(', ':(' ], false), [ 'T_T', ':(', ':(', ':D' ])
  console.log(sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], false),  [ 'T_T', ':)', ':)', ':D', ':D' ])
