import { Routes } from '@angular/router';
import { ProductListComponent } from './component/products/product-list/product-list.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { AddProductComponent } from './component/products/add-product/add-product.component';
import { EditProductComponent } from './component/products/edit-product/edit-product.component';
import { TemplateFormComponent } from './component/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './component/forms/reactive-form/reactive-form.component';
import { LifecycleEventComponent } from './component/lifecyle-event/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './component/ngtemplate/ngtemplate/ngtemplate.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    //default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '', component: DashboardComponent,
        children: [
            { path: 'product-list', component: ProductListComponent },
            { path: 'products/add', component: AddProductComponent },
            { path: 'products/edit/:id', component: EditProductComponent },
            { path: 'template-form', component: TemplateFormComponent },
            { path: 'reactive-form', component: ReactiveFormComponent },
            { path: 'lifecycle-event', component: LifecycleEventComponent },
            { path: 'ngtemplate', component: NgtemplateComponent }

        ]
    },

];
