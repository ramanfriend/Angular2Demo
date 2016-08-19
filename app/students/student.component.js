System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var StudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            StudentComponent = (function () {
                function StudentComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                }
                StudentComponent.prototype.onSubmit = function (value) {
                    console.log(value);
                };
                StudentComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'studentname': ['', common_1.Validators.required],
                        'parentname': ['', common_1.Validators.required],
                        'studentclass': ['', common_1.Validators.required],
                        'rollno': ['', common_1.Validators.required],
                        'phone': ['', common_1.Validators.required],
                        'address': ['', common_1.Validators.required]
                    });
                };
                StudentComponent = __decorate([
                    core_1.Component({
                        selector: 'student',
                        templateUrl: 'app/students/student.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], StudentComponent);
                return StudentComponent;
            }());
            exports_1("StudentComponent", StudentComponent);
        }
    }
});
//# sourceMappingURL=student.component.js.map