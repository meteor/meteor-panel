(function () {

  // This will run once on panel page load, which is basically
  // whenever you open the dev tools.
  //
  // How do we find out when the inspected page changes?
  //
  // If we want to keep state across closing the dev tools,
  // there are definitely mechanisms for that, like
  // "background pages."

  chrome.devtools.inspectedWindow.eval(
    'Meteor.release',
    function (result, isException) {
      document.body.appendChild(document.createTextNode(
        'Meteor.release = ' + result));
    });

})();
