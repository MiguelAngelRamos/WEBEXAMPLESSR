import { isPlatformServer } from '@angular/common';
import { Directive, Inject, PLATFORM_ID, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: "[appShellNoRender]"
})
export class AppShellNoRenderDirective implements OnInit{
//* Necesitamos una referencia del div con id "preloader"
//*  private templateRef: TemplateRef<any>
//* Para mostrar y ocultar el elemento vamos a necesitar el private viewContainer: ViewContainerRef
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) {}

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)) {
      //* Estamos en el servidor no queremos mostrar ese elemento
      this.viewContainer.clear();
   
    } else {
      //* Aca estamos en el browser y queremos mostrar ese elemento
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}