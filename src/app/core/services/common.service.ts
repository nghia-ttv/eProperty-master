import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CommonService {

    constructor(private translate: TranslateService) {
    }

    public setCurrentLanguage(language: string) {
        language = language || 'en';
        const languageApp = language.indexOf('thai') !== -1 ? 'thai' : 'en';
        this.translate.setDefaultLang(languageApp);
    }

}
