/// <reference path="interfaces/options.d.ts" />
/// <reference path="interfaces/app-start-options.d.ts" />

declare module 'cordova-plugin-advanced-background-mode' {

    export default class BackgroundMode {
        
        static enable();
        
        static disable();
        
        static setEnabled(enable: boolean);
        
        static getDefaults(): Options;
        
        static getSettings(): Options;
        
        static setDefaults(override: Options, callback?: () => void);
        
        static configure(override: Options);
        
        static disableWebViewOptimizations();
        
        static disableBatteryOptimizations();
        
        static openAppStartSettings(options: AppStartOptions | boolean);
        
        static moveToBackground();
        
        static moveToForeground();
        
        static excludeFromTaskList();

        static includeToTaskList();

        static overrideBackButton();
        
        static isScreenOff(callback: (result: any) => void);
        
        static wakeUp();
        
        static unlock();
        
        static isEnabled(): boolean;
        
        static isActive(): boolean;
        
        static fireEvent(event: string);
        
        static on(event: string, callback: (result: any) => void, scope?);
        
        static un(event: string, callback: (result: any) => void);
        
    }
    
}
