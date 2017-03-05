import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  token: string;
  constructor() { }
  
	save(_token: string){
		this.token=_token;
		console.log(this.token);
	}
	retrieve(): string {
		return this.token;
	}
}
