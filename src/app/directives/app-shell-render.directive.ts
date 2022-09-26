import { isPlatformServer } from '@angular/common';
import { Directive, Inject, PLATFORM_ID, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: "[appShellRender]"
})
export class AppShellRenderDirective implements OnInit{
//* Esta directiva debe representar el contenedor al que aplica solo en el lado del servidor

//* Necesitamos una referencia del div con id "preloader"
//*  private templateRef: TemplateRef<any>

//* Para mostrar y ocultar el elemento vamso a necesitar el  private viewContainer: ViewContainerRef
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) {}

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)) {
      //* Estamos en el servidor queremos renderizar el div con el loading
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      //* Aca estamos en el browser
      this.viewContainer.clear();
      //* Vamos eliminar la plantilla ese div con el loading
    }
  }
}