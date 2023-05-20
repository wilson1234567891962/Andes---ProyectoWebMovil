import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private _language= [
    {
      login: {
        email: 'CORREO ELECTRONICO',
        password: 'CLAVE',
        remember: 'RECORDAR CORREO',
        btnLogin: 'INGRESAR'
      },
      sideBar: {
        panel: 'PANEL DE ADMINISTRACION',
        setting: 'CONFIGURACION',
        store: 'VENDEDOR',
        logistic: 'CLIENTE',
        delivery: 'REPARTIDOR',
        goOut: 'SALIR'
      },
      setting: {
        title: 'PANEL DE ADMINISTRATION',
        email: 'CORREO ELECTRONICO',
        language: 'IDIOMA',
        btnSave: 'GUARDAR CONFIGURACION'
      },
      store: {
        title: 'ORDENES',
        store: 'BODEGA',
        manufacture: 'FABRICANTE',
        importer: 'IMPORTADOR',
        count: 'CANTIDAD',
        titleDetail: 'DETALLE DEL PRODUCTO',
        category: 'CATEGORIA',
        expired: 'CADUCIDAD',
        located: 'LOCALIZATION',
        amountAvailable: 'CANTIDAD DISPONIBLE',
        client: 'CLIENTE',
        run: 'EJECUTAR',
        cancel: 'CANCELAR'
      },
      logistic: {
        titlePrincipal: 'ORDENES',
        title: 'CLIENTE',
        search: 'BUSCAR',
        clean: 'LIMPIAR',
        listOrders: 'LISTADO DE ORDENES',
        name: 'NOMBRE',
        address: 'DIRECCION',
        phone: 'TELEFONO',
        status: 'ESTADO',
        ordersToProcess: 'ORDENES POR PROCESAR',
        product: 'PRODUCTO',
        amountRequested: 'CANTIDAD SOLICITADA',
        amountAvailabe: 'CANTIDAD DISPONIBLE',
        driver: 'CONDUCTOR',
        runOrders: 'PROCESAR ORDENES',
        cancelOrders: 'CANCELAR ORDENES'
      },
      deliveryMan: {
        title:'ACTUALIZAR',
        clean: 'LIMPIAR',
        restore: 'DEVOLVER'
      }
    },
    {
      login: {
        email: 'EMAIL',
        password: 'PASSWORD',
        remember: 'REMEMBER EMAIL',
        btnLogin: 'LOGIN'
      },
      sideBar: {
        panel: 'ADMINISTRATION',
        setting: 'SETTING',
        store: 'SELLER',
        logistic: 'CLIENT',
        goOut: 'LOGOUT',
        delivery: 'DELIVERY MAN',
      },
      setting: {
        title: 'ADMINISTRATION',
        email: 'EMAIL',
        language: 'LANGUAGE',
        btnSave: 'SAVE CHANGES'
      },
      store: {
        title: 'PRODUCT',
        store: 'STORE',
        manufacture: 'MANUFACTURE',
        importer: 'IMPORTER',
        count: 'COUNT',
        titleDetail: 'DETAIL OF PRODUCT',
        category: 'CATEGORY',
        expired: 'CADUCIDAD',
        located: 'LOCALIZATION',
        amountAvailable: 'AVAILABLE AMOUNT',
        client: 'CLIENT',
        run: 'EXECUTE',
        cancel: 'CANCEL'
      },
      logistic: {
        titlePrincipal: 'ORDERS',
        title: 'CLIENT',
        search: 'SEARCH',
        clean: 'CLEAN',
        listOrders: 'LIST ORDERS',
        name: 'NAME',
        address: 'ADDRESS',
        phone: 'PHONE',
        status: 'STATUS',
        ordersToProcess: 'ORDENES TO PROCESS',
        product: 'PRODUCT',
        amountRequested: 'AMOUNT REQUESTED',
        amountAvailabe: 'AMOUNT AVAILABLE',
        driver: 'DRIVER',
        runOrders: 'PROCESS ORDERS',
        cancelOrders: 'CANCEL ORDERS'
      },
      deliveryMan: {
        title:'UPDATED',
        clean: 'CLEAN',
        restore: 'RESTORE'
      }
    }
  ];
  constructor() {
  }

  validatorsFields(input) {
    return input !== undefined && input !== null && input !== 'null' && input.length !== 0;
  }

  validatorsEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!input.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  validatorDate(input: Date, count: number) {
    const date = new Date();

    const system = new Date();
    system.setDate(date.getDate() + count);

    if (system > input) {
      return false;
    }
    return true;
  }

  conversionDate(inputDataPicker: Date, validationDate: string) {
    const date = new Date(this.changeFormatDate(validationDate));
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    inputDataPicker.setDate(inputDataPicker.getDate()+1);
    return day === inputDataPicker.getDate() && month === inputDataPicker.getMonth() && year === inputDataPicker.getFullYear();
  }

  changeFormatDate(value): string {
    const date = value;
    const tmp = date.split('-');
    const newDate = tmp[1] + '-' + tmp[0] + '-' + tmp[2];
    return newDate;
  }

  betweenDate(inputStartDataPicker: Date, inputEndDatePicker: Date, validationDate: string) {
    const date = new Date(this.changeFormatDate(validationDate));
    inputStartDataPicker.setDate(inputStartDataPicker.getDate());
    inputEndDatePicker.setDate(inputEndDatePicker.getDate() + 1);
    return inputStartDataPicker <= date && inputEndDatePicker >= date;
  }


  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 10
  ) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  getLanguage(){
    const language = localStorage.getItem('LANGUAGE') ? localStorage.getItem('LANGUAGE') : 'ESPAÑOL' ;
    if(language === 'ESPAÑOL'){
      return this._language[0];
    }

    if(language === 'INGLES'){
      return this._language[1];
    }
  }
}
