[
  {
    'repeat:100': {
      aDay: function() {
        return 60*60*24*1000;
      },
      date: function() {
        return new Date((new Date()).getTime() - this.aDay * integer(0, 365));
      },
      // _id: '{{objectId()}}',
      state_i: function() {
        var p = integer(0,100);
        if (p < 50) {
          return 0;
        } else if (p < 85) {
          return 1;
        } else if (p < 95) {
          return 2;
        } else {
          return 3;
        }
      },
      state: function() {
        var states = ['visited', 'started', 'completed', 'approved'];
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
          } else if (p < 50) {
            return 1;
          } else if (p < 80) {
            return integer(2,4);
          } else {
            return integer(5,7);
          }
        } else {
          return -1;
        }
      }
    }
  }
]