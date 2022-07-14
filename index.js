// code your solution here
function superbowlWin(records) {
    let win = records.find(a=>a.result==='W');
    if(win){
    return win.year;
    }
}
    superbowlWin(record);