// Const ka matalb jo v value hmne assign kar di hum chnage nhi kar skte
const accountId = '122442'
let accountEmail = "sweta@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"

// Ek baar check karte hai ki value change krte hota hai ki nahi
//accountID = 2 //not allowed

accountEmail = "hc@hn.com"
accountPassword = "23456"
accountCity = "Vranasi"

//console.log(accountId);
/* prefer to use let or const not var 
because of issue in block and functional scope
*/

//Ab hum baar bar console.log likhe ushse achaa 
//console.table use krte hai taki hmara sara output ek baar me ajaye ek table ke form me
console.table([accountId,accountEmail,accountPassword,accountCity])