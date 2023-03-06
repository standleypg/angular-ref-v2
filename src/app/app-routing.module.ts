import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { MainGuardGuard } from './guards/main-guard.guard';
import { BasicComponent } from './pages/basic/basic.component';
import { ChildComponent } from './pages/basic/component-communication/child/child.component';
import { ComponentCommunicationComponent } from './pages/basic/component-communication/component-communication.component';
import { FormsComponent } from './pages/basic/forms/forms.component';
import { HttpClientComponent } from './pages/basic/http-client/http-client.component';
import { LifecycleComponent } from './pages/basic/lifecycle/lifecycle.component';
import { TextInterpolationComponent } from './pages/basic/text-interpolation/text-interpolation.component';
import { AttClassStyleBindingComponent } from './pages/main/att-class-style-binding/att-class-style-binding.component';
import { DirectivesComponent } from './pages/main/directives/directives.component';
import { EventBindingComponent } from './pages/main/event-binding/event-binding.component';
import { MainComponent } from './pages/main/main.component';
import { PipeComponent } from './pages/main/pipe/pipe.component';
import { ServiceComponent } from './pages/main/service/service.component';
import { StructuralDirectivesComponent } from './pages/main/structural-directives/structural-directives.component';
import { TwoWayBindingComponent } from './pages/main/two-way-binding/two-way-binding.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/routing-example/detail/detail.component';
import { GuardedRouteComponent } from './pages/routing-example/guarded-route/guarded-route.component';
import { RoutingExampleComponent } from './pages/routing-example/routing-example.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'pipe',
        pathMatch: 'full',
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'att-class-style-binding',
        component: AttClassStyleBindingComponent,
      },
      {
        path: 'event-binding',
        component: EventBindingComponent,
      },
      {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
      },
      {
        path: 'directives',
        component: DirectivesComponent,
      },
      {
        path: 'structural-directives',
        component: StructuralDirectivesComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
    ],
  },
  {
    path: 'example',
    component: BasicComponent,
    children: [
      {
        path: '',
        redirectTo: 'lifecycle',
        pathMatch: 'full',
      },
      {
        path: 'lifecycle',
        component: LifecycleComponent,
      },
      {
        path: 'text-interpolation',
        component: TextInterpolationComponent,
      },
      {
        path: 'component-communication',
        component: ComponentCommunicationComponent,
        children: [
          {
            path: 'child',
            component: ChildComponent,
          },
        ],
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'http-client',
        component: HttpClientComponent,
      },
    ],
  },
  {
    path: 'routing-example',
    component: RoutingExampleComponent,
    children: [
      {
        path: 'person/:id',
        component: DetailComponent,
      },
      {
        path: 'guarded',
        component: GuardedRouteComponent,
        canActivate: [MainGuardGuard],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
