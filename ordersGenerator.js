[
  {
    'repeat:100': {
      aDay: function() {
      return 60*60*24*1000;
      },
      today: function() {
        return new Date((new Date()).getTime() - this.aDay * integer(0, 365));
      },
      state_i: function() {
        var p = integer(0,100);
        if (p < 70) {
          return 0;
        } else {
          return 1;
        }
      },
      method_i: function() {
        var p = integer(0,100);
        if (p < 80) {
          return 0;
        } else {
          return 1;
        }
      },
      state: function() {
        var states = ['unsubmitted', 'received'];
        return states[this.state_i];
      },
      method: function() {
        var types = ['Credit', 'Bank'];
        return states[this.state_i];
      },
      country: function() {
        var countries = ['SouthAfrica', 'Mexico', 'Poland'];
        var p = integer(0, 100);
        var i;
        if (p < 60) {
          i = 0;
        } else if (p < 85) {
          i = 1;
        } else {
          i = 2;
        }
        return countries[i];
      },
      daysCompletionApproval: function() {
        if(this.state_i === 3) {
          var p = integer(0,100);
          if (p < 30) {
            return 0;
          } else if (p < 70) {
            return 1;
          } else if (p < 90) {
            return integer(2,4);
          } else {
            return integer(5,14);
          }
        } else {
          return -1;
        }
      },
      visitedAt: function() {
        var date = new Date(this.today);
        return date.getFullYear() + "" + ("0" + (date.getMonth() + 1)).slice(-2) + "" + ("0" + date.getDate()).slice(-2);
      },
      startedAt: function() {
        var daysLater = integer(0, 3);
        if(this.state_i > 0) {
          var date = new Date(this.today + this.aDay * daysLater);
          return date.getFullYear() + "" + ("0" + (date.getMonth() + 1)).slice(-2) + "" + ("0" + date.getDate()).slice(-2);
        } else {
          return -1;
        }
      },
      completedAt: function() {
        var daysLater = integer(0, 7);
        if(this.state_i > 1) {
          var date = new Date(this.today + this.aDay * daysLater);
          return date.getFullYear() + "" + ("0" + (date.getMonth() + 1)).slice(-2) + "" + ("0" + date.getDate()).slice(-2);
        } else {
          return -1;
        }
      },
      approvedAt: function() {
        var daysLater = integer(0, 7);
        if(this.state_i > 2) {
          var date = new Date(this.today + this.aDay * daysLater);
          return date.getFullYear() + "" + ("0" + (date.getMonth() + 1)).slice(-2) + "" + ("0" + date.getDate()).slice(-2);
        } else {
          return -1;
        }
      }
    }
  }
]