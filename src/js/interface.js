$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $('#temperature-up').click(function() { // event listner
    thermostat.up(); // update model
    updateTemp(); // update view
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemp();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemp();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#ps-status').text('ON')
    updateTemp();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#ps-status').text('OFF')
    updateTemp();
  })

  // need to add feature in model such that when psm turned back on,
  // temp is reset to 20. At the moment, if you turn it back on whilst above 25
  // temp can be raised infinitely.

  function updateTemp() { //refactored
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
