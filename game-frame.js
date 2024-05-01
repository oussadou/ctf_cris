
parent.postMessage(window.location.toString(), "*");


var originalAlert = window.alert;
window.alert = function(s) {
  parent.postMessage("success", "*");
  setTimeout(function() { 
    originalAlert("Congratulations,Your FLAG={CRIS2WEB2}:\n\n" 
      + s + "\n\nYou can now advance to the next level.");

    // Extract the current level from the URL
    var currentLevel = parseInt(window.location.pathname.match(/\/level(\d+)/)[1]);

  
    // Redirect to the next level
    window.location.href = "/index2.html";
  }, 100);
}


