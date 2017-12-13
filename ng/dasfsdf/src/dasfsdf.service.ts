import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';




@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  getHi(): Promise<string> {
    return this.ngClient.call<string>("asdasdasd", "dasfsdf", "GET", "/hi", {  });
  }

  getImportedHi(): Promise<string> {
    return this.ngClient.call<string>("asdasdasd", "dasfsdf", "GET", "/imported-hi", {  });
  }

  postInputExample(rect: Rectangle, unit: string): Promise<Output> {
    return this.ngClient.call<Output>("asdasdasd", "dasfsdf", "POST", "/input-example", { "rect": rect, "unit": unit });
  }

  getSqlExample(): Promise<void> {
    return this.ngClient.call<void>("asdasdasd", "dasfsdf", "GET", "/sql-example", {  });
  }

}
