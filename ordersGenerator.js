[
  {
    'repeat:100': {
      aDay: function() {
        return 60*60*24*1000;
      },
      date: function() {
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
        if(this.state_i === 1) {
          var p = integer(0,100);
          if (p < 80) {
            return 1;
          } else {
            return 2;
          }
        } else {
          return 0;
        }
      },
      state: function() {
        var states = ['unsubmitted', 'received'];
        return states[this.state_i];
      },
      method: function() {
        var types = ["unsubmitted", 'Credit', 'Bank'];
        return types[this.method_i];
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
      revenue: function() {
        if(this.state_i === 1) {
          return 100;
        } else {
          return 0;
        }
      },
      daysCompletionPayment: function() {
        if(this.state_i === 1) {
          var p = integer(0,100);
          if (p < 20) {
            return 0;
          } else if (p < 40) {
            return 1;
          } else if (p < 45) {
            return 2;
          } else if (p < 50) {
            return 3;
          } else if (p < 80) {
            return integer(4,7);
          } else if (p < 95) {
            return integer(8,14);
          }else {
            return integer(15,40);
          }
        } else {
          return -1;
        }
      }
    }
  }
]