#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(ExitAppIosPlugin, "ExitAppIosPlugin", CAP_PLUGIN_METHOD(killApp, CAPPluginReturnPromise);)
