;(function(){
    var simpleViewModel = function(){
        var self = this;
        var nameDirection = -1;
        var qtyDirection = -1;

        self.items = ko.observableArray();

        self.sortByName = function(){
            nameDirection = -nameDirection;
            self.items.sort(function(a, b){
                if (a.name > b.name) return 1 * nameDirection;
                if (a.name < b.name) return -1 * nameDirection;
                return 0;
            });
        };

        self.sortByQty = function(){
            qtyDirection = -qtyDirection;
            self.items.sort(function(a, b){
                if (a.qty > b.qty) return 1 * qtyDirection;
                if (a.qty < b.qty) return -1 * qtyDirection;
                return 0;
            });
        };

        self.items.push({ name: 'Chaska', qty: 3});
        self.items.push({ name: 'Bloomington', qty: 2});
        self.items.push({ name: 'Chanhassen', qty: 5});
        self.items.push({ name: 'Eden Prairie', qty: 4});
        self.items.push({ name: 'Duluth', qty: 3});
        self.items.push({ name: 'Crystal', qty: 7});
        self.items.push({ name: 'Falcon Heights', qty: 5});
        self.items.push({ name: 'Hermantown', qty: 4});
        self.items.push({ name: 'Proctor', qty: 2});
        self.items.push({ name: 'Superior', qty: 6});
    }

    var dynamicViewModel = function(){
        var self = this;

        self.items = ko.observableArray();

        this.addSort = function(field){
          self['sortDirection_' + field] = -1;
          self['sortBy_' + field] = function(){
            self['sortDirection_' + field] = -this['sortDirection_' + field];
            self.items.sort(function(a,b){
              if (a[field] > b[field]) return 1 * self['sortDirection_' + field];
              if (a[field] < b[field]) return -1 * self['sortDirection_' + field];
              return 0;
            });
          };
        };
      
        self.items.push({ name: 'Chaska', qty: 3});
        self.items.push({ name: 'Bloomington', qty: 2});
        self.items.push({ name: 'Chanhassen', qty: 5});
        self.items.push({ name: 'Eden Prairie', qty: 4});
        self.items.push({ name: 'Duluth', qty: 3});
        self.items.push({ name: 'Crystal', qty: 7});
        self.items.push({ name: 'Falcon Heights', qty: 5});
        self.items.push({ name: 'Hermantown', qty: 4});
        self.items.push({ name: 'Proctor', qty: 2});
        self.items.push({ name: 'Superior', qty: 6});
    }

    ko.applyBindings(new simpleViewModel(), document.getElementById('simple-table'));

    var dynamicVm = new dynamicViewModel();
    dynamicVm.addSort('name');
    dynamicVm.addSort('qty');
    ko.applyBindings(dynamicVm, document.getElementById('dynamic-table'));


})();