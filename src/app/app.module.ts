import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './pages/basic/basic.component';
import { LifecycleComponent } from './pages/basic/lifecycle/lifecycle.component';
import { MainComponent } from './pages/main/main.component';
import { TextInterpolationComponent } from './pages/basic/text-interpolation/text-interpolation.component';
import { ComponentCommunicationComponent } from './pages/basic/component-communication/component-communication.component';
import { ChildComponent } from './pages/basic/component-communication/child/child.component';
import { PipeComponent } from './pages/main/pipe/pipe.component';
import { GreetingPipePipe } from './pipes/greeting-pipe.pipe';
import { AttClassStyleBindingComponent } from './pages/main/att-class-style-binding/att-class-style-binding.component';
import { EventBindingComponent } from './pages/main/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/main/two-way-binding/two-way-binding.component';
import { CodeFieldComponent } from './components/code-field/code-field.component';
import { DirectivesComponent } from './pages/main/directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirectivesComponent } from './pages/main/structural-directives/structural-directives.component';
import { ServiceComponent } from './pages/main/service/service.component';
import { RoutingExampleComponent } from './pages/routing-example/routing-example.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/routing-example/detail/detail.component';
import { GuardedRouteComponent } from './pages/routing-example/guarded-route/guarded-route.component';
import { FormsComponent } from './pages/basic/forms/forms.component';
import { TemplateDrivenFormComponent } from './pages/basic/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './pages/basic/forms/reactive-form/reactive-form.component';
import { HttpClientComponent } from './pages/basic/http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    LifecycleComponent,
    MainComponent,
    TextInterpolationComponent,
    ComponentCommunicationComponent,
    ChildComponent,
    PipeComponent,
    GreetingPipePipe,
    AttClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CodeFieldComponent,
    DirectivesComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    ServiceComponent,
    RoutingExampleComponent,
    NotFoundComponent,
    DetailComponent,
    GuardedRouteComponent,
    FormsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
