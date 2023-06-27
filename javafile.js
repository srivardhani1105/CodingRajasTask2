var quotes=['Ask not what your country can do for you; ask what you can do for your country.',
'Genius is one percent inspiration and ninety-nine percent perspiration.',
'If you want something said, ask a man; if you want something done, ask a woman.',
'Life is like a box of chocolates. You never know what you are gonna get.',
'Life is like riding a bicycle. To keep your balance, you must keep moving.',
'That is one small step for a man, a giant leap for mankind.',
'The way to get started is to quit talking and begin doing.',
'You must be the change you wish to see in the world.']
var authors=['-John Kennedy','-Thomas Edison','-Margaret Thatcher','-Forrest Gump',
'-Albert Einstein','-Neil Armstrong','-Walt Disney','-Mahatma Ghandi']
function newQuote()
{
    var randomNum=Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').innerHTML=quotes[randomNum];
    document.getElementById('author').innerHTML=authors[randomNum];
}
