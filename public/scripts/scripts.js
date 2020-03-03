function() {
 
    var output;
    var input = {{Click Text}};
    
    if (input == null || input == ‘’) {
    output = ‘undefined’;
    } else {
    if (input.length > 100) {
    output = input.substring(0,100).toLowerCase() + ‘…’;
    } else {
    output = input.toLowerCase();
    }
    }
    
    return output;
   }