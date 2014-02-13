        // 1. Let's create a new class (this is also the constructor)
        var Ventana = function() {
            this.currentModule = null;
            this.lastModuleUsed = null;
        }
        // 2. Now let's add some methods to this new class
        Ventana.prototype.init = function() {
            // Add initialization code here
        }
        Ventana.prototype.open = function() {
            console.log("Ventana::open " + this.lastModuleUsed);
        }
        Ventana.prototype.openWith = function(module) {
            console.log("Ventana::openWith " + module);
        }
        Ventana.prototype.close = function() {
            console.log("Ventana::close " + this.currentModule);
        }

        // 3. This is an example of how you could use the new class 'Ventana'
        var myVentana = new Ventana();
            myVentana.openWith('Friends');