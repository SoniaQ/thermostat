function Thermostat() {
  this.MIN_TEMP = 10;
  this.defaultTemp = 20;
  this.psMode = 'ON';
  this.PS_ON_MAX = 25;
  this.PS_OFF_MAX = 32;
  this.Medium_Usage_Limit = 18

  this.mode = this.psMode;
  this.temp = this.defaultTemp;
  }

  Thermostat.prototype.currentTemp = function() {
    return this.temp;
  }

  Thermostat.prototype.up = function () {
    if (this.isMaximumTemp()) {
      return;
    }
    this.temp++;
  };

  Thermostat.prototype.isMaximumTemp = function() {
    if (this.mode === 'OFF') {
      return this.temp === this.PS_OFF_MAX;
    }
    return this.temp === this.PS_ON_MAX;
  }

  Thermostat.prototype.down = function() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temp--;
  }

  Thermostat.prototype.isMinimumTemp = function() {
    return this.currentTemp() === this.MIN_TEMP;
  }

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    return this.mode = 'OFF';
  }

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    return this.mode = 'ON';
  }

  Thermostat.prototype.reset = function() {
    this.temp = this.defaultTemp;
  }

  Thermostat.prototype.energyUsage = function() {
    if (this.temp < this.Medium_Usage_Limit) {
      return 'Low-usage';
    }
    if (this.temp >= this.Medium_Usage_Limit && this.temp <= this.PS_ON_MAX) {
      return 'Medium_usage';
    }
    return 'High-usage';
  }
