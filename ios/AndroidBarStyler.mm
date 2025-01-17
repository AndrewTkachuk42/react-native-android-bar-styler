#import "AndroidBarStyler.h"

@implementation AndroidBarStyler
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAndroidBarStylerSpecJSI>(params);
}

- (void)setStatusBarColor:(NSString *)color
               isAnimated:(NSNumber *)isAnimated
                 duration:(NSNumber *)duration
{
    // No-op implementation for iOS
}

- (void)setNavigationBarColor:(NSString *)color
                   isAnimated:(NSNumber *)isAnimated
                     duration:(NSNumber *)duration
{
    // No-op implementation for iOS
}

- (void)setStatusBarStyle:(JS::NativeAndroidBarStyler::BarStyleOptions &)options
{
    // No-op implementation for iOS
}

- (void)setNavigationBarStyle:(JS::NativeAndroidBarStyler::BarStyleOptions &)options
{
    // No-op implementation for iOS
}

- (void)setSystemBarsStyle:(JS::NativeAndroidBarStyler::BarStyleOptions &)options
{
    // No-op implementation for iOS
}

@end
