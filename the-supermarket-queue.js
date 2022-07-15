function queueTime(customers, n) 
{
    let queues = {};
    if(customers.length === 0){
        return 0;
    }
    if(n > customers.length)
    {
        return Math.max(...customers);
    }
    
    if(n === 1)
    {
        let sum = 0;
        for(let i = 0; i < customers.length; i++){
            sum += customers[i];
        }
        return sum;
    }

    let cnt = 0;
    for(let i = 0; i < n; i++){
        queues[i] = 0;
    }
    for(let i = 0; i < customers.length; i++)
    {
        // console.log(cnt === n);
        if(i < n){
            if(cnt === n)
            {   
                cnt = 0;
            }
            queues[cnt] += customers[i];
            cnt += 1;
        }else{
            let lowest = Object.keys(queues).find((key) => queues[key] === Math.min(...Object.values(queues)));
            queues[lowest] += customers[i];
        }
    }
    return Math.max(...Object.values(queues))
}

function queueTime(customers, n) 
{
    if(n === 1 || customers.length === 0)
    {
        let sum = 0;
        for(let i = 0; i < customers.length; i++){
            sum += customers[i];
        }
        return sum;
    }

    if(n > customers.length)
    {
        return Math.max(...customers);
    }

    let cnt = 0;
    const queues = customers.reduce((acc, curr) => {
        if(cnt < n){
            acc[cnt] = curr;
        }else{
            let lowest = Object.keys(acc).find((key) => acc[key] === Math.min(...Object.values(acc)));
            acc[lowest] += curr
        }
        cnt += 1;
        return acc;
    }, {});

    return Math.max(...Object.values(queues))
}

function queueTime(customers, n){
    let queues = new Array(n).fill(0);
    for(let i = 0; i < customers.length; i++){
        let index = queues.indexOf(Math.min(...queues));
        queues[index] += customers[i];
    }
    return Math.max(...queues);
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
console.log(queueTime([1,2,3,4,5], 100), 5);
console.log(queueTime([9,2,13,16,4,6,18,17,16,7,6,16,16,1,19,16,12,14,4,17,19,5,3,6,15,11,9,20,18,7,7,17,5,17,15,20,18,10,9,3,2,18,15,2,12,7,7,20,16,10,5,10,14,16,9,1,12,16,12,12,1,6,6,16,14,2,5,12,14,18,16,8,4], 6), 137);
console.log(queueTime([19,9,19,6,10,13,14,13,20,14,17,19,9,8,10,12,16,10,7,18,3,14,10,10,16,11,16,11,20,8,15,20,13,3,12,16,20,9,10,2,9,20,4,8,15,1,8,20,18,10,8,13,3,11,8,15,20,8,5,10,7,9,11,8,6,10,1,17,11,18,12,18,7,10,12,9,5,1,18,19,13,10,12,20,18,8,17,6,20,3,14,5,2,20,7,14,14,17,8,20,12,5,8,12,15,7,3,18,17,13,6,17,15,1,18,7], 9), 159)