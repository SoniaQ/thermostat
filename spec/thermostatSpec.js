describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('initial state of thermostat', function() {

    it('has a starting temperature of 20 degrees', function () {
      expect(thermostat.currentTemp()).toEqual(20);
    });

  });

  describe('up function', function() {
    it('can increase the temperature', function() {
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe('down function', function() {
    it('can decrease the temperature', function() {
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('it has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });
  });

  describe('power saving mode', function() {
    it('is set to ON as default', function() {
      expect(thermostat.mode).toBe('ON');
    });
    it('can be turned off and back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.mode).toEqual('OFF');
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.mode).toEqual('ON');
    });
    it('reaches a maxim of 25 degrees when ON', function() {
      for (var i = 20; i < 25; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
    it('reaches a maximum of 32 degrees when OFF', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 20; i < 32; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });

  describe('reset mode', function() {
    it('can return the temperature to the default temperature', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });

  describe('energy usage', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('has low energy usage', function() {
        for (var i = 20; i > 9; i--) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('Low-usage');
      });
    });
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('has medium energy usage', function() {
        expect(thermostat.energyUsage()).toEqual('Medium_usage');
      });
    });
    describe('when the temperature is higher than 25 degrees', function() {
      it('has high energy usage', function() {
        for (var i = 26; i < 33; i++) {
          thermostat.switchPowerSavingModeOff();
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('High-usage');
      });
    });
  });

});
