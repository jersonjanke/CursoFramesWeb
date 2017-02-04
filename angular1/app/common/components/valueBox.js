angular.module('primeiraApp').component('valueBox', {
    bindings: {
        grid: '@',
        color: '@',
        value: '@',
        text: '@',
        icon: '@',
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)                            
        }
    ],
    template: `
   <div class="{{ $ctrl.gridClasses}}">
        <div class="small-box {{ $ctrl.color }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="{{ $ctrl.icon }}"></i>
            </div>
        </div>
    </div>
    `
})