angular.module(
    'index',
    [
        'ionic'
    ]
)
.run(
    function($ionicPlatform)
    {
        $ionicPlatform.ready(
            function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }

                if(window.StatusBar) {
                    StatusBar.styleDefault();
                }
            }
        );
    }
)
.controller(
    'indexController',
    function(
        $scope
    ) {

        $scope.converter = function()
        {
            var nr_qtd_taxa = $scope.nr_qtd_taxa;
            var nr_qtd_peso = $scope.nr_qtd_peso;
            var ds_conversao = $scope.ds_conversao;

            nr_qtd_taxa = nr_qtd_taxa.replace(",", ".");
            nr_qtd_peso = nr_qtd_peso.replace(",", ".");

            var ds_valor =  nr_qtd_peso / nr_qtd_taxa;

            if (ds_conversao == '*') {
                var ds_valor =  nr_qtd_peso * nr_qtd_taxa;
            }

            $scope.nr_qtd_valor = ds_valor.toFixed(2).replace(
               /./g,
               function(c, i, a) {
                  return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
               }
            );
        }

        $scope.taxaPeso = function()
        {
            $scope.nr_qtd_taxa = '0,0003443';
        }

        $scope.taxaDola = function()
        {
            $scope.nr_qtd_taxa = '2951,0500';
        }
    }
);
