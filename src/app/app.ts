import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventModule } from 'meepo-event';
import { MeepoCoreServiceModule } from 'meepo-core';
import { PermissionsModule } from 'meepo-permissions';
import { IconsModule } from 'meepo-icons';
import { CommonModule } from '@angular/common';
import { StoreModule } from 'meepo-store';
import { AxiosModule } from 'meepo-axios';
import { FilePickerComponent } from './file-picker/file-picker';

import { LoaderModule } from 'meepo-loader';
import { UaModule } from 'meepo-ua';

@NgModule({
    imports: [
        EventModule.forRoot(),
        PermissionsModule.forRoot({
            items: ['admin']
        }),
        IconsModule,
        CommonModule,
        StoreModule,
        AxiosModule,
        LoaderModule.forRoot({
            root: ''
        }),
        UaModule
    ],
    exports: [
        FilePickerComponent
    ],
    declarations: [
        FilePickerComponent
    ],
    providers: [
    ],
})
export class FooterModule {
   
}

