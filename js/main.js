var drawerEl = document.querySelector('.mdc-drawer');
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(drawerEl);
        document.querySelector('.mdc-toolbar__menu-icon').addEventListener('click', function() {
          //drawer.open = true;
		  drawer.foundation_.open();
        });
		document.querySelector('.mdc-list').addEventListener('click', function() {
          //drawer.open = false;
		  drawer.foundation_.close();
        });
		/*
        drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
          console.log('Received MDCTemporaryDrawer:open');
        });
        drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
          console.log('Received MDCTemporaryDrawer:close');
        });
		*/
        // Demonstrate application of --activated modifier to drawer menu items
        var activatedClass = 'mdc-list-item--selected';
        document.querySelector('.mdc-drawer__drawer').addEventListener('click', function(event) {
          var el = event.target;
          while (el && !el.classList.contains('mdc-list-item')) {
            el = el.parentElement;
          }
          if (el) {
            var activatedItem = document.querySelector('.' + activatedClass);
            if (activatedItem) {
              activatedItem.classList.remove(activatedClass);
            }
            event.target.classList.add(activatedClass);
          }
        });
		
